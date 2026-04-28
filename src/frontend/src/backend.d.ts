import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type UserId = Principal;
export type Timestamp = bigint;
export interface AddDocumentPayload {
    title: string;
    description: string;
    fileType: FileType;
    category: string;
}
export interface UpdateProfilePayload {
    name: string;
    email: string;
    phone: string;
}
export interface UpdateServicePayload {
    status: ServiceStatus;
    metadata: string;
    serviceId: string;
}
export interface Document {
    title: string;
    description: string;
    fileType: FileType;
    category: string;
    docId: bigint;
    uploadDate: Timestamp;
}
export interface WebAuthnCredentialPublic {
    createdAt: Timestamp;
    credentialId: Uint8Array;
    deviceName: string;
}
export interface GovServicePublic {
    status: ServiceStatus;
    metadata: string;
    name: string;
    lastUpdated: Timestamp;
    category: ServiceCategory;
    serviceId: string;
}
export interface UserProfilePublic {
    userId: UserId;
    name: string;
    createdAt: Timestamp;
    email: string;
    updatedAt: Timestamp;
    phone: string;
}
export enum FileType {
    PDF = "PDF",
    Image = "Image"
}
export enum ServiceCategory {
    Travel = "Travel",
    Identity = "Identity",
    FoodSecurity = "FoodSecurity",
    Finance = "Finance",
    Utilities = "Utilities"
}
export enum ServiceStatus {
    NotLinked = "NotLinked",
    Verified = "Verified",
    Pending = "Pending"
}
export interface backendInterface {
    addDocument(payload: AddDocumentPayload): Promise<bigint>;
    deleteDocument(docId: bigint): Promise<boolean>;
    getUserDocuments(): Promise<Array<Document>>;
    getUserProfile(): Promise<UserProfilePublic | null>;
    getUserServices(): Promise<Array<GovServicePublic>>;
    getWebAuthnCredentials(): Promise<Array<WebAuthnCredentialPublic>>;
    initUserData(): Promise<void>;
    registerWebAuthnCredential(credentialId: Uint8Array, publicKey: Uint8Array, deviceName: string): Promise<{
        __kind__: "ok";
        ok: string;
    } | {
        __kind__: "err";
        err: string;
    }>;
    removeWebAuthnCredential(credentialId: Uint8Array): Promise<{
        __kind__: "ok";
        ok: string;
    } | {
        __kind__: "err";
        err: string;
    }>;
    updateProfile(payload: UpdateProfilePayload): Promise<void>;
    updateServiceStatus(payload: UpdateServicePayload): Promise<boolean>;
    verifyWebAuthnCredential(credentialId: Uint8Array): Promise<{
        __kind__: "ok";
        ok: boolean;
    } | {
        __kind__: "err";
        err: string;
    }>;
}
