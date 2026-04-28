import { j as jsxRuntimeExports } from "./index-Df2_gRtF.js";
import { d as cn } from "./useUserData-BHdIPNft.js";
import { c as createLucideIcon } from "./proxy-kn6nNkwE.js";
import { a as Clock, C as CircleCheck } from "./clock-CYkvNgw-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
const Link = createLucideIcon("link", __iconNode);
const STATUS_CONFIG = {
  Verified: {
    label: "Verified",
    icon: CircleCheck,
    className: "badge-success"
  },
  Pending: {
    label: "Pending",
    icon: Clock,
    className: "badge-pending",
    animate: true
  },
  NotLinked: {
    label: "Not Linked",
    icon: Link,
    className: "inline-flex items-center px-3 py-1 rounded-full bg-muted/50 text-muted-foreground text-xs font-semibold"
  }
};
function StatusBadge({ status, className }) {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn(config.className, className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon,
      {
        size: 12,
        className: cn("mr-1", config.animate && "animate-pulse-soft")
      }
    ),
    config.label
  ] });
}
export {
  Link as L,
  StatusBadge as S
};
