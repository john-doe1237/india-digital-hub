import { cn } from "@/lib/utils";
import { Banknote, Plane, ShieldCheck, Wheat, Zap } from "lucide-react";

type CategoryType =
  | "Identity"
  | "FoodSecurity"
  | "Utilities"
  | "Finance"
  | "Travel";

interface ServiceIconProps {
  category: CategoryType;
  size?: number;
  className?: string;
}

const ICON_MAP: Record<
  CategoryType,
  { icon: typeof ShieldCheck; color: string; bg: string }
> = {
  Identity: {
    icon: ShieldCheck,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  FoodSecurity: {
    icon: Wheat,
    color: "text-success",
    bg: "bg-success/10",
  },
  Utilities: {
    icon: Zap,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  Finance: {
    icon: Banknote,
    color: "text-warning",
    bg: "bg-warning/10",
  },
  Travel: {
    icon: Plane,
    color: "text-primary",
    bg: "bg-primary/10",
  },
};

export function ServiceIcon({
  category,
  size = 24,
  className,
}: ServiceIconProps) {
  const config = ICON_MAP[category] ?? ICON_MAP.Identity;
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl p-2.5",
        config.bg,
        className,
      )}
    >
      <Icon size={size} className={config.color} />
    </div>
  );
}
