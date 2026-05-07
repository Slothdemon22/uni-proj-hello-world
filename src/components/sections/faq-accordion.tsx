"use client";

import { MinusIcon, PlusIcon } from "@/icons/icons";
import { useState } from "react";

// Define the FAQ item type
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What industries do you work with?",
      answer:
        "We build AI-enabled solutions for manufacturing and industrial operations, including facilities that need safety monitoring, process compliance, and real-time operational visibility.",
    },
    {
      id: 2,
      question: "Can Nexvect work with our existing cameras and sensors?",
      answer:
        "Yes. We can integrate with common CCTV/RTSP camera setups and IoT/PLC data sources. During discovery we map your available signals and define what can be inferred reliably.",
    },
    {
      id: 3,
      question: "How long does a pilot take?",
      answer:
        "Most pilots take 2–6 weeks depending on scope. We start with one or two high-impact use cases, validate accuracy and workflows, then expand to additional lines/areas.",
    },
    {
      id: 4,
      question: "Do you deploy on-premise?",
      answer:
        "Yes. We support on-prem, hybrid, and cloud deployments depending on your security and latency requirements.",
    },
    {
      id: 5,
      question: "How do we get started?",
      answer:
        "Book a demo from the Contact page. We’ll align on goals, confirm feasibility on your environment, and propose a pilot plan with clear success criteria.",
    },
  ];

  const toggleItem = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <section id="faq" className="py-14 md:py-28 dark:bg-[#171f2e]">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
            Frequently Asked Questions
          </h2>
          <p className="max-w-md mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Still have questions? Reach out and we’ll help scope the right solution.
          </p>
        </div>
        <div className="max-w-[600px] mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FAQItem({
  item,
  isActive,
  onToggle,
}: {
  item: FAQItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-lg font-medium text-gray-800 dark:text-white/90">
          {item.question}
        </span>
        <span className="flex-shrink-0 ml-6">
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isActive && (
        <div className="mt-5">
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}
