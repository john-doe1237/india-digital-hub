import { GlassCard } from "@/components/GlassCard";
import { Layout } from "@/components/Layout";
import { ServiceIcon } from "@/components/ServiceIcon";
import { StatusBadge } from "@/components/StatusBadge";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserServices } from "@/hooks/useUserData";
import { SERVICE_CATEGORIES } from "@/types/index";
import type { GovServicePublic, ServiceCategory } from "@/types/index";
import { useNavigate } from "@tanstack/react-router";
import { Inbox } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ServiceCategory as SC } from "../backend";

type FilterTab = "All" | ServiceCategory;

const FILTER_TABS: { id: FilterTab; label: string }[] = [
  { id: "All", label: "All" },
  { id: SC.Identity, label: "Identity" },
  { id: SC.FoodSecurity, label: "Food Security" },
  { id: SC.Utilities, label: "Utilities" },
  { id: SC.Finance, label: "Finance" },
  { id: SC.Travel, label: "Travel" },
];

function ServiceCardSkeleton() {
  return (
    <div className="card-glass rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <Skeleton className="w-12 h-12 rounded-xl" />
        <Skeleton className="w-16 h-6 rounded-full" />
      </div>
      <Skeleton className="w-3/4 h-4 rounded" />
      <Skeleton className="w-1/2 h-3 rounded" />
    </div>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="col-span-full flex flex-col items-center justify-center py-20 gap-4"
      data-ocid="services.empty_state"
    >
      <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center">
        <Inbox size={36} className="text-primary" />
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold text-foreground">
          No services here yet
        </p>
        <p className="text-muted-foreground text-sm mt-1 max-w-xs">
          Your linked government services will appear here once you connect
          them.
        </p>
      </div>
    </motion.div>
  );
}

interface ServiceCardProps {
  service: GovServicePublic;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const navigate = useNavigate();
  const categoryMeta = SERVICE_CATEGORIES[service.category];
  const categoryKey = service.category as ServiceCategory;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
      data-ocid={`services.item.${index + 1}`}
    >
      <GlassCard
        className="p-4 flex flex-col gap-3 h-full"
        onClick={() =>
          void navigate({
            to: "/services/$serviceId",
            params: { serviceId: service.serviceId },
          })
        }
      >
        <div className="flex items-start justify-between gap-2">
          <ServiceIcon
            category={categoryKey}
            size={22}
            className="w-12 h-12 flex-shrink-0"
          />
          <StatusBadge status={service.status} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground text-sm leading-snug truncate">
            {service.name}
          </p>
          <p className="text-muted-foreground text-xs mt-0.5">
            {categoryMeta?.label ?? service.category}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function ServicesPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const { data: services, isLoading } = useUserServices();

  const filtered = (services ?? []).filter(
    (s) => activeTab === "All" || s.category === activeTab,
  );

  return (
    <Layout>
      <div className="flex flex-col">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="px-4 pt-5 pb-2 max-w-lg mx-auto w-full"
        >
          <h2 className="text-2xl font-display font-bold text-foreground">
            All Services
          </h2>
          <p className="text-muted-foreground text-sm mt-0.5">
            Your government services in one place
          </p>
        </motion.div>

        {/* Filter Tab Bar */}
        <div
          className="sticky top-[57px] z-10 bg-background/80 backdrop-blur-md border-b border-border/30 w-full"
          data-ocid="services.filter.tab"
        >
          <div className="flex gap-0.5 overflow-x-auto no-scrollbar px-4 max-w-lg mx-auto">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  data-ocid={`services.tab.${tab.id.toLowerCase().replace(/\s/g, "_")}`}
                  className={[
                    "relative px-3 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="px-4 pt-4 pb-6 max-w-lg mx-auto w-full">
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders
                <ServiceCardSkeleton key={i} />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <EmptyState />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {filtered.map((service, i) => (
                <ServiceCard
                  key={service.serviceId}
                  service={service}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
