import { useCallback, useEffect, useState } from "react";

const CREDENTIAL_ID_KEY = "webauthn_credential_id";
const DISMISSED_KEY = "webauthn_dismissed";

function getErrorMessage(err: unknown): string {
  if (!(err instanceof Error)) return "Kuch galat hua — Please try again.";
  const name = err.name;
  if (name === "NotAllowedError")
    return "Permission denied — Biometric access allow karo";
  if (name === "NotSupportedError")
    return "Aapka device biometric support nahi karta";
  if (name === "TimeoutError") return "Timeout — Dobara try karo";
  if (name === "AbortError") return "Cancelled — Dobara try karo";
  if (name === "SecurityError") return "Security error — Please try again";
  if (err.message?.toLowerCase().includes("cancel"))
    return "Cancelled — Dobara try karo";
  return "Kuch galat hua — Please try again.";
}

function generateChallenge(): ArrayBuffer {
  const arr = new Uint8Array(32);
  crypto.getRandomValues(arr);
  return arr.buffer as ArrayBuffer;
}

function bufferToBase64url(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let str = "";
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

function base64urlToBuffer(base64url: string): ArrayBuffer {
  const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(
    base64.length + ((4 - (base64.length % 4)) % 4),
    "=",
  );
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

export interface WebAuthnState {
  isWebAuthnSupported: boolean;
  hasStoredCredential: boolean;
  isRegistering: boolean;
  isAuthenticating: boolean;
  error: string | null;
  registerBiometric: (userId: string) => Promise<void>;
  loginWithBiometric: () => Promise<boolean>;
  removeBiometric: () => Promise<void>;
  dismissRegistrationPrompt: () => void;
  isPromptDismissed: boolean;
}

export function useWebAuthn(): WebAuthnState {
  const [isWebAuthnSupported] = useState<boolean>(
    () =>
      typeof window !== "undefined" &&
      !!window.PublicKeyCredential &&
      !!navigator.credentials,
  );

  const [hasStoredCredential, setHasStoredCredential] = useState<boolean>(
    () => !!localStorage.getItem(CREDENTIAL_ID_KEY),
  );

  const [isPromptDismissed, setIsPromptDismissed] = useState<boolean>(
    () => !!sessionStorage.getItem(DISMISSED_KEY),
  );

  const [isRegistering, setIsRegistering] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync hasStoredCredential with localStorage changes (e.g. after removal)
  useEffect(() => {
    setHasStoredCredential(!!localStorage.getItem(CREDENTIAL_ID_KEY));
  }, []);

  const registerBiometric = useCallback(
    async (userId: string): Promise<void> => {
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
              id: window.location.hostname,
            },
            user: {
              id: encodedUserId,
              name: userId,
              displayName: "India Hub User",
            },
            pubKeyCredParams: [
              { type: "public-key", alg: -7 }, // ES256
              { type: "public-key", alg: -257 }, // RS256
            ],
            authenticatorSelection: {
              userVerification: "required",
              residentKey: "preferred",
            },
            timeout: 60000,
            attestation: "none",
          },
        });

        if (!credential || credential.type !== "public-key") {
          throw new Error("Registration failed — no credential returned");
        }

        const pkCredential = credential as PublicKeyCredential;
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
    [isWebAuthnSupported],
  );

  const loginWithBiometric = useCallback(async (): Promise<boolean> => {
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
              id: credentialId,
            },
          ],
          userVerification: "required",
          timeout: 60000,
        },
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

  const removeBiometric = useCallback(async (): Promise<void> => {
    localStorage.removeItem(CREDENTIAL_ID_KEY);
    setHasStoredCredential(false);
    setError(null);
  }, []);

  const dismissRegistrationPrompt = useCallback(() => {
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
    isPromptDismissed,
  };
}
