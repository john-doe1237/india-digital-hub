import { r as reactExports, j as jsxRuntimeExports, z } from "./index-Df2_gRtF.js";
import { i as useComposedRefs, d as cn, j as useUserProfile, u as useUserServices, k as useUpdateProfile, L as Layout, G as GlassCard, B as Button, M as Moon, l as Sun, S as Skeleton, m as ServiceStatus } from "./useUserData-BHdIPNft.js";
import { S as StatusBadge, L as Link } from "./StatusBadge-ClO_gAY3.js";
import { I as Input } from "./input-C-hblGmk.js";
import { a as useControllableState, P as Primitive, c as composeEventHandlers, h as usePrevious, g as useSize, b as createContextScope, L as Label } from "./index-Dbu9-03F.js";
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
const __iconNode$3 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    {
      d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
      key: "1ykcvy"
    }
  ]
];
const PenLine = createLucideIcon("pen-line", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
      key: "1jlk70"
    }
  ],
  [
    "path",
    {
      d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
      key: "18rp1v"
    }
  ]
];
const ShieldOff = createLucideIcon("shield-off", __iconNode);
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = reactExports.forwardRef(
  ({
    __scopeSwitch,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.45,
    ease: [0.4, 0, 0.2, 1],
    delay
  },
  viewport: { once: true }
});
function ProfileAvatar({ name }) {
  const initial = name.trim().charAt(0).toUpperCase() || "U";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-24 h-24 rounded-full flex items-center justify-center text-4xl font-display font-bold text-white shadow-glass",
        style: {
          background: "linear-gradient(135deg, oklch(0.54 0.22 256) 0%, oklch(0.56 0.2 250) 100%)"
        },
        children: initial
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -bottom-1 -right-1 badge-verified flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 10 }),
      "✓"
    ] })
  ] });
}
function getStatusKey(s) {
  if (s.status === ServiceStatus.Verified) return "Verified";
  if (s.status === ServiceStatus.Pending) return "Pending";
  return "NotLinked";
}
function ServiceSummary({ services }) {
  const verified = services.filter(
    (s) => s.status === ServiceStatus.Verified
  ).length;
  const pending = services.filter(
    (s) => s.status === ServiceStatus.Pending
  ).length;
  const notLinked = services.filter(
    (s) => s.status === ServiceStatus.NotLinked
  ).length;
  const stats = [
    {
      count: verified,
      label: "Verified",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 20, className: "text-success" }),
      color: "text-success"
    },
    {
      count: pending,
      label: "Pending",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 20, className: "text-accent animate-pulse" }),
      color: "text-accent"
    },
    {
      count: notLinked,
      label: "Not Linked",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { size: 20, className: "text-muted-foreground" }),
      color: "text-muted-foreground"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: stats.map(({ count, label, icon, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "glass-elevated rounded-xl py-4 px-3 flex flex-col items-center gap-1.5 text-center",
      children: [
        icon,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-2xl font-display font-bold ${color}`, children: count }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground leading-tight", children: label })
      ]
    },
    label
  )) });
}
function ServiceChips({ services }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: services.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center gap-1.5 glass rounded-full px-3 py-1.5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: service.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatusBadge,
          {
            status: getStatusKey(service),
            className: "px-1.5 py-0.5 text-[10px]"
          }
        )
      ]
    },
    service.serviceId
  )) });
}
function EditForm({
  name,
  email,
  phone,
  onSave,
  onCancel,
  isSaving
}) {
  const [form, setForm] = reactExports.useState({ name, email, phone });
  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name: form.name, email: form.email, phone: form.phone });
  };
  const fields = [
    {
      id: "edit-name",
      key: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Full name",
      ocid: "profile.name.input"
    },
    {
      id: "edit-email",
      key: "email",
      label: "Email Address",
      type: "email",
      placeholder: "you@email.com",
      ocid: "profile.email.input"
    },
    {
      id: "edit-phone",
      key: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "+91 00000 00000",
      ocid: "profile.phone.input"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    fields.map(({ id, key, label, type, placeholder, ocid }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Label,
        {
          htmlFor: id,
          className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
          children: label
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id,
          type,
          value: form[key],
          onChange: set(key),
          placeholder,
          className: "glass border-border/40 focus:border-primary/50 rounded-xl h-10 text-sm",
          "data-ocid": ocid
        }
      )
    ] }, key)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "submit",
          disabled: isSaving,
          className: "flex-1 button-primary rounded-xl h-10 text-sm",
          "data-ocid": "profile.save_button",
          children: isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" }),
            "Saving…"
          ] }) : "Save Changes"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "outline",
          onClick: onCancel,
          className: "glass border-border/30 rounded-xl h-10 px-4",
          "data-ocid": "profile.cancel_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
        }
      )
    ] })
  ] });
}
function BiometricSection({
  isWebAuthnSupported,
  hasStoredCredential,
  isRegistering,
  onEnable,
  onRemove,
  error
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { "data-ocid": "profile.biometric.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-9 h-9 rounded-xl flex items-center justify-center",
          style: {
            background: "linear-gradient(135deg, oklch(0.62 0.24 280) 0%, oklch(0.5 0.22 250) 100%)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { size: 17, className: "text-white", strokeWidth: 1.5 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-display font-bold text-foreground", children: "Biometric / Fingerprint" })
    ] }),
    !isWebAuthnSupported ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-sm text-muted-foreground",
        "data-ocid": "profile.biometric.unsupported",
        children: "😔 Aapka device biometric support nahi karta"
      }
    ) : hasStoredCredential ? (
      /* Registered state */
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "profile.biometric.registered", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2.5 py-2.5 px-3 rounded-xl",
            style: {
              background: "oklch(var(--success) / 0.1)",
              border: "1px solid oklch(var(--success) / 0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 17, className: "text-success flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-success", children: "Fingerprint Registered" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Aap fingerprint se login kar sakte ho" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            onClick: onRemove,
            className: "w-full h-10 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-smooth",
            style: {
              background: "oklch(0.35 0.08 22 / 0.4)",
              color: "oklch(0.72 0.18 22)",
              border: "1px solid oklch(0.5 0.14 22 / 0.35)"
            },
            "data-ocid": "profile.biometric.remove_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldOff, { size: 15 }),
              "Remove Fingerprint"
            ]
          }
        )
      ] })
    ) : (
      /* Not set up state */
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "profile.biometric.not_registered", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2.5 py-2.5 px-3 rounded-xl",
            style: {
              background: "oklch(var(--muted) / 0.4)",
              border: "1px solid oklch(var(--border) / 0.3)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Fingerprint,
                {
                  size: 17,
                  className: "text-muted-foreground flex-shrink-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Fingerprint Not Set Up" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Enable karo — faster login milega" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            onClick: onEnable,
            disabled: isRegistering,
            className: "w-full h-10 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-smooth disabled:opacity-60",
            style: {
              background: "linear-gradient(135deg, oklch(0.62 0.24 280) 0%, oklch(0.5 0.22 250) 100%)",
              boxShadow: "0 2px 16px oklch(0.55 0.22 280 / 0.35)"
            },
            "data-ocid": "profile.biometric.enable_button",
            children: isRegistering ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" }),
              "Registering…"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { size: 15 }),
              "Enable Karo"
            ] })
          }
        )
      ] })
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "p",
      {
        className: "mt-3 text-xs px-3 py-2 rounded-xl",
        style: {
          color: "oklch(0.72 0.18 22)",
          background: "oklch(0.35 0.08 22 / 0.25)",
          border: "1px solid oklch(0.5 0.14 22 / 0.3)"
        },
        "data-ocid": "profile.biometric.error_state",
        children: [
          "⚠️ ",
          error
        ]
      }
    )
  ] });
}
function ProfileSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col gap-5 px-4 py-6 pb-24 max-w-md mx-auto",
      "data-ocid": "profile.loading_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glass flex flex-col items-center gap-3 py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-24 h-24 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-36 rounded-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24 rounded-lg" })
        ] }),
        [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glass space-y-3 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-28 rounded-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full rounded-xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full rounded-xl" })
        ] }, i))
      ]
    }
  );
}
function ProfilePage() {
  const {
    isAuthenticated,
    isLoading: authLoading,
    principal,
    login,
    logout
  } = useAuth();
  const { data: profile, isLoading: profileLoading } = useUserProfile();
  const { data: services = [], isLoading: servicesLoading } = useUserServices();
  const updateProfile = useUpdateProfile();
  const { theme, setTheme } = z();
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [copied, setCopied] = reactExports.useState(false);
  const {
    isWebAuthnSupported,
    hasStoredCredential,
    isRegistering,
    error: biometricError,
    registerBiometric,
    removeBiometric
  } = useWebAuthn();
  const isLoading = authLoading || profileLoading || servicesLoading;
  const profileName = (profile == null ? void 0 : profile.name) ?? "";
  const profileEmail = (profile == null ? void 0 : profile.email) ?? "";
  const profilePhone = (profile == null ? void 0 : profile.phone) ?? "";
  const displayName = profileName || "India Hub User";
  const handleCopyId = () => {
    if (!principal) return;
    void navigator.clipboard.writeText(principal).then(() => {
      setCopied(true);
      ue.success("Principal ID copied to clipboard!");
      setTimeout(() => setCopied(false), 2500);
    });
  };
  const handleSaveProfile = (payload) => {
    updateProfile.mutate(payload, {
      onSuccess: () => {
        ue.success("Your info has been updated!");
        setIsEditing(false);
      },
      onError: () => ue.error("Something went wrong. Please try again.")
    });
  };
  const handleEnableBiometric = async () => {
    if (!principal) return;
    try {
      await registerBiometric(principal);
      ue.success("Fingerprint register ho gaya! 🎉");
    } catch {
    }
  };
  const handleRemoveBiometric = async () => {
    await removeBiometric();
    ue("Fingerprint remove ho gaya.", {
      description: "Dobara add karne ke liye Profile mein jaao."
    });
  };
  if (!authLoading && !isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-[70vh] gap-6 p-6 text-center",
        "data-ocid": "profile.page",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp(0), className: "w-full max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "flex flex-col items-center gap-5 py-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-20 h-20 rounded-full flex items-center justify-center text-3xl",
              style: {
                background: "linear-gradient(135deg, oklch(0.54 0.22 256) 0%, oklch(0.56 0.2 250) 100%)"
              },
              children: "👤"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "You're not logged in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Please sign in to see your profile" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: login,
              className: "button-primary w-full rounded-xl h-11 text-base",
              "data-ocid": "profile.login_button",
              children: "Sign In to Continue"
            }
          )
        ] }) })
      }
    ) });
  }
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileSkeleton, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col gap-5 px-4 py-6 pb-28 max-w-md mx-auto",
      "data-ocid": "profile.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp(0), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "flex flex-col items-center gap-3 py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileAvatar, { name: displayName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground leading-tight", children: displayName }),
            profileEmail && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: profileEmail })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "badge-verified flex items-center gap-1 mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 12 }),
            "Verified User"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp(0.08), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { "data-ocid": "profile.info.section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-display font-bold text-foreground", children: "My Info" }),
            !isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => setIsEditing(true),
                className: "glass rounded-lg h-8 gap-1.5 text-primary hover:text-primary hover:bg-primary/10 text-xs",
                "data-ocid": "profile.edit_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 13 }),
                  "Edit My Info"
                ]
              }
            )
          ] }),
          isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            EditForm,
            {
              name: profileName,
              email: profileEmail,
              phone: profilePhone,
              onSave: handleSaveProfile,
              onCancel: () => setIsEditing(false),
              isSaving: updateProfile.isPending
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: [
            { label: "Name", value: profileName || "—" },
            { label: "Email", value: profileEmail || "—" },
            { label: "Phone", value: profilePhone || "—" }
          ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between items-center py-3 border-b border-border/20 last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground font-medium max-w-[58%] text-right truncate", children: value })
              ]
            },
            label
          )) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp(0.16), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { "data-ocid": "profile.services.summary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-display font-bold text-foreground mb-4", children: "My Services at a Glance" }),
          services.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceSummary, { services }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm text-muted-foreground",
              "data-ocid": "profile.services.empty_state",
              children: "No services linked yet. Go to the Services tab to get started."
            }
          )
        ] }) }),
        services.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp(0.22), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { "data-ocid": "profile.services.list", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-display font-bold text-foreground mb-4", children: "All Linked Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceChips, { services })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp(0.28), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { "data-ocid": "profile.settings.section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-display font-bold text-foreground mb-4", children: "App Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl glass flex items-center justify-center", children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 17, className: "text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 17, className: "text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: theme === "dark" ? "Dark Mode" : "Light Mode" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  "Currently ",
                  theme === "dark" ? "dark" : "light",
                  " theme"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: theme === "dark",
                onCheckedChange: (checked) => setTheme(checked ? "dark" : "light"),
                "data-ocid": "profile.theme.toggle"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp(0.34), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          BiometricSection,
          {
            isWebAuthnSupported,
            hasStoredCredential,
            isRegistering,
            onEnable: handleEnableBiometric,
            onRemove: handleRemoveBiometric,
            error: biometricError
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp(0.4), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { "data-ocid": "profile.account.section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-display font-bold text-foreground mb-4", children: "Account Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Your Unique ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 glass rounded-xl px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs text-muted-foreground font-mono flex-1 min-w-0 truncate", children: principal ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: handleCopyId,
                  disabled: !principal,
                  className: "flex-shrink-0 h-7 px-2.5 rounded-lg text-primary hover:text-primary hover:bg-primary/10 transition-smooth",
                  "data-ocid": "profile.copy_id.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 13 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-xs font-semibold", children: copied ? "Copied!" : "Copy ID" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "This is your unique Internet Computer identity. Keep it safe." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp(0.46), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: logout,
            className: "w-full h-12 rounded-xl font-bold text-base text-white transition-smooth hover:opacity-90 hover:shadow-glass-hover flex items-center gap-2 justify-center",
            style: {
              background: "linear-gradient(135deg, oklch(0.5 0.22 22) 0%, oklch(0.62 0.23 36) 100%)"
            },
            "data-ocid": "profile.sign_out_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 18 }),
              "Sign Out"
            ]
          }
        ) })
      ]
    }
  ) });
}
export {
  ProfilePage
};
