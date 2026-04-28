import { a as useParams, u as useNavigate, j as jsxRuntimeExports, r as reactExports } from "./index-Df2_gRtF.js";
import { u as useUserServices, L as Layout, G as GlassCard, B as Button, F as FileText, S as Skeleton, c as useUpdateServiceStatus } from "./useUserData-BHdIPNft.js";
import { a as ServiceIcon, S as SERVICE_CATEGORIES } from "./index-CAqd4n0W.js";
import { S as StatusBadge } from "./StatusBadge-ClO_gAY3.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, j as DialogFooter } from "./select-BIxjHNE4.js";
import { L as Label } from "./index-Dbu9-03F.js";
import { u as ue } from "./index-DWtJgJU7.js";
import { c as createLucideIcon, m as motion } from "./proxy-kn6nNkwE.js";
import "./clock-CYkvNgw-.js";
import "./x-CcGd-R1l.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode);
function formatTimestamp(ts) {
  const ms = Number(ts / 1000000n);
  if (ms === 0) return "Never";
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(ms));
}
function UpdateInfoModal({ service }) {
  const [open, setOpen] = reactExports.useState(false);
  const [selectedStatus, setSelectedStatus] = reactExports.useState(
    service.status
  );
  const { mutateAsync, isPending } = useUpdateServiceStatus();
  async function handleSave() {
    try {
      await mutateAsync({
        serviceId: service.serviceId,
        status: selectedStatus,
        metadata: service.metadata
      });
      ue.success("Service status updated!");
      setOpen(false);
    } catch {
      ue.error("Could not update. Please try again.");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        className: "w-full h-12 rounded-xl text-base font-semibold transition-smooth border-border/40 hover:border-primary/40",
        "data-ocid": "service-detail.update_info_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 18, className: "mr-2" }),
          "Update Info"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "glass-elevated rounded-2xl border-border/20 max-w-xs mx-auto p-6",
        "data-ocid": "service-detail.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-lg", children: "Update Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { className: "text-muted-foreground text-sm", children: [
              "Change the status for",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: service.name }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "status-select",
                className: "text-sm font-semibold text-foreground mb-2 block",
                children: "New Status"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: selectedStatus,
                onValueChange: (v) => setSelectedStatus(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      id: "status-select",
                      className: "w-full rounded-xl border-border/30 bg-card/50 h-11",
                      "data-ocid": "service-detail.status_select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choose status" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "glass-elevated rounded-xl border-border/30", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Verified", children: "✅ Verified" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Pending", children: "🕐 Pending" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "NotLinked", children: "🔗 Not Linked" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2 flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setOpen(false),
                className: "flex-1 rounded-xl",
                "data-ocid": "service-detail.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => void handleSave(),
                disabled: isPending,
                className: "flex-1 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold",
                "data-ocid": "service-detail.confirm_button",
                children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" }),
                  "Saving…"
                ] }) : "Save"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function DetailSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 px-4 pt-4 pb-6 max-w-lg mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-28 h-8 rounded-xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glass rounded-2xl p-6 flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-20 h-20 rounded-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-40 h-6 rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-20 h-6 rounded-full" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full h-16 rounded-2xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full h-12 rounded-xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full h-12 rounded-xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full h-12 rounded-xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full h-24 rounded-xl" })
  ] });
}
function NotFound({ serviceId }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4 },
      className: "flex flex-col items-center justify-center min-h-[60vh] px-6 gap-5",
      "data-ocid": "service-detail.error_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-3xl bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 36, className: "text-destructive" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-foreground", children: "Service Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-1 max-w-xs", children: [
            "We couldn't find the service “",
            serviceId,
            "”. It may have been removed or the link is broken."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => void navigate({ to: "/services" }),
            className: "rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8",
            "data-ocid": "service-detail.back_to_services_button",
            children: "Back to All Services"
          }
        )
      ]
    }
  );
}
function ServiceDetailPage() {
  const { serviceId } = useParams({ from: "/services/$serviceId" });
  const navigate = useNavigate();
  const { data: services, isLoading } = useUserServices();
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DetailSkeleton, {}) });
  }
  const service = (services ?? []).find((s) => s.serviceId === serviceId);
  if (!service) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFound, { serviceId }) });
  }
  const categoryKey = service.category;
  const categoryMeta = SERVICE_CATEGORIES[categoryKey];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 32 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.36, ease: "easeOut" },
      className: "px-4 pt-5 pb-6 max-w-lg mx-auto flex flex-col gap-4",
      "data-ocid": "service-detail.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => void navigate({ to: "/services" }),
            className: "flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group w-fit",
            "data-ocid": "service-detail.back_button",
            "aria-label": "Go back to all services",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ArrowLeft,
                {
                  size: 18,
                  className: "group-hover:-translate-x-0.5 transition-transform duration-200"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "All Services" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.35, delay: 0.06 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "relative overflow-hidden flex flex-col items-center gap-4 py-8 px-6 text-center rounded-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 opacity-[0.04] pointer-events-none",
                  style: { background: "var(--gradient-primary)" },
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ServiceIcon,
                  {
                    category: categoryKey,
                    size: 36,
                    className: "w-20 h-20 rounded-2xl shadow-glass"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-2 -right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: service.status }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground leading-tight", children: service.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-1", children: [
                  (categoryMeta == null ? void 0 : categoryMeta.label) ?? service.category,
                  (categoryMeta == null ? void 0 : categoryMeta.description) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    " ",
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: categoryMeta.description })
                  ] }) : null
                ] })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.35, delay: 0.12 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "flex items-center gap-3 py-3 px-4 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18, className: "text-primary flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium", children: "Last Updated" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-semibold text-foreground",
                    "data-ocid": "service-detail.last_updated",
                    children: formatTimestamp(service.lastUpdated)
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.35, delay: 0.18 },
            className: "flex flex-col gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "w-full h-12 rounded-xl text-base font-semibold bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-glass transition-smooth hover:shadow-glass-hover",
                  "data-ocid": "service-detail.view_details_button",
                  onClick: () => ue.info("Opening service portal…"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 18, className: "mr-2" }),
                    "View Details"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "w-full h-12 rounded-xl text-base font-semibold bg-success text-success-foreground shadow-glass transition-smooth hover:shadow-glass-hover",
                  "data-ocid": "service-detail.get_papers_button",
                  onClick: () => ue.success("Fetching your papers…"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 18, className: "mr-2" }),
                    "Get My Papers"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UpdateInfoModal, { service })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.35, delay: 0.24 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              GlassCard,
              {
                className: "flex flex-col gap-2 py-4 px-5 rounded-xl",
                "data-ocid": "service-detail.info_card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 16, className: "text-primary flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "About This Service" })
                  ] }),
                  service.metadata && service.metadata.trim().length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed break-words", children: service.metadata }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: (categoryMeta == null ? void 0 : categoryMeta.description) ? `${categoryMeta.description} — keep your information up to date so services work smoothly.` : "Keep your information up to date so this service works smoothly whenever you need it." })
                ]
              }
            )
          }
        )
      ]
    }
  ) });
}
export {
  ServiceDetailPage
};
