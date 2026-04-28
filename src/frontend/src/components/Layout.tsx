import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  hideNav?: boolean;
}

const PAGE_TITLES: Record<string, string> = {
  "/home": "India Digital Hub",
  "/services": "My Services",
  "/documents": "My Papers",
  "/profile": "My Profile",
};

export function Layout({ children, className, hideNav = false }: LayoutProps) {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const title = PAGE_TITLES[location.pathname] ?? "India Digital Hub";

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Mesh gradient background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 10% 0%, oklch(0.68 0.22 256 / 0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 90% 100%, oklch(0.7 0.19 142 / 0.06) 0%, transparent 60%)",
        }}
      />

      {/* Top Bar */}
      <header className="relative z-10 glass-elevated border-b border-border/20 sticky top-0">
        <div className="flex items-center justify-between px-4 py-3 max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            {/* Logo mark */}
            <div className="w-8 h-8 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glass">
              <span className="text-primary-foreground font-display font-bold text-sm">
                🇮🇳
              </span>
            </div>
            <div>
              <h1 className="text-sm font-display font-bold text-foreground leading-tight">
                {title}
              </h1>
              {location.pathname === "/home" && (
                <p className="text-[10px] text-muted-foreground leading-tight">
                  One App, All Services
                </p>
              )}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            data-ocid="layout.theme_toggle"
            className="w-9 h-9 glass rounded-lg hover:shadow-glass transition-smooth"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-accent" />
            ) : (
              <Moon size={16} className="text-primary" />
            )}
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main
        className={cn(
          "relative z-10 flex-1 overflow-y-auto",
          !hideNav && "pb-24",
          className,
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="min-h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      {!hideNav && <BottomNav />}
    </div>
  );
}
