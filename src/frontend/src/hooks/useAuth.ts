import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useMemo } from "react";

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  principal: string | null;
  login: () => void;
  logout: () => void;
}

export function useAuth(): AuthState {
  const { identity, isLoggingIn, isAuthenticated, login, clear } =
    useInternetIdentity();

  const principal = useMemo(
    () => (identity ? identity.getPrincipal().toText() : null),
    [identity],
  );

  return {
    isAuthenticated,
    isLoading: isLoggingIn,
    principal,
    login,
    logout: clear,
  };
}
