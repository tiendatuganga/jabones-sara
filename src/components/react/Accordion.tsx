import { useId, useState } from "react";

export interface AccordionItem {
  title: string;
  summary?: string;
  content?: string;
  list?: string[];
}

interface Props {
  items: AccordionItem[];
  /** Índice abierto al cargar (-1 = todos cerrados). */
  defaultOpen?: number;
}

export default function Accordion({ items, defaultOpen = -1 }: Props) {
  const baseId = useId();
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div className="divide-y divide-sage-200 overflow-hidden rounded-3xl border border-sage-200 bg-white shadow-sm">
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-btn-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.title}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-cream-50 sm:px-7"
              >
                <span>
                  <span className="block font-display text-lg font-bold text-ink sm:text-xl">{item.title}</span>
                  {item.summary && <span className="mt-1 block text-sm text-ink-soft sm:text-base">{item.summary}</span>}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M10 3a.75.75 0 0 1 .75.75v5.5h5.5a.75.75 0 0 1 0 1.5h-5.5v5.5a.75.75 0 0 1-1.5 0v-5.5h-5.5a.75.75 0 0 1 0-1.5h5.5v-5.5A.75.75 0 0 1 10 3Z" />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-6 text-ink-soft sm:px-7">
                  {item.content && <p className="leading-relaxed">{item.content}</p>}
                  {item.list && (
                    <ul className="space-y-2.5">
                      {item.list.map((entry) => (
                        <li key={entry} className="flex gap-3">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-sage-500" aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.79 6.8-6.8a1 1 0 0 1 1.4 0Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{entry}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
