import { r as reactExports, j as jsxRuntimeExports, u as useNavigate } from "./index-Df2_gRtF.js";
import { u as useUserServices, L as Layout, b as ServiceCategory, S as Skeleton, G as GlassCard } from "./useUserData-BHdIPNft.js";
import { S as SERVICE_CATEGORIES, a as ServiceIcon } from "./index-CAqd4n0W.js";
import { S as StatusBadge } from "./StatusBadge-ClO_gAY3.js";
import { c as createLucideIcon, m as motion } from "./proxy-kn6nNkwE.js";
import "./clock-CYkvNgw-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
];
const Inbox = createLucideIcon("inbox", __iconNode);
const FILTER_TABS = [
  { id: "All", label: "All" },
  { id: ServiceCategory.Identity, label: "Identity" },
  { id: ServiceCategory.FoodSecurity, label: "Food Security" },
  { id: ServiceCategory.Utilities, label: "Utilities" },
  { id: ServiceCategory.Finance, label: "Finance" },
  { id: ServiceCategory.Travel, label: "Travel" }
];
function ServiceCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glass rounded-2xl p-4 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-12 h-12 rounded-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-16 h-6 rounded-full" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-3/4 h-4 rounded" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-1/2 h-3 rounded" })
  ] });
}
function EmptyState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4 },
      className: "col-span-full flex flex-col items-center justify-center py-20 gap-4",
      "data-ocid": "services.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { size: 36, className: "text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-foreground", children: "No services here yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1 max-w-xs", children: "Your linked government services will appear here once you connect them." })
        ] })
      ]
    }
  );
}
function ServiceCard({ service, index }) {
  const navigate = useNavigate();
  const categoryMeta = SERVICE_CATEGORIES[service.category];
  const categoryKey = service.category;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.35, delay: index * 0.07, ease: "easeOut" },
      "data-ocid": `services.item.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        GlassCard,
        {
          className: "p-4 flex flex-col gap-3 h-full",
          onClick: () => void navigate({
            to: "/services/$serviceId",
            params: { serviceId: service.serviceId }
          }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ServiceIcon,
                {
                  category: categoryKey,
                  size: 22,
                  className: "w-12 h-12 flex-shrink-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: service.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm leading-snug truncate", children: service.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-0.5", children: (categoryMeta == null ? void 0 : categoryMeta.label) ?? service.category })
            ] })
          ]
        }
      )
    }
  );
}
function ServicesPage() {
  const [activeTab, setActiveTab] = reactExports.useState("All");
  const { data: services, isLoading } = useUserServices();
  const filtered = (services ?? []).filter(
    (s) => activeTab === "All" || s.category === activeTab
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        className: "px-4 pt-5 pb-2 max-w-lg mx-auto w-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground", children: "All Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "Your government services in one place" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "sticky top-[57px] z-10 bg-background/80 backdrop-blur-md border-b border-border/30 w-full",
        "data-ocid": "services.filter.tab",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 overflow-x-auto no-scrollbar px-4 max-w-lg mx-auto", children: FILTER_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveTab(tab.id),
              "data-ocid": `services.tab.${tab.id.toLowerCase().replace(/\s/g, "_")}`,
              className: [
                "relative px-3 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              ].join(" "),
              children: [
                tab.label,
                isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    layoutId: "active-tab-underline",
                    className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full",
                    transition: {
                      type: "spring",
                      stiffness: 380,
                      damping: 32
                    }
                  }
                )
              ]
            },
            tab.id
          );
        }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-4 pb-6 max-w-lg mx-auto w-full", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: Array.from({ length: 6 }).map((_, i) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders
      /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCardSkeleton, {}, i)
    )) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: filtered.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ServiceCard,
      {
        service,
        index: i
      },
      service.serviceId
    )) }) })
  ] }) });
}
export {
  ServicesPage
};
