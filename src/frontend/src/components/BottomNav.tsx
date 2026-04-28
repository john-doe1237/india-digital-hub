import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { FileText, Grid3X3, Home, User } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", icon: Home, path: "/home", ocid: "nav.home_tab" },
  {
    label: "Services",
    icon: Grid3X3,
    path: "/services",
    ocid: "nav.services_tab",
  },
  {
    label: "My Papers",
    icon: FileText,
    path: "/documents",
    ocid: "nav.documents_tab",
  },
  { label: "Profile", icon: User, path: "/profile", ocid: "nav.profile_tab" },
] as const;

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-elevated border-t border-border/20">
      <div className="flex items-center justify-around px-2 py-2 max-w-lg mx-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.path ||
            (location.pathname === "/" && item.path === "/home");

          return (
            <button
              key={item.path}
              type="button"
              data-ocid={item.ocid}
              onClick={() => void navigate({ to: item.path })}
              className={cn(
                "nav-item flex-1 transition-smooth",
                isActive ? "nav-item-active" : "nav-item-inactive",
              )}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-xl transition-smooth",
                  isActive && "bg-gradient-primary shadow-glass",
                )}
              >
                <Icon
                  size={20}
                  className={isActive ? "text-primary-foreground" : ""}
                />
              </div>
              <span
                className={cn(
                  "text-[11px] font-semibold tracking-wide transition-smooth",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
