import { ServiceStatus } from "@/backend";
import { GlassCard } from "@/components/GlassCard";
import { Layout } from "@/components/Layout";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/hooks/useAuth";
import {
  useUpdateProfile,
  useUserProfile,
  useUserServices,
} from "@/hooks/useUserData";
import { useWebAuthn } from "@/hooks/useWebAuthn";
import type { GovServicePublic, UpdateProfilePayload } from "@/types";
import {
  CheckCircle2,
  Clock,
  Copy,
  Edit3,
  Fingerprint,
  LinkIcon,
  LogOut,
  Moon,
  ShieldOff,
  Sun,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { toast } from "sonner";

// ── Motion helpers ────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.45,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    delay,
  },
  viewport: { once: true },
});

// ── Avatar ────────────────────────────────────────────────────────────────
function ProfileAvatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase() || "U";
  return (
    <div className="relative flex-shrink-0">
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-display font-bold text-white shadow-glass"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.54 0.22 256) 0%, oklch(0.56 0.2 250) 100%)",
        }}
      >
        {initial}
      </div>
      <span className="absolute -bottom-1 -right-1 badge-verified flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full">
        <CheckCircle2 size={10} />✓
      </span>
    </div>
  );
}

// ── Service status helpers ────────────────────────────────────────────────
function getStatusKey(
  s: GovServicePublic,
): "Verified" | "Pending" | "NotLinked" {
  if (s.status === ServiceStatus.Verified) return "Verified";
  if (s.status === ServiceStatus.Pending) return "Pending";
  return "NotLinked";
}

// ── Service Summary ───────────────────────────────────────────────────────
function ServiceSummary({ services }: { services: GovServicePublic[] }) {
  const verified = services.filter(
    (s) => s.status === ServiceStatus.Verified,
  ).length;
  const pending = services.filter(
    (s) => s.status === ServiceStatus.Pending,
  ).length;
  const notLinked = services.filter(
    (s) => s.status === ServiceStatus.NotLinked,
  ).length;

  const stats = [
    {
      count: verified,
      label: "Verified",
      icon: <CheckCircle2 size={20} className="text-success" />,
      color: "text-success",
    },
    {
      count: pending,
      label: "Pending",
      icon: <Clock size={20} className="text-accent animate-pulse" />,
      color: "text-accent",
    },
    {
      count: notLinked,
      label: "Not Linked",
      icon: <LinkIcon size={20} className="text-muted-foreground" />,
      color: "text-muted-foreground",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map(({ count, label, icon, color }) => (
        <div
          key={label}
          className="glass-elevated rounded-xl py-4 px-3 flex flex-col items-center gap-1.5 text-center"
        >
          {icon}
          <span className={`text-2xl font-display font-bold ${color}`}>
            {count}
          </span>
          <span className="text-[11px] text-muted-foreground leading-tight">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Service Chips ─────────────────────────────────────────────────────────
function ServiceChips({ services }: { services: GovServicePublic[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {services.map((service) => (
        <div
          key={service.serviceId}
          className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5"
        >
          <span className="text-xs font-semibold text-foreground">
            {service.name}
          </span>
          <StatusBadge
            status={getStatusKey(service)}
            className="px-1.5 py-0.5 text-[10px]"
          />
        </div>
      ))}
    </div>
  );
}

// ── Inline Edit Form ──────────────────────────────────────────────────────
interface EditFormState {
  name: string;
  email: string;
  phone: string;
}
interface EditFormProps extends EditFormState {
  onSave: (payload: UpdateProfilePayload) => void;
  onCancel: () => void;
  isSaving: boolean;
}

function EditForm({
  name,
  email,
  phone,
  onSave,
  onCancel,
  isSaving,
}: EditFormProps) {
  const [form, setForm] = useState<EditFormState>({ name, email, phone });
  const set =
    (field: keyof EditFormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name: form.name, email: form.email, phone: form.phone });
  };
  const fields = [
    {
      id: "edit-name",
      key: "name" as const,
      label: "Your Name",
      type: "text",
      placeholder: "Full name",
      ocid: "profile.name.input",
    },
    {
      id: "edit-email",
      key: "email" as const,
      label: "Email Address",
      type: "email",
      placeholder: "you@email.com",
      ocid: "profile.email.input",
    },
    {
      id: "edit-phone",
      key: "phone" as const,
      label: "Phone Number",
      type: "tel",
      placeholder: "+91 00000 00000",
      ocid: "profile.phone.input",
    },
  ];
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map(({ id, key, label, type, placeholder, ocid }) => (
        <div key={key} className="space-y-1.5">
          <Label
            htmlFor={id}
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
          >
            {label}
          </Label>
          <Input
            id={id}
            type={type}
            value={form[key]}
            onChange={set(key)}
            placeholder={placeholder}
            className="glass border-border/40 focus:border-primary/50 rounded-xl h-10 text-sm"
            data-ocid={ocid}
          />
        </div>
      ))}
      <div className="flex gap-2 pt-1">
        <Button
          type="submit"
          disabled={isSaving}
          className="flex-1 button-primary rounded-xl h-10 text-sm"
          data-ocid="profile.save_button"
        >
          {isSaving ? (
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Saving…
            </span>
          ) : (
            "Save Changes"
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="glass border-border/30 rounded-xl h-10 px-4"
          data-ocid="profile.cancel_button"
        >
          <X size={16} />
        </Button>
      </div>
    </form>
  );
}

// ── Biometric Section ─────────────────────────────────────────────────────
function BiometricSection({
  isWebAuthnSupported,
  hasStoredCredential,
  isRegistering,
  onEnable,
  onRemove,
  error,
}: {
  isWebAuthnSupported: boolean;
  hasStoredCredential: boolean;
  isRegistering: boolean;
  onEnable: () => void;
  onRemove: () => void;
  error: string | null;
}) {
  return (
    <GlassCard data-ocid="profile.biometric.section">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.62 0.24 280) 0%, oklch(0.5 0.22 250) 100%)",
          }}
        >
          <Fingerprint size={17} className="text-white" strokeWidth={1.5} />
        </div>
        <h2 className="text-base font-display font-bold text-foreground">
          Biometric / Fingerprint
        </h2>
      </div>

      {!isWebAuthnSupported ? (
        <p
          className="text-sm text-muted-foreground"
          data-ocid="profile.biometric.unsupported"
        >
          😔 Aapka device biometric support nahi karta
        </p>
      ) : hasStoredCredential ? (
        /* Registered state */
        <div className="space-y-3" data-ocid="profile.biometric.registered">
          <div
            className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl"
            style={{
              background: "oklch(var(--success) / 0.1)",
              border: "1px solid oklch(var(--success) / 0.25)",
            }}
          >
            <CheckCircle2 size={17} className="text-success flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-success">
                Fingerprint Registered
              </p>
              <p className="text-xs text-muted-foreground">
                Aap fingerprint se login kar sakte ho
              </p>
            </div>
          </div>
          <Button
            type="button"
            onClick={onRemove}
            className="w-full h-10 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-smooth"
            style={{
              background: "oklch(0.35 0.08 22 / 0.4)",
              color: "oklch(0.72 0.18 22)",
              border: "1px solid oklch(0.5 0.14 22 / 0.35)",
            }}
            data-ocid="profile.biometric.remove_button"
          >
            <ShieldOff size={15} />
            Remove Fingerprint
          </Button>
        </div>
      ) : (
        /* Not set up state */
        <div className="space-y-3" data-ocid="profile.biometric.not_registered">
          <div
            className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl"
            style={{
              background: "oklch(var(--muted) / 0.4)",
              border: "1px solid oklch(var(--border) / 0.3)",
            }}
          >
            <Fingerprint
              size={17}
              className="text-muted-foreground flex-shrink-0"
            />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Fingerprint Not Set Up
              </p>
              <p className="text-xs text-muted-foreground">
                Enable karo — faster login milega
              </p>
            </div>
          </div>
          <Button
            type="button"
            onClick={onEnable}
            disabled={isRegistering}
            className="w-full h-10 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-smooth disabled:opacity-60"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.62 0.24 280) 0%, oklch(0.5 0.22 250) 100%)",
              boxShadow: "0 2px 16px oklch(0.55 0.22 280 / 0.35)",
            }}
            data-ocid="profile.biometric.enable_button"
          >
            {isRegistering ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Registering…
              </>
            ) : (
              <>
                <Fingerprint size={15} />
                Enable Karo
              </>
            )}
          </Button>
        </div>
      )}

      {error && (
        <p
          className="mt-3 text-xs px-3 py-2 rounded-xl"
          style={{
            color: "oklch(0.72 0.18 22)",
            background: "oklch(0.35 0.08 22 / 0.25)",
            border: "1px solid oklch(0.5 0.14 22 / 0.3)",
          }}
          data-ocid="profile.biometric.error_state"
        >
          ⚠️ {error}
        </p>
      )}
    </GlassCard>
  );
}

// ── Profile Skeleton ──────────────────────────────────────────────────────
function ProfileSkeleton() {
  return (
    <div
      className="flex flex-col gap-5 px-4 py-6 pb-24 max-w-md mx-auto"
      data-ocid="profile.loading_state"
    >
      <div className="card-glass flex flex-col items-center gap-3 py-8">
        <Skeleton className="w-24 h-24 rounded-full" />
        <Skeleton className="h-5 w-36 rounded-lg" />
        <Skeleton className="h-4 w-24 rounded-lg" />
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="card-glass space-y-3 p-6">
          <Skeleton className="h-4 w-28 rounded-lg" />
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
      ))}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────
export function ProfilePage() {
  const {
    isAuthenticated,
    isLoading: authLoading,
    principal,
    login,
    logout,
  } = useAuth();
  const { data: profile, isLoading: profileLoading } = useUserProfile();
  const { data: services = [], isLoading: servicesLoading } = useUserServices();
  const updateProfile = useUpdateProfile();
  const { theme, setTheme } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  const {
    isWebAuthnSupported,
    hasStoredCredential,
    isRegistering,
    error: biometricError,
    registerBiometric,
    removeBiometric,
  } = useWebAuthn();

  const isLoading = authLoading || profileLoading || servicesLoading;

  const profileName = profile?.name ?? "";
  const profileEmail = profile?.email ?? "";
  const profilePhone = profile?.phone ?? "";
  const displayName = profileName || "India Hub User";

  const handleCopyId = () => {
    if (!principal) return;
    void navigator.clipboard.writeText(principal).then(() => {
      setCopied(true);
      toast.success("Principal ID copied to clipboard!");
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSaveProfile = (payload: UpdateProfilePayload) => {
    updateProfile.mutate(payload, {
      onSuccess: () => {
        toast.success("Your info has been updated!");
        setIsEditing(false);
      },
      onError: () => toast.error("Something went wrong. Please try again."),
    });
  };

  const handleEnableBiometric = async () => {
    if (!principal) return;
    try {
      await registerBiometric(principal);
      toast.success("Fingerprint register ho gaya! 🎉");
    } catch {
      // error displayed in section
    }
  };

  const handleRemoveBiometric = async () => {
    await removeBiometric();
    toast("Fingerprint remove ho gaya.", {
      description: "Dobara add karne ke liye Profile mein jaao.",
    });
  };

  if (!authLoading && !isAuthenticated) {
    return (
      <Layout>
        <div
          className="flex flex-col items-center justify-center min-h-[70vh] gap-6 p-6 text-center"
          data-ocid="profile.page"
        >
          <motion.div {...fadeUp(0)} className="w-full max-w-sm">
            <GlassCard className="flex flex-col items-center gap-5 py-10">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.54 0.22 256) 0%, oklch(0.56 0.2 250) 100%)",
                }}
              >
                👤
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-foreground">
                  You're not logged in
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Please sign in to see your profile
                </p>
              </div>
              <Button
                onClick={login}
                className="button-primary w-full rounded-xl h-11 text-base"
                data-ocid="profile.login_button"
              >
                Sign In to Continue
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </Layout>
    );
  }

  if (isLoading) return <ProfileSkeleton />;

  return (
    <Layout>
      <div
        className="flex flex-col gap-5 px-4 py-6 pb-28 max-w-md mx-auto"
        data-ocid="profile.page"
      >
        {/* Hero / Avatar */}
        <motion.div {...fadeUp(0)}>
          <GlassCard className="flex flex-col items-center gap-3 py-8">
            <ProfileAvatar name={displayName} />
            <div className="text-center mt-1">
              <h1 className="text-xl font-display font-bold text-foreground leading-tight">
                {displayName}
              </h1>
              {profileEmail && (
                <p className="text-sm text-muted-foreground mt-0.5">
                  {profileEmail}
                </p>
              )}
            </div>
            <span className="badge-verified flex items-center gap-1 mt-0.5">
              <CheckCircle2 size={12} />
              Verified User
            </span>
          </GlassCard>
        </motion.div>

        {/* Edit My Info */}
        <motion.div {...fadeUp(0.08)}>
          <GlassCard data-ocid="profile.info.section">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-display font-bold text-foreground">
                My Info
              </h2>
              {!isEditing && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                  className="glass rounded-lg h-8 gap-1.5 text-primary hover:text-primary hover:bg-primary/10 text-xs"
                  data-ocid="profile.edit_button"
                >
                  <Edit3 size={13} />
                  Edit My Info
                </Button>
              )}
            </div>
            {isEditing ? (
              <EditForm
                name={profileName}
                email={profileEmail}
                phone={profilePhone}
                onSave={handleSaveProfile}
                onCancel={() => setIsEditing(false)}
                isSaving={updateProfile.isPending}
              />
            ) : (
              <div className="space-y-0">
                {[
                  { label: "Name", value: profileName || "—" },
                  { label: "Email", value: profileEmail || "—" },
                  { label: "Phone", value: profilePhone || "—" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center py-3 border-b border-border/20 last:border-0"
                  >
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {label}
                    </span>
                    <span className="text-sm text-foreground font-medium max-w-[58%] text-right truncate">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        </motion.div>

        {/* Services summary */}
        <motion.div {...fadeUp(0.16)}>
          <GlassCard data-ocid="profile.services.summary">
            <h2 className="text-base font-display font-bold text-foreground mb-4">
              My Services at a Glance
            </h2>
            {services.length > 0 ? (
              <ServiceSummary services={services} />
            ) : (
              <p
                className="text-sm text-muted-foreground"
                data-ocid="profile.services.empty_state"
              >
                No services linked yet. Go to the Services tab to get started.
              </p>
            )}
          </GlassCard>
        </motion.div>

        {/* Services chips */}
        {services.length > 0 && (
          <motion.div {...fadeUp(0.22)}>
            <GlassCard data-ocid="profile.services.list">
              <h2 className="text-base font-display font-bold text-foreground mb-4">
                All Linked Services
              </h2>
              <ServiceChips services={services} />
            </GlassCard>
          </motion.div>
        )}

        {/* App Settings */}
        <motion.div {...fadeUp(0.28)}>
          <GlassCard data-ocid="profile.settings.section">
            <h2 className="text-base font-display font-bold text-foreground mb-4">
              App Settings
            </h2>
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl glass flex items-center justify-center">
                  {theme === "dark" ? (
                    <Moon size={17} className="text-primary" />
                  ) : (
                    <Sun size={17} className="text-accent" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {theme === "dark" ? "Dark Mode" : "Light Mode"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Currently {theme === "dark" ? "dark" : "light"} theme
                  </p>
                </div>
              </div>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
                data-ocid="profile.theme.toggle"
              />
            </div>
          </GlassCard>
        </motion.div>

        {/* Biometric Section */}
        <motion.div {...fadeUp(0.34)}>
          <BiometricSection
            isWebAuthnSupported={isWebAuthnSupported}
            hasStoredCredential={hasStoredCredential}
            isRegistering={isRegistering}
            onEnable={handleEnableBiometric}
            onRemove={handleRemoveBiometric}
            error={biometricError}
          />
        </motion.div>

        {/* Account / Principal */}
        <motion.div {...fadeUp(0.4)}>
          <GlassCard data-ocid="profile.account.section">
            <h2 className="text-base font-display font-bold text-foreground mb-4">
              Account Details
            </h2>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Your Unique ID
              </p>
              <div className="flex items-center gap-2 glass rounded-xl px-3 py-2.5">
                <code className="text-xs text-muted-foreground font-mono flex-1 min-w-0 truncate">
                  {principal ?? "—"}
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyId}
                  disabled={!principal}
                  className="flex-shrink-0 h-7 px-2.5 rounded-lg text-primary hover:text-primary hover:bg-primary/10 transition-smooth"
                  data-ocid="profile.copy_id.button"
                >
                  <Copy size={13} />
                  <span className="ml-1 text-xs font-semibold">
                    {copied ? "Copied!" : "Copy ID"}
                  </span>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                This is your unique Internet Computer identity. Keep it safe.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Sign Out */}
        <motion.div {...fadeUp(0.46)}>
          <Button
            onClick={logout}
            className="w-full h-12 rounded-xl font-bold text-base text-white transition-smooth hover:opacity-90 hover:shadow-glass-hover flex items-center gap-2 justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.5 0.22 22) 0%, oklch(0.62 0.23 36) 100%)",
            }}
            data-ocid="profile.sign_out_button"
          >
            <LogOut size={18} />
            Sign Out
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
}
