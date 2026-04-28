import { Banknote, Plane, ShieldCheck, Wheat, Zap } from "lucide-react";
import type { ComponentType } from "react";
import type {
  AddDocumentPayload,
  Document,
  FileType,
  GovServicePublic,
  ServiceCategory,
  ServiceStatus,
  UpdateProfilePayload,
  UpdateServicePayload,
  UserProfilePublic,
} from "../backend";

// Re-export backend types for convenience
export type {
  ServiceCategory,
  ServiceStatus,
  FileType,
  UserProfilePublic as UserProfile,
  GovServicePublic,
  Document,
  AddDocumentPayload,
  UpdateProfilePayload,
  UpdateServicePayload,
};

// Service category metadata for UI
export const SERVICE_CATEGORIES: Record<
  string,
  {
    label: string;
    description: string;
    icon: ComponentType<{ className?: string; size?: number }>;
    color: string;
  }
> = {
  Identity: {
    label: "My Identity",
    description: "Aadhaar, PAN, Voter ID",
    icon: ShieldCheck,
    color: "text-primary",
  },
  FoodSecurity: {
    label: "Food Security",
    description: "Ration Card, PDS",
    icon: Wheat,
    color: "text-success",
  },
  Utilities: {
    label: "My Utilities",
    description: "Electricity, Gas, Water",
    icon: Zap,
    color: "text-accent",
  },
  Finance: {
    label: "My Finance",
    description: "Bank, Jan Dhan, LIC",
    icon: Banknote,
    color: "text-warning",
  },
  Travel: {
    label: "My Travel",
    description: "Passport, Driving Licence",
    icon: Plane,
    color: "text-primary",
  },
};
