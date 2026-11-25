"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Sheet({ open, onOpenChange, title, description, children }: SheetProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-navy-900/45 transition-opacity" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 z-50 max-h-[92vh] overflow-y-auto rounded-t-[24px] border-t border-line bg-foam p-5 shadow-[0_-8px_30px_rgba(11,34,54,0.14)] sm:inset-y-0 sm:right-0 sm:left-auto sm:max-h-none sm:w-full sm:max-w-[520px] sm:rounded-none sm:rounded-l-[24px] sm:border-t-0 sm:border-l sm:p-8">
          <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
            <div>
              <Dialog.Title className="font-display text-2xl font-semibold text-navy-700">
                {title}
              </Dialog.Title>
              {description ? (
                <Dialog.Description className="mt-1 text-sm text-navy-500">
                  {description}
                </Dialog.Description>
              ) : null}
            </div>
            <Dialog.Close
              aria-label="Close"
              className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line text-xl font-semibold text-navy-700 transition-colors hover:bg-sand"
            >
              ×
            </Dialog.Close>
          </div>
          <div className="pt-5">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
