import type { backendInterface, Document, GovServicePublic, UserProfilePublic } from "../backend";
import { FileType, ServiceCategory, ServiceStatus } from "../backend";

const mockProfile: UserProfilePublic = {
  userId: { toText: () => "aaaaa-bbbbb-ccccc" } as any,
  name: "Rajesh Kumar",
  email: "rajesh.kumar@example.com",
  phone: "+91 98765 43210",
  createdAt: BigInt(1700000000000),
  updatedAt: BigInt(1700000000000),
};

const mockDocuments: Document[] = [
  {
    docId: BigInt(1),
    title: "Aadhaar Card",
    description: "12-digit unique identity number issued by UIDAI",
    fileType: FileType.PDF,
    category: "Identity",
    uploadDate: BigInt(1700000000000),
  },
  {
    docId: BigInt(2),
    title: "PAN Card",
    description: "Permanent Account Number for tax purposes",
    fileType: FileType.Image,
    category: "Finance",
    uploadDate: BigInt(1700100000000),
  },
  {
    docId: BigInt(3),
    title: "Ration Card",
    description: "Food security document for subsidized grains",
    fileType: FileType.PDF,
    category: "FoodSecurity",
    uploadDate: BigInt(1700200000000),
  },
];

const mockServices: GovServicePublic[] = [
  {
    serviceId: "aadhaar",
    name: "Aadhaar",
    category: ServiceCategory.Identity,
    status: ServiceStatus.Verified,
    metadata: "XXXX-XXXX-7890",
    lastUpdated: BigInt(1700000000000),
  },
  {
    serviceId: "pan",
    name: "PAN Card",
    category: ServiceCategory.Finance,
    status: ServiceStatus.Verified,
    metadata: "ABCDE1234F",
    lastUpdated: BigInt(1700000000000),
  },
  {
    serviceId: "ration",
    name: "Ration Card",
    category: ServiceCategory.FoodSecurity,
    status: ServiceStatus.Pending,
    metadata: "MH-12345678",
    lastUpdated: BigInt(1700000000000),
  },
  {
    serviceId: "voter",
    name: "Voter ID",
    category: ServiceCategory.Identity,
    status: ServiceStatus.NotLinked,
    metadata: "",
    lastUpdated: BigInt(1700000000000),
  },
  {
    serviceId: "passport",
    name: "Passport",
    category: ServiceCategory.Travel,
    status: ServiceStatus.Pending,
    metadata: "P1234567",
    lastUpdated: BigInt(1700000000000),
  },
  {
    serviceId: "electricity",
    name: "Electricity",
    category: ServiceCategory.Utilities,
    status: ServiceStatus.Verified,
    metadata: "Consumer: MH-987654",
    lastUpdated: BigInt(1700000000000),
  },
  {
    serviceId: "gas",
    name: "Gas Connection",
    category: ServiceCategory.Utilities,
    status: ServiceStatus.Verified,
    metadata: "HP Gas - 12345",
    lastUpdated: BigInt(1700000000000),
  },
  {
    serviceId: "bank",
    name: "Bank Account",
    category: ServiceCategory.Finance,
    status: ServiceStatus.NotLinked,
    metadata: "",
    lastUpdated: BigInt(1700000000000),
  },
];

export const mockBackend: backendInterface = {
  addDocument: async (_payload) => BigInt(mockDocuments.length + 1),
  deleteDocument: async (_docId) => true,
  getUserDocuments: async () => mockDocuments,
  getUserProfile: async () => mockProfile,
  getUserServices: async () => mockServices,
  getWebAuthnCredentials: async () => [],
  initUserData: async () => undefined,
  registerWebAuthnCredential: async (_credentialId, _publicKey, _deviceName) => ({ __kind__: "ok", ok: "registered" }),
  removeWebAuthnCredential: async (_credentialId) => ({ __kind__: "ok", ok: "removed" }),
  updateProfile: async (_payload) => undefined,
  updateServiceStatus: async (_payload) => true,
  verifyWebAuthnCredential: async (_credentialId) => ({ __kind__: "ok", ok: true }),
};
