import { GlassCard } from "@/components/GlassCard";
import { Layout } from "@/components/Layout";
import { ServiceIcon } from "@/components/ServiceIcon";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useUpdateServiceStatus, useUserServices } from "@/hooks/useUserData";
import { SERVICE_CATEGORIES } from "@/types/index";
import type {
  GovServicePublic,
  ServiceCategory,
  ServiceStatus,
} from "@/types/index";
import { useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, Calendar, FileText, Info, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

function formatTimestamp(ts: bigint): string {
  const ms = Number(ts / 1_000_000n);
  if (ms === 0) return "Never";
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(ms));
}

// ─── Update Info Modal ───────────────────────────────────────────────────────

interface UpdateInfoModalProps {
  service: GovServicePublic;
}

function UpdateInfoModal({ service }: UpdateInfoModalProps) {
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<ServiceStatus>(
    service.status,
  );
  const { mutateAsync, isPending } = useUpdateServiceStatus();

  async function handleSave() {
    try {
      await mutateAsync({
        serviceId: service.serviceId,
        status: selectedStatus,
        metadata: service.metadata,
      });
      toast.success("Service status updated!");
      setOpen(false);
    } catch {
      toast.error("Could not update. Please try again.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full h-12 rounded-xl text-base font-semibold transition-smooth border-border/40 hover:border-primary/40"
          data-ocid="service-detail.update_info_button"
        >
          <RefreshCw size={18} className="mr-2" />
          Update Info
        </Button>
      </DialogTrigger>
      <DialogContent
        className="glass-elevated rounded-2xl border-border/20 max-w-xs mx-auto p-6"
        data-ocid="service-detail.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-lg">
            Update Status
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Change the status for{" "}
            <span className="font-semibold text-foreground">
              {service.name}
            </span>
            .
          </DialogDescription>
        </DialogHeader>

        <div className="py-3">
          <Label
            htmlFor="status-select"
            className="text-sm font-semibold text-foreground mb-2 block"
          >
            New Status
          </Label>
          <Select
            value={selectedStatus}
            onValueChange={(v) => setSelectedStatus(v as ServiceStatus)}
          >
            <SelectTrigger
              id="status-select"
              className="w-full rounded-xl border-border/30 bg-card/50 h-11"
              data-ocid="service-detail.status_select"
            >
              <SelectValue placeholder="Choose status" />
            </SelectTrigger>
            <SelectContent className="glass-elevated rounded-xl border-border/30">
              <SelectItem value="Verified">✅ Verified</SelectItem>
              <SelectItem value="Pending">🕐 Pending</SelectItem>
              <SelectItem value="NotLinked">🔗 Not Linked</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter className="gap-2 flex-row">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="flex-1 rounded-xl"
            data-ocid="service-detail.cancel_button"
          >
            Cancel
          </Button>
          <Button
            onClick={() => void handleSave()}
            disabled={isPending}
            className="flex-1 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold"
            data-ocid="service-detail.confirm_button"
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                Saving…
              </span>
            ) : (
              "Save"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ─── Skeleton ────────────────────────────────────────────────────────────────

function DetailSkeleton() {
  return (
    <div className="flex flex-col gap-4 px-4 pt-4 pb-6 max-w-lg mx-auto">
      <Skeleton className="w-28 h-8 rounded-xl" />
      <div className="card-glass rounded-2xl p-6 flex flex-col items-center gap-4">
        <Skeleton className="w-20 h-20 rounded-2xl" />
        <Skeleton className="w-40 h-6 rounded" />
        <Skeleton className="w-20 h-6 rounded-full" />
      </div>
      <Skeleton className="w-full h-16 rounded-2xl" />
      <Skeleton className="w-full h-12 rounded-xl" />
      <Skeleton className="w-full h-12 rounded-xl" />
      <Skeleton className="w-full h-12 rounded-xl" />
      <Skeleton className="w-full h-24 rounded-xl" />
    </div>
  );
}

// ─── Not Found ───────────────────────────────────────────────────────────────

function NotFound({ serviceId }: { serviceId: string }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[60vh] px-6 gap-5"
      data-ocid="service-detail.error_state"
    >
      <div className="w-20 h-20 rounded-3xl bg-destructive/10 flex items-center justify-center">
        <Info size={36} className="text-destructive" />
      </div>
      <div className="text-center">
        <p className="text-xl font-display font-bold text-foreground">
          Service Not Found
        </p>
        <p className="text-muted-foreground text-sm mt-1 max-w-xs">
          We couldn&apos;t find the service &ldquo;{serviceId}&rdquo;. It may
          have been removed or the link is broken.
        </p>
      </div>
      <Button
        onClick={() => void navigate({ to: "/services" })}
        className="rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8"
        data-ocid="service-detail.back_to_services_button"
      >
        Back to All Services
      </Button>
    </motion.div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export function ServiceDetailPage() {
  const { serviceId } = useParams({ from: "/services/$serviceId" });
  const navigate = useNavigate();
  const { data: services, isLoading } = useUserServices();

  if (isLoading) {
    return (
      <Layout>
        <DetailSkeleton />
      </Layout>
    );
  }

  const service = (services ?? []).find((s) => s.serviceId === serviceId);

  if (!service) {
    return (
      <Layout>
        <NotFound serviceId={serviceId} />
      </Layout>
    );
  }

  const categoryKey = service.category as ServiceCategory;
  const categoryMeta = SERVICE_CATEGORIES[categoryKey];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.36, ease: "easeOut" }}
        className="px-4 pt-5 pb-6 max-w-lg mx-auto flex flex-col gap-4"
        data-ocid="service-detail.page"
      >
        {/* Back Button */}
        <button
          type="button"
          onClick={() => void navigate({ to: "/services" })}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group w-fit"
          data-ocid="service-detail.back_button"
          aria-label="Go back to all services"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
          />
          <span className="text-sm font-semibold">All Services</span>
        </button>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.06 }}
        >
          <GlassCard className="relative overflow-hidden flex flex-col items-center gap-4 py-8 px-6 text-center rounded-2xl">
            {/* Subtle gradient overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ background: "var(--gradient-primary)" }}
              aria-hidden="true"
            />
            <div className="relative">
              <ServiceIcon
                category={categoryKey}
                size={36}
                className="w-20 h-20 rounded-2xl shadow-glass"
              />
              <div className="absolute -bottom-2 -right-2">
                <StatusBadge status={service.status} />
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-xl font-display font-bold text-foreground leading-tight">
                {service.name}
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                {categoryMeta?.label ?? service.category}
                {categoryMeta?.description ? (
                  <>
                    {" "}
                    &bull; <span>{categoryMeta.description}</span>
                  </>
                ) : null}
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.12 }}
        >
          <GlassCard className="flex items-center gap-3 py-3 px-4 rounded-xl">
            <Calendar size={18} className="text-primary flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground font-medium">
                Last Updated
              </p>
              <p
                className="text-sm font-semibold text-foreground"
                data-ocid="service-detail.last_updated"
              >
                {formatTimestamp(service.lastUpdated)}
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.18 }}
          className="flex flex-col gap-3"
        >
          <Button
            className="w-full h-12 rounded-xl text-base font-semibold bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-glass transition-smooth hover:shadow-glass-hover"
            data-ocid="service-detail.view_details_button"
            onClick={() => toast.info("Opening service portal…")}
          >
            <FileText size={18} className="mr-2" />
            View Details
          </Button>

          <Button
            className="w-full h-12 rounded-xl text-base font-semibold bg-success text-success-foreground shadow-glass transition-smooth hover:shadow-glass-hover"
            data-ocid="service-detail.get_papers_button"
            onClick={() => toast.success("Fetching your papers…")}
          >
            <FileText size={18} className="mr-2" />
            Get My Papers
          </Button>

          <UpdateInfoModal service={service} />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.24 }}
        >
          <GlassCard
            className="flex flex-col gap-2 py-4 px-5 rounded-xl"
            data-ocid="service-detail.info_card"
          >
            <div className="flex items-center gap-2 mb-1">
              <Info size={16} className="text-primary flex-shrink-0" />
              <p className="text-sm font-semibold text-foreground">
                About This Service
              </p>
            </div>
            {service.metadata && service.metadata.trim().length > 0 ? (
              <p className="text-sm text-muted-foreground leading-relaxed break-words">
                {service.metadata}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {categoryMeta?.description
                  ? `${categoryMeta.description} — keep your information up to date so services work smoothly.`
                  : "Keep your information up to date so this service works smoothly whenever you need it."}
              </p>
            )}
          </GlassCard>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
