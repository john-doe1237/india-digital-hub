import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-Df2_gRtF.js";
import { u as useUserServices, a as useInitUserData, L as Layout, A as AnimatePresence, G as GlassCard, S as Skeleton } from "./useUserData-BHdIPNft.js";
import { S as SERVICE_CATEGORIES, a as ServiceIcon } from "./index-CAqd4n0W.js";
import { u as useAuth, a as useWebAuthn, F as Fingerprint } from "./fingerprint-7-dZ1fH0.js";
import { u as ue } from "./index-DWtJgJU7.js";
import { c as createLucideIcon, m as motion } from "./proxy-kn6nNkwE.js";
import { C as CircleCheck, a as Clock } from "./clock-CYkvNgw-.js";
import { X } from "./x-CcGd-R1l.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const RECENT_ACTIVITY = [
  {
    id: 1,
    title: "Aadhaar Verified",
    description: "Your identity has been successfully confirmed",
    time: "2 hours ago",
    icon: CircleCheck,
    color: "text-success",
    bg: "bg-success/10"
  },
  {
    id: 2,
    title: "Ration Card Updated",
    description: "Family details updated on PDS system",
    time: "Yesterday",
    icon: Clock,
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    id: 3,
    title: "New Document Added",
    description: "Driving licence uploaded to your safe",
    time: "3 days ago",
    icon: Star,
    color: "text-primary",
    bg: "bg-primary/10"
  }
];
function StatsSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid grid-cols-3 gap-3",
      "aria-busy": "true",
      "data-ocid": "home.stats.loading_state",
      children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "card-glass rounded-xl p-4 space-y-2 animate-pulse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-10 bg-muted/40 rounded-md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-14 bg-muted/30 rounded-md" })
          ]
        },
        i
      ))
    }
  );
}
function CategorySkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex gap-3 overflow-x-auto pb-2",
      style: { scrollbarWidth: "none" },
      "aria-busy": "true",
      "data-ocid": "home.services.loading_state",
      children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "card-glass rounded-2xl p-4 min-w-[118px] space-y-3 shrink-0 animate-pulse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-10 rounded-xl bg-muted/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-20 bg-muted/30 rounded-md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-12 bg-muted/30 rounded-md" })
          ]
        },
        i
      ))
    }
  );
}
function StatCard({
  value,
  label,
  colorClass,
  delay,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.45, delay },
      "data-ocid": ocid,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "rounded-xl p-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-display font-bold ${colorClass}`, children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-tight", children: label })
      ] })
    }
  );
}
function LoginPrompt({
  onLogin,
  isLoading
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5 },
      className: "px-5 mt-6",
      "data-ocid": "login.card",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "text-center py-10 px-6 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-glass", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { size: 36, className: "text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Your Digital India Awaits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "One login for Aadhaar, Ration Card, Electricity, Gas, Bank and all your government services — safe and private." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "button-primary w-full h-12 text-sm font-semibold flex items-center justify-center gap-2 rounded-xl",
            onClick: onLogin,
            disabled: isLoading,
            "data-ocid": "login.submit_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { size: 16 }),
              isLoading ? "Connecting…" : "Login with Internet Identity"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "🔒 Secure · Private · No Password Needed" })
      ] })
    }
  );
}
function BiometricBanner({
  onEnable,
  onDismiss,
  isRegistering
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: -24 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -24 },
      transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
      "data-ocid": "home.biometric_banner",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-4 relative overflow-hidden",
          style: {
            background: "linear-gradient(135deg, oklch(0.25 0.12 280 / 0.85) 0%, oklch(0.2 0.1 250 / 0.85) 100%)",
            border: "1px solid oklch(0.68 0.22 256 / 0.4)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 24px oklch(0.55 0.22 256 / 0.3), inset 0 1px 0 rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-0 left-0 right-0 h-px",
                style: {
                  background: "linear-gradient(90deg, transparent, oklch(0.68 0.22 256 / 0.6), transparent)"
                },
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onDismiss,
                className: "absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center transition-smooth",
                style: { background: "oklch(var(--muted) / 0.3)" },
                "aria-label": "Dismiss",
                "data-ocid": "home.biometric_banner.close_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 13, className: "text-muted-foreground" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 pr-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.62 0.24 280) 0%, oklch(0.5 0.22 250) 100%)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { size: 22, className: "text-white", strokeWidth: 1.5 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground leading-snug", children: "Fingerprint Login Enable Karo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-relaxed", children: "Agle baar ek tap mein login karein! ⚡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onEnable,
                      disabled: isRegistering,
                      className: "flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-smooth disabled:opacity-60",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.62 0.24 280) 0%, oklch(0.5 0.22 250) 100%)",
                        boxShadow: "0 2px 12px oklch(0.55 0.22 280 / 0.4)"
                      },
                      "data-ocid": "home.biometric_banner.enable_button",
                      children: isRegistering ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" }),
                        "Registering…"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { size: 13 }),
                        "Enable Karo"
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onDismiss,
                      className: "px-4 py-2 rounded-xl text-xs font-semibold transition-smooth",
                      style: {
                        background: "oklch(var(--muted) / 0.4)",
                        color: "oklch(var(--muted-foreground))",
                        border: "1px solid oklch(var(--border) / 0.3)"
                      },
                      "data-ocid": "home.biometric_banner.dismiss_button",
                      children: "Baad Mein"
                    }
                  )
                ] })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function HomePage() {
  const {
    isAuthenticated,
    login,
    isLoading: authLoading,
    principal
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
    isPromptDismissed
  } = useWebAuthn();
  reactExports.useEffect(() => {
    if (isAuthenticated) initUserData();
  }, [isAuthenticated, initUserData]);
  const totalServices = (services == null ? void 0 : services.length) ?? 0;
  const verifiedCount = (services == null ? void 0 : services.filter((s) => s.status === "Verified").length) ?? 0;
  const pendingCount = (services == null ? void 0 : services.filter((s) => s.status === "Pending").length) ?? 0;
  const categoryCountMap = {};
  for (const cat of Object.keys(SERVICE_CATEGORIES)) {
    categoryCountMap[cat] = (services ?? []).filter((s) => {
      const catKey = typeof s.category === "string" ? s.category : Object.keys(s.category)[0];
      return catKey === cat;
    }).length;
  }
  const contentLoading = isAuthenticated && servicesLoading;
  const showBiometricBanner = isAuthenticated && !contentLoading && isWebAuthnSupported && !hasStoredCredential && !isPromptDismissed;
  const handleEnableBiometric = async () => {
    if (!principal) return;
    try {
      await registerBiometric(principal);
      ue.success(
        "Fingerprint register ho gaya! 🎉 Ab aap fingerprint se login kar sakte ho."
      );
    } catch {
    }
  };
  function handleMagicButton() {
    ue("AI Assistant coming soon! 🚀", {
      description: "We're building a multilingual AI helper for you.",
      duration: 5e3
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed inset-0 pointer-events-none overflow-hidden",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/8 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -right-20 w-72 h-72 rounded-full bg-accent/6 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-36 left-1/3 w-60 h-60 rounded-full bg-success/5 blur-3xl" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative z-10 max-w-lg mx-auto px-5 py-6 pb-36 space-y-6",
        "data-ocid": "home.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground", children: "Namaste! 👋" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base mt-1 font-body", children: "Your India Digital Hub" })
              ]
            }
          ),
          !authLoading && !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(LoginPrompt, { onLogin: login, isLoading: authLoading }),
          contentLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatsSkeleton, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CategorySkeleton, {})
          ] }),
          isAuthenticated && !contentLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: showBiometricBanner && /* @__PURE__ */ jsxRuntimeExports.jsx(
              BiometricBanner,
              {
                onEnable: handleEnableBiometric,
                onDismiss: dismissRegistrationPrompt,
                isRegistering
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-label": "Quick stats", "data-ocid": "home.stats.section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  value: totalServices,
                  label: "All Services",
                  colorClass: "text-foreground",
                  delay: 0.08,
                  ocid: "home.stats.total.card"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  value: verifiedCount,
                  label: "Verified ✓",
                  colorClass: "text-success",
                  delay: 0.16,
                  ocid: "home.stats.verified.card"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  value: pendingCount,
                  label: "Pending",
                  colorClass: "text-accent",
                  delay: 0.24,
                  ocid: "home.stats.pending.card"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "section",
              {
                "aria-label": "Your services",
                "data-ocid": "home.services.section",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold text-foreground", children: "Your Services" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "text-primary text-sm font-semibold transition-smooth hover:opacity-75",
                        onClick: () => void navigate({ to: "/services" }),
                        "data-ocid": "home.services.view_all_button",
                        children: "See All →"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex gap-3 overflow-x-auto pb-2 -mx-5 px-5",
                      style: { scrollbarWidth: "none" },
                      children: Object.entries(SERVICE_CATEGORIES).map(([key, cat], index) => {
                        const count = categoryCountMap[key] ?? 0;
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            initial: { opacity: 0, x: 24 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.4, delay: 0.1 + index * 0.08 },
                            className: "shrink-0",
                            "data-ocid": `home.services.item.${index + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              GlassCard,
                              {
                                className: "rounded-2xl p-4 w-[122px] space-y-3 active:scale-95",
                                onClick: () => void navigate({ to: "/services" }),
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    ServiceIcon,
                                    {
                                      category: key,
                                      size: 22
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground leading-tight", children: cat.label }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                                      count,
                                      " service",
                                      count !== 1 ? "s" : ""
                                    ] })
                                  ] })
                                ]
                              }
                            )
                          },
                          key
                        );
                      })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "section",
              {
                "aria-label": "Recent activity",
                "data-ocid": "home.activity.section",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold text-foreground mb-3", children: "Recent Activity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: RECENT_ACTIVITY.map((item, index) => {
                    const Icon = item.icon;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 16 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.4, delay: 0.12 + index * 0.1 },
                        "data-ocid": `home.activity.item.${index + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "flex items-center gap-4 py-3 px-4 rounded-xl", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: item.color })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: item.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: item.description })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground shrink-0", children: item.time })
                        ] })
                      },
                      item.id
                    );
                  }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.55 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { className: "p-4 border border-primary/20 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
                  "🔒 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "100% Secure" }),
                  " — Your data lives on the Internet Computer blockchain. No central server can ever access it."
                ] }) })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        type: "button",
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.6 },
        whileHover: { scale: 1.08 },
        whileTap: { scale: 0.92 },
        onClick: handleMagicButton,
        "aria-label": "AI Help",
        "data-ocid": "home.ai_help.button",
        className: "fixed bottom-24 right-5 z-50 w-16 h-16 rounded-full flex flex-col items-center justify-center gap-0.5 shadow-glass-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-smooth",
        style: { background: "var(--gradient-primary)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 20, className: "text-primary-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-primary-foreground leading-none", children: "AI Help" })
        ]
      }
    )
  ] });
}
export {
  HomePage
};
