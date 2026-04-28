import { GlassCard } from "@/components/GlassCard";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  useAddDocument,
  useDeleteDocument,
  useUserDocuments,
} from "@/hooks/useUserData";
import { cn } from "@/lib/utils";
import { Eye, FileText, Image, Paperclip, Plus, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { FileType } from "../backend";
import type { Document } from "../backend";

// ─── helpers ──────────────────────────────────────────────────────────────────

function formatDate(ts: bigint): string {
  const ms = Number(ts / 1_000_000n);
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function FileIcon({ type, className }: { type: FileType; className?: string }) {
  return type === FileType.PDF ? (
    <FileText className={cn("text-primary", className)} />
  ) : (
    <Image className={cn("text-success", className)} />
  );
}

// ─── skeleton ─────────────────────────────────────────────────────────────────

function DocumentSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="card-glass flex gap-4 items-start">
          <Skeleton className="w-12 h-12 rounded-xl shrink-0" />
          <div className="flex-1 space-y-2 py-1">
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-3 w-1/3" />
            <Skeleton className="h-3 w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── empty state ──────────────────────────────────────────────────────────────

function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center justify-center py-20 gap-6 text-center"
      data-ocid="documents.empty_state"
    >
      <div className="p-6 rounded-full glass-elevated">
        <Paperclip className="w-12 h-12 text-primary opacity-80" />
      </div>
      <div>
        <h3 className="text-xl font-display font-bold text-foreground mb-2">
          No papers added yet
        </h3>
        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
          Keep all your important papers — Aadhaar, PAN, Passport and more —
          safely in one place.
        </p>
      </div>
      <button
        type="button"
        className="flex items-center gap-2 button-primary px-6 py-3 rounded-2xl"
        onClick={onAdd}
        data-ocid="documents.add_button"
      >
        <Plus className="w-4 h-4" />
        <span className="font-semibold text-sm">Add Paper</span>
      </button>
    </motion.div>
  );
}

// ─── view modal ───────────────────────────────────────────────────────────────

function ViewDocumentModal({
  doc,
  onClose,
}: {
  doc: Document;
  onClose: () => void;
}) {
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="glass-elevated border-border/30 max-w-sm"
        data-ocid="documents.dialog"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 font-display text-lg">
            <div className="p-2 rounded-xl bg-primary/10">
              <FileIcon type={doc.fileType} className="w-5 h-5" />
            </div>
            {doc.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-1">
          <InfoRow label="Category" value={doc.category} />
          <InfoRow
            label="Type"
            value={
              doc.fileType === FileType.PDF ? "PDF Document" : "Image / Photo"
            }
          />
          <InfoRow label="Added on" value={formatDate(doc.uploadDate)} />
          {doc.description ? (
            <InfoRow label="Notes" value={doc.description} />
          ) : null}
        </div>
        <Button
          variant="outline"
          className="w-full mt-3"
          onClick={onClose}
          data-ocid="documents.close_button"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
        {label}
      </span>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  );
}

// ─── add paper modal ──────────────────────────────────────────────────────────

interface AddPaperForm {
  title: string;
  category: string;
  fileType: FileType;
  description: string;
}

function AddPaperModal({ onClose }: { onClose: () => void }) {
  const addDocument = useAddDocument();
  const [form, setForm] = useState<AddPaperForm>({
    title: "",
    category: "",
    fileType: FileType.PDF,
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.category.trim()) {
      toast.error("Please fill in the title and category.");
      return;
    }
    try {
      await addDocument.mutateAsync({
        title: form.title.trim(),
        category: form.category.trim(),
        fileType: form.fileType,
        description: form.description.trim(),
      });
      toast.success("Paper added successfully!");
      onClose();
    } catch {
      toast.error("Could not add paper. Please try again.");
    }
  };

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="glass-elevated border-border/30 max-w-sm"
        data-ocid="documents.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2 text-lg">
            <Plus className="w-5 h-5 text-primary" />
            Add a Paper
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4 pt-1">
          <div className="space-y-1.5">
            <Label
              htmlFor="doc-title"
              className="text-xs text-muted-foreground"
            >
              Title
            </Label>
            <Input
              id="doc-title"
              placeholder="e.g. My Aadhaar Card"
              value={form.title}
              onChange={(e) =>
                setForm((f) => ({ ...f, title: e.target.value }))
              }
              className="glass border-border/30 text-sm"
              data-ocid="documents.title.input"
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label
              htmlFor="doc-category"
              className="text-xs text-muted-foreground"
            >
              Category
            </Label>
            <Input
              id="doc-category"
              placeholder="e.g. Identity, Finance, Travel"
              value={form.category}
              onChange={(e) =>
                setForm((f) => ({ ...f, category: e.target.value }))
              }
              className="glass border-border/30 text-sm"
              data-ocid="documents.category.input"
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">File Type</Label>
            <Select
              value={form.fileType}
              onValueChange={(v) =>
                setForm((f) => ({ ...f, fileType: v as FileType }))
              }
            >
              <SelectTrigger
                className="glass border-border/30 text-sm"
                data-ocid="documents.filetype.select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-elevated border-border/20">
                <SelectItem value={FileType.PDF}>PDF Document</SelectItem>
                <SelectItem value={FileType.Image}>Image / Photo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="doc-desc" className="text-xs text-muted-foreground">
              Notes (optional)
            </Label>
            <Textarea
              id="doc-desc"
              placeholder="Any extra info about this paper..."
              value={form.description}
              onChange={(e) =>
                setForm((f) => ({ ...f, description: e.target.value }))
              }
              rows={3}
              className="glass border-border/30 text-sm resize-none"
              data-ocid="documents.description.textarea"
            />
          </div>
          <div className="flex gap-2 pt-1">
            <Button
              type="button"
              variant="ghost"
              className="flex-1 glass h-10 text-sm"
              onClick={onClose}
              data-ocid="documents.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 button-primary h-10 text-sm"
              disabled={addDocument.isPending}
              data-ocid="documents.submit_button"
            >
              {addDocument.isPending ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                  Saving…
                </span>
              ) : (
                "Save Paper"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── document card ────────────────────────────────────────────────────────────

function DocumentCard({
  doc,
  index,
  onView,
}: {
  doc: Document;
  index: number;
  onView: (doc: Document) => void;
}) {
  const deleteDocument = useDeleteDocument();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteDocument.mutateAsync(doc.docId);
      toast.success(`"${doc.title}" removed.`);
    } catch {
      toast.error("Could not remove paper. Please try again.");
    }
    setConfirmDelete(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{
        delay: index * 0.07,
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      }}
      data-ocid={`documents.item.${index + 1}`}
    >
      <GlassCard className="flex gap-4 items-start">
        {/* icon */}
        <div className="p-3 rounded-xl bg-primary/10 shrink-0 mt-0.5">
          <FileIcon type={doc.fileType} className="w-6 h-6" />
        </div>

        {/* content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-foreground truncate text-base leading-snug mb-1">
            {doc.title}
          </h3>
          <div className="flex flex-wrap gap-2 items-center mb-2.5">
            <span className="badge-not-linked">{doc.category}</span>
            <span className="text-xs text-muted-foreground">
              Added on {formatDate(doc.uploadDate)}
            </span>
          </div>

          {/* actions / delete confirm */}
          <AnimatePresence mode="wait">
            {confirmDelete ? (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-2 overflow-hidden"
              >
                <span className="text-xs text-destructive font-medium">
                  Remove this paper?
                </span>
                <button
                  type="button"
                  className="text-xs px-2.5 py-1 rounded-lg bg-destructive/10 text-destructive font-semibold transition-smooth hover:bg-destructive/20"
                  onClick={() => void handleDelete()}
                  disabled={deleteDocument.isPending}
                  data-ocid={`documents.confirm_button.${index + 1}`}
                >
                  {deleteDocument.isPending ? "Removing…" : "Yes, Remove"}
                </button>
                <button
                  type="button"
                  className="text-xs px-2.5 py-1 rounded-lg bg-muted/50 text-muted-foreground font-semibold transition-smooth hover:bg-muted"
                  onClick={() => setConfirmDelete(false)}
                  data-ocid={`documents.cancel_delete.${index + 1}`}
                >
                  Cancel
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="actions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex gap-2"
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-semibold transition-smooth hover:bg-primary/20"
                  onClick={() => onView(doc)}
                  data-ocid={`documents.view_button.${index + 1}`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  View
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive font-semibold transition-smooth hover:bg-destructive/20"
                  onClick={() => setConfirmDelete(true)}
                  data-ocid={`documents.delete_button.${index + 1}`}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Remove
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── grouped list ─────────────────────────────────────────────────────────────

function DocumentList({
  docs,
  onView,
}: {
  docs: Document[];
  onView: (doc: Document) => void;
}) {
  const grouped = useMemo(() => {
    if (docs.length < 3) return null;
    const map = new Map<string, Document[]>();
    for (const doc of docs) {
      const key = doc.category || "Other";
      const arr = map.get(key) ?? [];
      arr.push(doc);
      map.set(key, arr);
    }
    return map;
  }, [docs]);

  if (!grouped) {
    return (
      <div className="space-y-3">
        <AnimatePresence>
          {docs.map((doc, i) => (
            <DocumentCard
              key={doc.docId.toString()}
              doc={doc}
              index={i}
              onView={onView}
            />
          ))}
        </AnimatePresence>
      </div>
    );
  }

  let globalIndex = 0;
  return (
    <div className="space-y-6">
      {[...grouped.entries()].map(([category, catDocs]) => (
        <section key={category}>
          <h2 className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-3 px-1">
            {category}
          </h2>
          <div className="space-y-3">
            <AnimatePresence>
              {catDocs.map((doc) => {
                const idx = globalIndex++;
                return (
                  <DocumentCard
                    key={doc.docId.toString()}
                    doc={doc}
                    index={idx}
                    onView={onView}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </section>
      ))}
    </div>
  );
}

// ─── main page ────────────────────────────────────────────────────────────────

export function DocumentsPage() {
  const { data: docs, isLoading } = useUserDocuments();
  const [viewDoc, setViewDoc] = useState<Document | null>(null);
  const [showAdd, setShowAdd] = useState(false);

  const documents = docs ?? [];
  const hasDocuments = documents.length > 0;

  return (
    <Layout>
      <div
        className="relative min-h-[calc(100vh-10rem)]"
        data-ocid="documents.page"
      >
        {/* Page header */}
        <div className="px-4 pt-5 pb-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-start justify-between gap-3"
          >
            <div>
              <h1 className="text-2xl font-display font-bold text-gradient leading-tight">
                My Papers
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                All your important documents in one place
              </p>
            </div>
            {hasDocuments && (
              <button
                type="button"
                className="flex items-center gap-1.5 button-primary px-4 py-2 rounded-xl text-sm shrink-0"
                onClick={() => setShowAdd(true)}
                data-ocid="documents.add_button"
              >
                <Plus className="w-4 h-4" />
                Add Paper
              </button>
            )}
          </motion.div>
          {hasDocuments && (
            <p className="text-xs text-muted-foreground mt-3">
              {documents.length} paper{documents.length !== 1 ? "s" : ""} saved
            </p>
          )}
        </div>

        {/* Content */}
        <div className="px-4 pb-8">
          {isLoading ? (
            <DocumentSkeleton />
          ) : !hasDocuments ? (
            <EmptyState onAdd={() => setShowAdd(true)} />
          ) : (
            <DocumentList docs={documents} onView={setViewDoc} />
          )}
        </div>

        {/* Floating Add Button (visible on scroll when list is long) */}
        {hasDocuments && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="fixed bottom-24 right-4 z-40"
          >
            <button
              type="button"
              onClick={() => setShowAdd(true)}
              className="w-14 h-14 rounded-full button-primary flex items-center justify-center shadow-glass-hover"
              aria-label="Add Paper"
              data-ocid="documents.fab_button"
            >
              <Plus className="w-6 h-6" />
            </button>
          </motion.div>
        )}

        {/* Modals */}
        <AnimatePresence>
          {viewDoc && (
            <ViewDocumentModal doc={viewDoc} onClose={() => setViewDoc(null)} />
          )}
          {showAdd && <AddPaperModal onClose={() => setShowAdd(false)} />}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
