import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, LinkIcon } from "lucide-react";

type StatusType = "Verified" | "Pending" | "NotLinked";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const STATUS_CONFIG: Record<
  StatusType,
  {
    label: string;
    icon: typeof CheckCircle2;
    className: string;
    animate?: boolean;
  }
> = {
  Verified: {
    label: "Verified",
    icon: CheckCircle2,
    className: "badge-success",
  },
  Pending: {
    label: "Pending",
    icon: Clock,
    className: "badge-pending",
    animate: true,
  },
  NotLinked: {
    label: "Not Linked",
    icon: LinkIcon,
    className:
      "inline-flex items-center px-3 py-1 rounded-full bg-muted/50 text-muted-foreground text-xs font-semibold",
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <span className={cn(config.className, className)}>
      <Icon
        size={12}
        className={cn("mr-1", config.animate && "animate-pulse-soft")}
      />
      {config.label}
    </span>
  );
}
