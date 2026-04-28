import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-Df2_gRtF.js";
import { u as useAuth, a as useWebAuthn, F as Fingerprint } from "./fingerprint-7-dZ1fH0.js";
import { u as ue } from "./index-DWtJgJU7.js";
import { c as createLucideIcon, m as motion } from "./proxy-kn6nNkwE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode);
function AshokaChakra({ size = 40 }) {
  const spokes = Array.from({ length: 24 }, (_, i) => i);
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 2;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      "aria-hidden": "true",
      className: "opacity-60",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx,
            cy,
            r,
            fill: "none",
            stroke: "white",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r: r * 0.15, fill: "white" }),
        spokes.map((i) => {
          const angle = i * 360 / 24;
          const rad = angle * Math.PI / 180;
          const x1 = cx + r * 0.15 * Math.cos(rad);
          const y1 = cy + r * 0.15 * Math.sin(rad);
          const x2 = cx + r * 0.85 * Math.cos(rad);
          const y2 = cy + r * 0.85 * Math.sin(rad);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1,
              y1,
              x2,
              y2,
              stroke: "white",
              strokeWidth: "1"
            },
            i
          );
        })
      ]
    }
  );
}
function PulsingRing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative flex items-center justify-center w-16 h-16",
      "data-ocid": "splash.loading_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-0 rounded-full border-2 border-primary/40",
            animate: { scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] },
            transition: {
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-2 rounded-full border-2 border-primary/60",
            animate: { scale: [1, 1.25, 1], opacity: [1, 0.2, 1] },
            transition: {
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.3
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-transparent border-t-primary border-r-primary/40 animate-spin" })
      ]
    }
  );
}
function PulsingDots() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 items-center", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "w-2 h-2 rounded-full bg-primary",
      animate: { opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] },
      transition: {
        duration: 1.2,
        repeat: Number.POSITIVE_INFINITY,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    },
    i
  )) });
}
function BiometricLoginButton({
  onLogin,
  onIILogin,
  isAuthenticating
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: 1.1 },
      className: "flex flex-col items-center gap-3 w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            onClick: onLogin,
            disabled: isAuthenticating,
            className: "relative group w-full max-w-xs px-6 py-4 rounded-2xl font-semibold text-white text-base overflow-hidden flex items-center justify-center gap-3 transition-smooth disabled:opacity-70",
            style: {
              background: "linear-gradient(135deg, oklch(0.62 0.24 280) 0%, oklch(0.48 0.22 250) 100%)",
              boxShadow: "0 4px 28px oklch(0.55 0.22 280 / 0.55), inset 0 1px 0 rgba(255,255,255,0.18)"
            },
            whileTap: { scale: 0.96 },
            whileHover: { scale: 1.03 },
            "data-ocid": "splash.biometric_login_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent",
                  animate: { translateX: ["-100%", "200%"] },
                  transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2
                  },
                  "aria-hidden": "true"
                }
              ),
              isAuthenticating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 20, className: "animate-spin" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Verifying…" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 flex items-center justify-center w-8 h-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "absolute inset-0 rounded-full bg-white/15 animate-ping",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Fingerprint,
                    {
                      size: 22,
                      className: "relative text-white",
                      strokeWidth: 1.5
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Fingerprint se Login Karo" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 w-full max-w-xs",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex-1 h-px",
                  style: { background: "rgba(255,255,255,0.12)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", style: { color: "oklch(0.5 0.01 250)" }, children: "ya" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex-1 h-px",
                  style: { background: "rgba(255,255,255,0.12)" }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onIILogin,
            className: "text-sm font-medium underline underline-offset-4 transition-smooth hover:opacity-75",
            style: { color: "oklch(0.68 0.22 256)" },
            "data-ocid": "splash.ii_login_button",
            children: "Internet Identity se Login Karo"
          }
        )
      ]
    }
  );
}
function SplashPage() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, login } = useAuth();
  const {
    isWebAuthnSupported,
    hasStoredCredential,
    isAuthenticating,
    error: biometricError,
    loginWithBiometric
  } = useWebAuthn();
  const timerRef = reactExports.useRef(null);
  const [biometricErrorMsg, setBiometricErrorMsg] = reactExports.useState(
    null
  );
  reactExports.useEffect(() => {
    if (isLoading) return;
    timerRef.current = setTimeout(() => {
      navigate({ to: "/home" });
    }, 2500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isLoading, navigate]);
  const handleGetStarted = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    navigate({ to: "/home" });
  };
  const handleBiometricLogin = async () => {
    setBiometricErrorMsg(null);
    if (timerRef.current) clearTimeout(timerRef.current);
    const success = await loginWithBiometric();
    if (success) {
      ue.success("Fingerprint se login ho gaya! 🎉");
      navigate({ to: "/home" });
    } else {
      const msg = biometricError ?? "Fingerprint login fail hua — dobara try karo";
      setBiometricErrorMsg(msg);
      ue.error(msg);
    }
  };
  const showBiometricButton = isWebAuthnSupported && hasStoredCredential;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative flex flex-col items-center justify-center min-h-screen overflow-hidden",
      style: {
        background: "radial-gradient(ellipse 120% 80% at 50% 0%, oklch(0.22 0.12 280) 0%, oklch(0.15 0.08 260) 40%, oklch(0.08 0 0) 100%)"
      },
      "data-ocid": "splash.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-1.5 rounded-none",
            style: {
              background: "linear-gradient(90deg, oklch(0.75 0.18 54) 0%, oklch(0.8 0.21 54) 50%, oklch(0.75 0.18 54) 100%)",
              boxShadow: "0 0 24px oklch(0.75 0.18 54 / 0.5)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute top-[-10%] left-[-20%] w-[60vw] h-[60vw] rounded-full opacity-20",
            style: {
              background: "radial-gradient(circle, oklch(0.55 0.22 280) 0%, transparent 70%)",
              filter: "blur(60px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute bottom-[-5%] right-[-15%] w-[50vw] h-[50vw] rounded-full opacity-15",
            style: {
              background: "radial-gradient(circle, oklch(0.45 0.2 240) 0%, transparent 70%)",
              filter: "blur(80px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center gap-6 px-6 text-center max-w-sm mx-auto w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.7 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
              className: "relative flex items-center justify-center",
              "data-ocid": "splash.logo",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "absolute w-32 h-32 rounded-full",
                    style: {
                      background: "radial-gradient(circle, oklch(0.68 0.22 256 / 0.25) 0%, transparent 70%)"
                    },
                    animate: { scale: [1, 1.15, 1] },
                    transition: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "absolute w-24 h-24 rounded-full border border-primary/30",
                    animate: { scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] },
                    transition: {
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 0.5
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-glass",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.55 0.22 280) 0%, oklch(0.45 0.2 250) 100%)",
                      boxShadow: "0 8px 32px oklch(0.55 0.22 280 / 0.5), inset 0 1px 0 rgba(255,255,255,0.15)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Fingerprint,
                      {
                        className: "w-10 h-10 text-white drop-shadow",
                        strokeWidth: 1.5
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
              className: "flex flex-col gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "text-4xl font-bold leading-tight tracking-tight text-gradient",
                    style: { fontFamily: "Inter, Montserrat, sans-serif" },
                    children: "India Digital Hub"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { scaleX: 0, opacity: 0 },
                    animate: { scaleX: 1, opacity: 1 },
                    transition: { duration: 0.5, delay: 0.7, ease: "easeOut" },
                    className: "h-px mx-auto w-24 origin-left",
                    style: {
                      background: "linear-gradient(90deg, transparent, oklch(0.75 0.18 54), transparent)"
                    },
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.55, ease: "easeOut", delay: 0.5 },
              className: "flex flex-col items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xl font-semibold",
                    style: {
                      color: "oklch(0.92 0.01 250)",
                      fontFamily: "Inter, Montserrat, sans-serif"
                    },
                    children: "Ek Login, Sabka Kaam"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-medium tracking-widest uppercase",
                    style: { color: "oklch(0.6 0.01 250)" },
                    children: "One Login. All Work Done."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5, delay: 0.75 },
              className: "flex items-center gap-4 w-full",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex-1 h-px",
                    style: {
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15))"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AshokaChakra, { size: 36 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex-1 h-px",
                    style: {
                      background: "linear-gradient(90deg, rgba(255,255,255,0.15), transparent)"
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 1 },
              className: "flex flex-col items-center gap-4 w-full",
              children: [
                isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(PulsingRing, {}) : showBiometricButton ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  BiometricLoginButton,
                  {
                    onLogin: handleBiometricLogin,
                    onIILogin: login,
                    isAuthenticating
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PulsingDots, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.button,
                    {
                      onClick: handleGetStarted,
                      className: "relative group w-full max-w-xs px-8 py-3.5 rounded-2xl font-semibold text-white text-base overflow-hidden transition-smooth",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.6 0.22 280) 0%, oklch(0.5 0.2 250) 100%)",
                        boxShadow: "0 4px 24px oklch(0.55 0.22 280 / 0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
                        fontFamily: "Inter, Montserrat, sans-serif"
                      },
                      whileTap: { scale: 0.96 },
                      whileHover: { scale: 1.03 },
                      "data-ocid": "splash.primary_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent",
                            animate: { translateX: ["-100%", "200%"] },
                            transition: {
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatDelay: 1.5
                            },
                            "aria-hidden": "true"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "🇮🇳 Get Started" })
                      ]
                    }
                  )
                ] }),
                biometricErrorMsg && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 4 },
                    animate: { opacity: 1, y: 0 },
                    className: "text-xs text-center px-4 py-2 rounded-xl",
                    style: {
                      color: "oklch(0.72 0.18 22)",
                      background: "oklch(0.35 0.08 22 / 0.3)",
                      border: "1px solid oklch(0.5 0.14 22 / 0.3)"
                    },
                    "data-ocid": "splash.biometric.error_state",
                    children: [
                      "⚠️ ",
                      biometricErrorMsg
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.6, delay: 1.3 },
              className: "flex flex-wrap justify-center gap-2 text-xs",
              style: { color: "oklch(0.5 0.01 250)" },
              children: [
                "Aadhaar",
                "Ration Card",
                "Bijli",
                "Passport",
                "Bank Link",
                "Voter ID"
              ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "px-2.5 py-1 rounded-full",
                  style: {
                    background: "oklch(var(--card) / 0.25)",
                    border: "1px solid oklch(var(--border) / 0.2)"
                  },
                  children: s
                },
                s
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 h-1",
            style: {
              background: "linear-gradient(90deg, oklch(0.7 0.19 142) 0%, oklch(0.65 0.2 145) 50%, oklch(0.7 0.19 142) 100%)",
              boxShadow: "0 0 20px oklch(0.7 0.19 142 / 0.4)"
            },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
export {
  SplashPage
};
