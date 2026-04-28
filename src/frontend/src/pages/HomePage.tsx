import { GlassCard } from "@/components/GlassCard";
import { Layout } from "@/components/Layout";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import { useInitUserData, useUserServices } from "@/hooks/useUserData";
import { useWebAuthn } from "@/hooks/useWebAuthn";
import { type GovServicePublic, SERVICE_CATEGORIES } from "@/types/index";
import { useNavigate } from "@tanstack/react-router";
import {
  CheckCircle2,
  Clock,
  Fingerprint,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { toast } from "sonner";

// ─── Static recent activity ───────────────────────────────────────────────────
const RECENT_ACTIVITY = [
  {
    id: 1,
    title: "Aadhaar Verified",
    description: "Your identity has been successfully confirmed",
    time: "2 hours ago",
    icon: CheckCircle2,
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    id: 2,
    title: "Ration Card Updated",
    description: "Family details updated on PDS system",
    time: "Yesterday",
    icon: Clock,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    id: 3,
    title: "New Document Added",
    description: "Driving licence uploaded to your safe",
    time: "3 days ago",
    icon: Star,
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

// ─── Skeletons ─────────────────────────────────────────────────────────────────
function StatsSkeleton() {
  return (
    <div
      className="grid grid-cols-3 gap-3"
      aria-busy="true"
      data-ocid="home.stats.loading_state"
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="card-glass rounded-xl p-4 space-y-2 animate-pulse"
        >
          <Skeleton className="h-7 w-10 bg-muted/40 rounded-md" />
          <Skeleton className="h-3 w-14 bg-muted/30 rounded-md" />
        </div>
      ))}
    </div>
  );
}

function CategorySkeleton() {
  return (
    <div
      className="flex gap-3 overflow-x-auto pb-2"
      style={{ scrollbarWidth: "none" }}
      aria-busy="true"
      data-ocid="home.services.loading_state"
    >
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="card-glass rounded-2xl p-4 min-w-[118px] space-y-3 shrink-0 animate-pulse"
        >
          <Skeleton className="h-10 w-10 rounded-xl bg-muted/40" />
          <Skeleton className="h-3 w-20 bg-muted/30 rounded-md" />
          <Skeleton className="h-3 w-12 bg-muted/30 rounded-md" />
        </div>
      ))}
    </div>
  );
}

// ─── Stat mini card ────────────────────────────────────────────────────────────
function StatCard({
  value,
  label,
  colorClass,
  delay,
  ocid,
}: {
  value: number;
  label: string;
  colorClass: string;
  delay: number;
  ocid: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      data-ocid={ocid}
    >
      <GlassCard className="rounded-xl p-4 text-center">
        <p className={`text-2xl font-display font-bold ${colorClass}`}>
          {value}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5 leading-tight">
          {label}
        </p>
      </GlassCard>
    </motion.div>
  );
}

// ─── Login prompt ──────────────────────────────────────────────────────────────
function LoginPrompt({
  onLogin,
  isLoading,
}: { onLogin: () => void; isLoading: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="px-5 mt-6"
      data-ocid="login.card"
    >
      <GlassCard className="text-center py-10 px-6 space-y-5">
        <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-glass">
          <Fingerprint size={36} className="text-primary" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-display font-bold text-foreground">
            Your Digital India Awaits
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            One login for Aadhaar, Ration Card, Electricity, Gas, Bank and all
            your government services — safe and private.
          </p>
        </div>
        <button
          type="button"
          className="button-primary w-full h-12 text-sm font-semibold flex items-center justify-center gap-2 rounded-xl"
          onClick={onLogin}
          disabled={isLoading}
          data-ocid="login.submit_button"
        >
          <Fingerprint size={16} />
          {isLoading ? "Connecting…" : "Login with Internet Identity"}
        </button>
        <p className="text-xs text-muted-foreground">
          🔒 Secure · Private · No Password Needed
        </p>
      </GlassCard>
    </motion.div>
  );
}

// ─── Biometric Registration Banner ────────────────────────────────────────────
function BiometricBanner({
  onEnable,
  onDismiss,
  isRegistering,
}: {
  onEnable: () => void;
  onDismiss: () => void;
  isRegistering: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      data-ocid="home.biometric_banner"
    >
      <div
        className="rounded-2xl p-4 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.25 0.12 280 / 0.85) 0%, oklch(0.2 0.1 250 / 0.85) 100%)",
          border: "1px solid oklch(0.68 0.22 256 / 0.4)",
          backdropFilter: "blur(16px)",
          boxShadow:
            "0 4px 24px oklch(0.55 0.22 256 / 0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Glow accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.68 0.22 256 / 0.6), transparent)",
          }}
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={onDismiss}
          className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center transition-smooth"
          style={{ background: "oklch(var(--muted) / 0.3)" }}
          aria-label="Dismiss"
          data-ocid="home.biometric_banner.close_button"
        >
          <X size={13} className="text-muted-foreground" />
        </button>

        <div className="flex items-start gap-3 pr-6">
          {/* Icon */}
          <div
            className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.62 0.24 280) 0%, oklch(0.5 0.22 250) 100%)",
            }}
          >
            <Fingerprint size={22} className="text-white" strokeWidth={1.5} />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-foreground leading-snug">
              Fingerprint Login Enable Karo
            </p>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              Agle baar ek tap mein login karein! ⚡
            </p>

            <div className="flex gap-2 mt-3">
              <button
                type="button"
                onClick={onEnable}
                disabled={isRegistering}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-smooth disabled:opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.24 280) 0%, oklch(0.5 0.22 250) 100%)",
                  boxShadow: "0 2px 12px oklch(0.55 0.22 280 / 0.4)",
                }}
                data-ocid="home.biometric_banner.enable_button"
              >
                {isRegistering ? (
                  <>
                    <span className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Registering…
                  </>
                ) : (
                  <>
                    <Fingerprint size={13} />
                    Enable Karo
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onDismiss}
                className="px-4 py-2 rounded-xl text-xs font-semibold transition-smooth"
                style={{
                  background: "oklch(var(--muted) / 0.4)",
                  color: "oklch(var(--muted-foreground))",
                  border: "1px solid oklch(var(--border) / 0.3)",
                }}
                data-ocid="home.biometric_banner.dismiss_button"
              >
                Baad Mein
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────
export function HomePage() {
  const {
    isAuthenticated,
    login,
    isLoading: authLoading,
    principal,
  } = useAuth();
  const { data: services, isLoading: servicesLoading } = useUserServices();
  const { mutate: initUserData } = useInitUserData();
  const navigate = useNavigate();
  const {
    isWebAuthnSupported,
    hasStoredCredential,
    isRegistering,
    registerBiometric,
    dismissRegistrationPrompt,
    isPromptDismissed,
  } = useWebAuthn();

  useEffect(() => {
    if (isAuthenticated) initUserData();
  }, [isAuthenticated, initUserData]);

  const totalServices = services?.length ?? 0;
  const verifiedCount =
    services?.filter((s: GovServicePublic) => s.status === "Verified").length ??
    0;
  const pendingCount =
    services?.filter((s: GovServicePublic) => s.status === "Pending").length ??
    0;

  const categoryCountMap: Record<string, number> = {};
  for (const cat of Object.keys(SERVICE_CATEGORIES)) {
    categoryCountMap[cat] = (services ?? []).filter((s: GovServicePublic) => {
      const catKey =
        typeof s.category === "string"
          ? s.category
          : Object.keys(s.category as object)[0];
      return catKey === cat;
    }).length;
  }

  const contentLoading = isAuthenticated && servicesLoading;
  const showBiometricBanner =
    isAuthenticated &&
    !contentLoading &&
    isWebAuthnSupported &&
    !hasStoredCredential &&
    !isPromptDismissed;

  const handleEnableBiometric = async () => {
    if (!principal) return;
    try {
      await registerBiometric(principal);
      toast.success(
        "Fingerprint register ho gaya! 🎉 Ab aap fingerprint se login kar sakte ho.",
      );
    } catch {
      // error already set in hook
    }
  };

  function handleMagicButton() {
    toast("AI Assistant coming soon! 🚀", {
      description: "We're building a multilingual AI helper for you.",
      duration: 5000,
    });
  }

  return (
    <Layout>
      {/* Ambient mesh */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-72 h-72 rounded-full bg-accent/6 blur-3xl" />
        <div className="absolute bottom-36 left-1/3 w-60 h-60 rounded-full bg-success/5 blur-3xl" />
      </div>

      <div
        className="relative z-10 max-w-lg mx-auto px-5 py-6 pb-36 space-y-6"
        data-ocid="home.page"
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-display font-bold text-foreground">
            Namaste! 👋
          </h1>
          <p className="text-muted-foreground text-base mt-1 font-body">
            Your India Digital Hub
          </p>
        </motion.div>

        {/* Unauthenticated */}
        {!authLoading && !isAuthenticated && (
          <LoginPrompt onLogin={login} isLoading={authLoading} />
        )}

        {/* Loading skeletons */}
        {contentLoading && (
          <div className="space-y-6">
            <StatsSkeleton />
            <CategorySkeleton />
          </div>
        )}

        {/* Authenticated dashboard */}
        {isAuthenticated && !contentLoading && (
          <>
            {/* Biometric Registration Banner */}
            <AnimatePresence mode="wait">
              {showBiometricBanner && (
                <BiometricBanner
                  onEnable={handleEnableBiometric}
                  onDismiss={dismissRegistrationPrompt}
                  isRegistering={isRegistering}
                />
              )}
            </AnimatePresence>

            {/* Quick Stats */}
            <section aria-label="Quick stats" data-ocid="home.stats.section">
              <div className="grid grid-cols-3 gap-3">
                <StatCard
                  value={totalServices}
                  label="All Services"
                  colorClass="text-foreground"
                  delay={0.08}
                  ocid="home.stats.total.card"
                />
                <StatCard
                  value={verifiedCount}
                  label="Verified ✓"
                  colorClass="text-success"
                  delay={0.16}
                  ocid="home.stats.verified.card"
                />
                <StatCard
                  value={pendingCount}
                  label="Pending"
                  colorClass="text-accent"
                  delay={0.24}
                  ocid="home.stats.pending.card"
                />
              </div>
            </section>

            {/* Services horizontal scroll */}
            <section
              aria-label="Your services"
              data-ocid="home.services.section"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-display font-bold text-foreground">
                  Your Services
                </h2>
                <button
                  type="button"
                  className="text-primary text-sm font-semibold transition-smooth hover:opacity-75"
                  onClick={() => void navigate({ to: "/services" })}
                  data-ocid="home.services.view_all_button"
                >
                  See All →
                </button>
              </div>
              <div
                className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5"
                style={{ scrollbarWidth: "none" }}
              >
                {Object.entries(SERVICE_CATEGORIES).map(([key, cat], index) => {
                  const count = categoryCountMap[key] ?? 0;
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                      className="shrink-0"
                      data-ocid={`home.services.item.${index + 1}`}
                    >
                      <GlassCard
                        className="rounded-2xl p-4 w-[122px] space-y-3 active:scale-95"
                        onClick={() => void navigate({ to: "/services" })}
                      >
                        <ServiceIcon
                          category={
                            key as
                              | "Identity"
                              | "FoodSecurity"
                              | "Utilities"
                              | "Finance"
                              | "Travel"
                          }
                          size={22}
                        />
                        <div>
                          <p className="text-xs font-semibold text-foreground leading-tight">
                            {cat.label}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {count} service{count !== 1 ? "s" : ""}
                          </p>
                        </div>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* Recent Activity */}
            <section
              aria-label="Recent activity"
              data-ocid="home.activity.section"
            >
              <h2 className="text-lg font-display font-bold text-foreground mb-3">
                Recent Activity
              </h2>
              <div className="space-y-3">
                {RECENT_ACTIVITY.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.12 + index * 0.1 }}
                      data-ocid={`home.activity.item.${index + 1}`}
                    >
                      <GlassCard className="flex items-center gap-4 py-3 px-4 rounded-xl">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}
                        >
                          <Icon size={18} className={item.color} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {item.title}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {item.description}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground shrink-0">
                          {item.time}
                        </span>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* Security banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <GlassCard className="p-4 border border-primary/20 rounded-xl">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  🔒 <strong className="text-foreground">100% Secure</strong> —
                  Your data lives on the Internet Computer blockchain. No
                  central server can ever access it.
                </p>
              </GlassCard>
            </motion.div>
          </>
        )}
      </div>

      {/* Magic FAB */}
      <motion.button
        type="button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleMagicButton}
        aria-label="AI Help"
        data-ocid="home.ai_help.button"
        className="fixed bottom-24 right-5 z-50 w-16 h-16 rounded-full flex flex-col items-center justify-center gap-0.5 shadow-glass-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-smooth"
        style={{ background: "var(--gradient-primary)" }}
      >
        <Sparkles size={20} className="text-primary-foreground" />
        <span className="text-[9px] font-bold text-primary-foreground leading-none">
          AI Help
        </span>
      </motion.button>
    </Layout>
  );
}
