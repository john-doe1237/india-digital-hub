import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  AddDocumentPayload,
  UpdateProfilePayload,
  UpdateServicePayload,
} from "../backend";

export function useUserProfile() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getUserProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUserServices() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["userServices"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getUserServices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUserDocuments() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["userDocuments"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getUserDocuments();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useInitUserData() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.initUserData();
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      void queryClient.invalidateQueries({ queryKey: ["userServices"] });
      void queryClient.invalidateQueries({ queryKey: ["userDocuments"] });
    },
  });
}

export function useUpdateProfile() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: UpdateProfilePayload) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateProfile(payload);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
}

export function useUpdateServiceStatus() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: UpdateServicePayload) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateServiceStatus(payload);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["userServices"] });
    },
  });
}

export function useAddDocument() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: AddDocumentPayload) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addDocument(payload);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["userDocuments"] });
    },
  });
}

export function useDeleteDocument() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (docId: bigint) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteDocument(docId);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["userDocuments"] });
    },
  });
}
