"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";

export interface AccordionEntry {
  id: string;
  title: string;
  body: string;
  badge?: string;
}

interface AccordionProps {
  items: AccordionEntry[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <AccordionPrimitive.Item key={item.id} value={item.id}>
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex min-h-[52px] w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-base font-semibold text-navy-900 transition-colors hover:text-navy-700 sm:text-lg">
              <span className="flex flex-wrap items-center gap-2.5">
                <span>{item.title}</span>
                {item.badge ? (
                  <span className="rounded-full border border-chikoo/30 bg-foam px-2.5 py-0.5 text-xs font-semibold text-chikoo">
                    {item.badge}
                  </span>
                ) : null}
              </span>
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-navy-700 transition-transform duration-200 group-data-[state=open]:rotate-45"
              >
                +
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden pb-5 text-base leading-relaxed text-navy-900/90">
            <p className="max-w-[62ch]">{item.body}</p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
