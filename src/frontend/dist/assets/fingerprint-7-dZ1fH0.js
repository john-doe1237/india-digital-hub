import { e as useInternetIdentity, r as reactExports } from "./index-Df2_gRtF.js";
import { c as createLucideIcon } from "./proxy-kn6nNkwE.js";
function useAuth() {
  const { identity, isLoggingIn, isAuthenticated, login, clear } = useInternetIdentity();
  const principal = reactExports.useMemo(
    () => identity ? identity.getPrincipal().toText() : null,
    [identity]
  );
  return {
    isAuthenticated,
    isLoading: isLoggingIn,
    principal,
    login,
    logout: clear
  };
}
const CREDENTIAL_ID_KEY = "webauthn_credential_id";
const DISMISSED_KEY = "webauthn_dismissed";
function getErrorMessage(err) {
  var _a;
  if (!(err instanceof Error)) return "Kuch galat hua — Please try again.";
  const name = err.name;
  if (name === "NotAllowedError")
    return "Permission denied — Biometric access allow karo";
  if (name === "NotSupportedError")
    return "Aapka device biometric support nahi karta";
  if (name === "TimeoutError") return "Timeout — Dobara try karo";
  if (name === "AbortError") return "Cancelled — Dobara try karo";
  if (name === "SecurityError") return "Security error — Please try again";
  if ((_a = err.message) == null ? void 0 : _a.toLowerCase().includes("cancel"))
    return "Cancelled — Dobara try karo";
  return "Kuch galat hua — Please try again.";
}
function generateChallenge() {
  const arr = new Uint8Array(32);
  crypto.getRandomValues(arr);
  return arr.buffer;
}
function bufferToBase64url(buffer) {
  const bytes = new Uint8Array(buffer);
  let str = "";
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function base64urlToBuffer(base64url) {
  const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(
    base64.length + (4 - base64.length % 4) % 4,
    "="
  );
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}
function useWebAuthn() {
  const [isWebAuthnSupported] = reactExports.useState(
    () => typeof window !== "undefined" && !!window.PublicKeyCredential && !!navigator.credentials
  );
  const [hasStoredCredential, setHasStoredCredential] = reactExports.useState(
    () => !!localStorage.getItem(CREDENTIAL_ID_KEY)
  );
  const [isPromptDismissed, setIsPromptDismissed] = reactExports.useState(
    () => !!sessionStorage.getItem(DISMISSED_KEY)
  );
  const [isRegistering, setIsRegistering] = reactExports.useState(false);
  const [isAuthenticating, setIsAuthenticating] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setHasStoredCredential(!!localStorage.getItem(CREDENTIAL_ID_KEY));
  }, []);
  const registerBiometric = reactExports.useCallback(
    async (userId) => {
      if (!isWebAuthnSupported) {
        setError("Aapka device biometric support nahi karta");
        return;
      }
      setIsRegistering(true);
      setError(null);
      try {
        const challenge = generateChallenge();
        const encodedUserId = new TextEncoder().encode(userId);
        const credential = await navigator.credentials.create({
          publicKey: {
            challenge,
            rp: {
              name: "India Digital Hub",
              id: window.location.hostname
            },
            user: {
              id: encodedUserId,
              name: userId,
              displayName: "India Hub User"
            },
            pubKeyCredParams: [
              { type: "public-key", alg: -7 },
              // ES256
              { type: "public-key", alg: -257 }
              // RS256
            ],
            authenticatorSelection: {
              userVerification: "required",
              residentKey: "preferred"
            },
            timeout: 6e4,
            attestation: "none"
          }
        });
        if (!credential || credential.type !== "public-key") {
          throw new Error("Registration failed — no credential returned");
        }
        const pkCredential = credential;
        const credentialId = bufferToBase64url(pkCredential.rawId);
        localStorage.setItem(CREDENTIAL_ID_KEY, credentialId);
        setHasStoredCredential(true);
        setIsPromptDismissed(true);
      } catch (err) {
        setError(getErrorMessage(err));
        throw err;
      } finally {
        setIsRegistering(false);
      }
    },
    [isWebAuthnSupported]
  );
  const loginWithBiometric = reactExports.useCallback(async () => {
    if (!isWebAuthnSupported) {
      setError("Aapka device biometric support nahi karta");
      return false;
    }
    const storedId = localStorage.getItem(CREDENTIAL_ID_KEY);
    if (!storedId) {
      setError("Koi fingerprint registered nahi hai — pehle register karo");
      return false;
    }
    setIsAuthenticating(true);
    setError(null);
    try {
      const challenge = generateChallenge();
      const credentialId = base64urlToBuffer(storedId);
      const assertion = await navigator.credentials.get({
        publicKey: {
          challenge,
          allowCredentials: [
            {
              type: "public-key",
              id: credentialId
            }
          ],
          userVerification: "required",
          timeout: 6e4
        }
      });
      if (!assertion) {
        setError("Authentication failed — Please try again");
        return false;
      }
      return true;
    } catch (err) {
      setError(getErrorMessage(err));
      return false;
    } finally {
      setIsAuthenticating(false);
    }
  }, [isWebAuthnSupported]);
  const removeBiometric = reactExports.useCallback(async () => {
    localStorage.removeItem(CREDENTIAL_ID_KEY);
    setHasStoredCredential(false);
    setError(null);
  }, []);
  const dismissRegistrationPrompt = reactExports.useCallback(() => {
    sessionStorage.setItem(DISMISSED_KEY, "true");
    setIsPromptDismissed(true);
  }, []);
  return {
    isWebAuthnSupported,
    hasStoredCredential,
    isRegistering,
    isAuthenticating,
    error,
    registerBiometric,
    loginWithBiometric,
    removeBiometric,
    dismissRegistrationPrompt,
    isPromptDismissed
  };
}
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }]
];
const Fingerprint = createLucideIcon("fingerprint", __iconNode);
export {
  Fingerprint as F,
  useWebAuthn as a,
  useAuth as u
};
