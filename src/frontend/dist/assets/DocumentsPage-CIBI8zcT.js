import { j as jsxRuntimeExports, r as reactExports } from "./index-Df2_gRtF.js";
import { d as cn, e as useUserDocuments, L as Layout, A as AnimatePresence, S as Skeleton, f as FileType, B as Button, g as useAddDocument, h as useDeleteDocument, G as GlassCard, F as FileText } from "./useUserData-BHdIPNft.js";
import { D as Dialog, b as DialogContent, c as DialogHeader, d as DialogTitle, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem } from "./select-BIxjHNE4.js";
import { I as Input } from "./input-C-hblGmk.js";
import { L as Label } from "./index-Dbu9-03F.js";
import { u as ue } from "./index-DWtJgJU7.js";
import { c as createLucideIcon, m as motion } from "./proxy-kn6nNkwE.js";
import "./x-CcGd-R1l.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = createLucideIcon("image", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M13.234 20.252 21 12.3", key: "1cbrk9" }],
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",
      key: "1pkts6"
    }
  ]
];
const Paperclip = createLucideIcon("paperclip", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
function formatDate(ts) {
  const ms = Number(ts / 1000000n);
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}
function FileIcon({ type, className }) {
  return type === FileType.PDF ? /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: cn("text-primary", className) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: cn("text-success", className) });
}
function DocumentSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-glass flex gap-4 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-12 h-12 rounded-xl shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2 py-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/4" })
    ] })
  ] }, i)) });
}
function EmptyState({ onAdd }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
      className: "flex flex-col items-center justify-center py-20 gap-6 text-center",
      "data-ocid": "documents.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 rounded-full glass-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "w-12 h-12 text-primary opacity-80" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-2", children: "No papers added yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs leading-relaxed", children: "Keep all your important papers — Aadhaar, PAN, Passport and more — safely in one place." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "flex items-center gap-2 button-primary px-6 py-3 rounded-2xl",
            onClick: onAdd,
            "data-ocid": "documents.add_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: "Add Paper" })
            ]
          }
        )
      ]
    }
  );
}
function ViewDocumentModal({
  doc,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "glass-elevated border-border/30 max-w-sm",
      "data-ocid": "documents.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-3 font-display text-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-xl bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileIcon, { type: doc.fileType, className: "w-5 h-5" }) }),
          doc.title
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Category", value: doc.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            InfoRow,
            {
              label: "Type",
              value: doc.fileType === FileType.PDF ? "PDF Document" : "Image / Photo"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Added on", value: formatDate(doc.uploadDate) }),
          doc.description ? /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Notes", value: doc.description }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            className: "w-full mt-3",
            onClick: onClose,
            "data-ocid": "documents.close_button",
            children: "Close"
          }
        )
      ]
    }
  ) });
}
function InfoRow({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-semibold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: value })
  ] });
}
function AddPaperModal({ onClose }) {
  const addDocument = useAddDocument();
  const [form, setForm] = reactExports.useState({
    title: "",
    category: "",
    fileType: FileType.PDF,
    description: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.category.trim()) {
      ue.error("Please fill in the title and category.");
      return;
    }
    try {
      await addDocument.mutateAsync({
        title: form.title.trim(),
        category: form.category.trim(),
        fileType: form.fileType,
        description: form.description.trim()
      });
      ue.success("Paper added successfully!");
      onClose();
    } catch {
      ue.error("Could not add paper. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "glass-elevated border-border/30 max-w-sm",
      "data-ocid": "documents.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display flex items-center gap-2 text-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5 text-primary" }),
          "Add a Paper"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => void handleSubmit(e), className: "space-y-4 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "doc-title",
                className: "text-xs text-muted-foreground",
                children: "Title"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "doc-title",
                placeholder: "e.g. My Aadhaar Card",
                value: form.title,
                onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })),
                className: "glass border-border/30 text-sm",
                "data-ocid": "documents.title.input",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "doc-category",
                className: "text-xs text-muted-foreground",
                children: "Category"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "doc-category",
                placeholder: "e.g. Identity, Finance, Travel",
                value: form.category,
                onChange: (e) => setForm((f) => ({ ...f, category: e.target.value })),
                className: "glass border-border/30 text-sm",
                "data-ocid": "documents.category.input",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "File Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.fileType,
                onValueChange: (v) => setForm((f) => ({ ...f, fileType: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "glass border-border/30 text-sm",
                      "data-ocid": "documents.filetype.select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "glass-elevated border-border/20", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: FileType.PDF, children: "PDF Document" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: FileType.Image, children: "Image / Photo" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "doc-desc", className: "text-xs text-muted-foreground", children: "Notes (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "doc-desc",
                placeholder: "Any extra info about this paper...",
                value: form.description,
                onChange: (e) => setForm((f) => ({ ...f, description: e.target.value })),
                rows: 3,
                className: "glass border-border/30 text-sm resize-none",
                "data-ocid": "documents.description.textarea"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                className: "flex-1 glass h-10 text-sm",
                onClick: onClose,
                "data-ocid": "documents.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "flex-1 button-primary h-10 text-sm",
                disabled: addDocument.isPending,
                "data-ocid": "documents.submit_button",
                children: addDocument.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" }),
                  "Saving…"
                ] }) : "Save Paper"
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
function DocumentCard({
  doc,
  index,
  onView
}) {
  const deleteDocument = useDeleteDocument();
  const [confirmDelete, setConfirmDelete] = reactExports.useState(false);
  const handleDelete = async () => {
    try {
      await deleteDocument.mutateAsync(doc.docId);
      ue.success(`"${doc.title}" removed.`);
    } catch {
      ue.error("Could not remove paper. Please try again.");
    }
    setConfirmDelete(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, x: -24 },
      transition: {
        delay: index * 0.07,
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1]
      },
      "data-ocid": `documents.item.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "flex gap-4 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-primary/10 shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileIcon, { type: doc.fileType, className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground truncate text-base leading-snug mb-1", children: doc.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center mb-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-not-linked", children: doc.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "Added on ",
              formatDate(doc.uploadDate)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: confirmDelete ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              className: "flex items-center gap-2 overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-destructive font-medium", children: "Remove this paper?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "text-xs px-2.5 py-1 rounded-lg bg-destructive/10 text-destructive font-semibold transition-smooth hover:bg-destructive/20",
                    onClick: () => void handleDelete(),
                    disabled: deleteDocument.isPending,
                    "data-ocid": `documents.confirm_button.${index + 1}`,
                    children: deleteDocument.isPending ? "Removing…" : "Yes, Remove"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "text-xs px-2.5 py-1 rounded-lg bg-muted/50 text-muted-foreground font-semibold transition-smooth hover:bg-muted",
                    onClick: () => setConfirmDelete(false),
                    "data-ocid": `documents.cancel_delete.${index + 1}`,
                    children: "Cancel"
                  }
                )
              ]
            },
            "confirm"
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "flex gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-semibold transition-smooth hover:bg-primary/20",
                    onClick: () => onView(doc),
                    "data-ocid": `documents.view_button.${index + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" }),
                      "View"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive font-semibold transition-smooth hover:bg-destructive/20",
                    onClick: () => setConfirmDelete(true),
                    "data-ocid": `documents.delete_button.${index + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                      "Remove"
                    ]
                  }
                )
              ]
            },
            "actions"
          ) })
        ] })
      ] })
    }
  );
}
function DocumentList({
  docs,
  onView
}) {
  const grouped = reactExports.useMemo(() => {
    if (docs.length < 3) return null;
    const map = /* @__PURE__ */ new Map();
    for (const doc of docs) {
      const key = doc.category || "Other";
      const arr = map.get(key) ?? [];
      arr.push(doc);
      map.set(key, arr);
    }
    return map;
  }, [docs]);
  if (!grouped) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: docs.map((doc, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      DocumentCard,
      {
        doc,
        index: i,
        onView
      },
      doc.docId.toString()
    )) }) });
  }
  let globalIndex = 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: [...grouped.entries()].map(([category, catDocs]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-3 px-1", children: category }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: catDocs.map((doc) => {
      const idx = globalIndex++;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        DocumentCard,
        {
          doc,
          index: idx,
          onView
        },
        doc.docId.toString()
      );
    }) }) })
  ] }, category)) });
}
function DocumentsPage() {
  const { data: docs, isLoading } = useUserDocuments();
  const [viewDoc, setViewDoc] = reactExports.useState(null);
  const [showAdd, setShowAdd] = reactExports.useState(false);
  const documents = docs ?? [];
  const hasDocuments = documents.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative min-h-[calc(100vh-10rem)]",
      "data-ocid": "documents.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.4 },
              className: "flex items-start justify-between gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-gradient leading-tight", children: "My Papers" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "All your important documents in one place" })
                ] }),
                hasDocuments && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "flex items-center gap-1.5 button-primary px-4 py-2 rounded-xl text-sm shrink-0",
                    onClick: () => setShowAdd(true),
                    "data-ocid": "documents.add_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                      "Add Paper"
                    ]
                  }
                )
              ]
            }
          ),
          hasDocuments && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-3", children: [
            documents.length,
            " paper",
            documents.length !== 1 ? "s" : "",
            " saved"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-8", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentSkeleton, {}) : !hasDocuments ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { onAdd: () => setShowAdd(true) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentList, { docs: documents, onView: setViewDoc }) }),
        hasDocuments && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: {
              delay: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 20
            },
            className: "fixed bottom-24 right-4 z-40",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowAdd(true),
                className: "w-14 h-14 rounded-full button-primary flex items-center justify-center shadow-glass-hover",
                "aria-label": "Add Paper",
                "data-ocid": "documents.fab_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-6 h-6" })
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { children: [
          viewDoc && /* @__PURE__ */ jsxRuntimeExports.jsx(ViewDocumentModal, { doc: viewDoc, onClose: () => setViewDoc(null) }),
          showAdd && /* @__PURE__ */ jsxRuntimeExports.jsx(AddPaperModal, { onClose: () => setShowAdd(false) })
        ] })
      ]
    }
  ) });
}
export {
  DocumentsPage
};
