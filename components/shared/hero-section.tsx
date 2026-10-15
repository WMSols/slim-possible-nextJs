"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, X } from "lucide-react";
import { UniversalButton } from "@/components/shared/universal-button";

export type HeroDisclaimer = {
  title: string;
  body: string;
};

export type HeroSectionProps = {
  title: string;
  backgroundImage: string;
  subtitle?: string;
  subtitleHighlights?: string[];
  isSupport?: boolean;
  isHome?: boolean;
  showExplore?: boolean;
  exploreText?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  ctaText?: string;
  ctaLink?: string;
  shopCgmHref?: string;
  shopCgmLabel?: string;
  shopCgmMessage?: string;
  disclaimer?: HeroDisclaimer;
  aiSuggestions?: string[];
  aiReplies?: Record<string, string>;
  aiFallbackReply?: string;
  aiPlaceholder?: string;
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

function highlightSubtitle(text: string, highlights: string[] = []) {
  if (!highlights.length) return text;

  const pattern = new RegExp(
    `(${highlights.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isHighlight = highlights.some(
      (word) => word.toLowerCase() === part.toLowerCase(),
    );

    if (!isHighlight) return <span key={`${part}-${index}`}>{part}</span>;

    return (
      <span key={`${part}-${index}`} className="text-brand-purple-light">
        {part}
      </span>
    );
  });
}

export function HeroSection({
  title,
  backgroundImage,
  subtitle,
  subtitleHighlights = [],
  isSupport = false,
  isHome = false,
  showExplore = false,
  exploreText,
  titleClassName = "",
  subTitleClassName = "",
  ctaText,
  ctaLink = "#",
  shopCgmHref = "#",
  shopCgmLabel = "Shop CGM",
  shopCgmMessage = "Monitor your glucose 24/7 with Sibionics",
  disclaimer,
  aiSuggestions = [],
  aiReplies = {},
  aiFallbackReply = "Thanks for your question. This is general information, not a diagnosis.",
  aiPlaceholder = "Type a symptom, concern, or health question…",
}: HeroSectionProps) {
  const [toastOpen, setToastOpen] = useState(Boolean(disclaimer));
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const alignClass = isSupport
    ? "items-start text-left"
    : isHome
      ? "items-start text-left lg:items-start"
      : "items-center text-center";

  const sendMessage = useCallback(
    (rawText: string) => {
      const text = rawText.trim();
      if (!text || isTyping) return;

      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        text,
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");
      setIsTyping(true);

      window.setTimeout(() => {
        const reply = aiReplies[text] ?? aiFallbackReply;
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            text: reply,
          },
        ]);
        setIsTyping(false);
      }, 1100);
    },
    [aiFallbackReply, aiReplies, isTyping],
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <section
      className={`relative w-full ${isHome ? "bg-brand-mint pt-0" : ""}`}
    >
      {isHome ? (
        <div className="flex items-center justify-center gap-3 bg-brand-mint px-4 py-3 text-center text-sm text-zinc-800 md:text-base">
          <span>{shopCgmMessage}</span>
          <a
            href={shopCgmHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-sm font-medium text-brand-mint-dark transition-colors hover:bg-white"
          >
            {shopCgmLabel}
            <ArrowRight className="size-3.5" aria-hidden />
          </a>
        </div>
      ) : null}

      <div
        className={`relative isolate overflow-hidden ${
          isHome
            ? "mx-2 min-h-[calc(100dvh-3.25rem)] rounded-[2rem] md:mx-3 md:rounded-[2.5rem] lg:rounded-[3rem]"
            : "min-h-dvh"
        }`}
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />

        <div
          className={`relative z-10 flex min-h-[inherit] flex-col px-5 py-10 md:px-10 lg:px-14 ${
            isHome ? "lg:py-14" : "justify-center"
          }`}
        >
          <div
            className={`flex flex-1 flex-col gap-8 ${
              isHome
                ? "lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-center lg:gap-10"
                : ""
            }`}
          >
            <div
              className={`flex max-w-3xl flex-col gap-4 md:gap-5 ${alignClass} ${
                isHome ? "mx-0 max-w-xl pt-6 lg:pt-0" : isSupport ? "" : "mx-auto"
              }`}
            >
              <h1
                className={`text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl ${titleClassName}`}
              >
                {title}
              </h1>

              {subtitle ? (
                <p
                  className={`max-w-2xl text-base leading-relaxed text-white/95 md:text-xl ${subTitleClassName}`}
                >
                  {highlightSubtitle(subtitle, subtitleHighlights)}
                </p>
              ) : null}

              {isSupport && ctaText ? (
                <div className="pt-2">
                  <UniversalButton
                    variant="orange"
                    ctaText={ctaText}
                    ctaLink={ctaLink}
                  />
                </div>
              ) : null}
            </div>

            {isHome ? (
              <div className="flex w-full justify-center lg:justify-end">
                <div className="flex w-full max-w-md flex-col overflow-hidden rounded-[1.75rem] bg-linear-to-b from-[#f7d5c8] to-[#c9b6e0] p-4 shadow-lg md:max-w-lg md:rounded-[2rem] md:p-5">
                  <div className="flex max-h-[42vh] flex-col gap-2.5 overflow-y-auto pr-1 md:max-h-[48vh]">
                    {messages.length === 0
                      ? aiSuggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            type="button"
                            onClick={() => sendMessage(suggestion)}
                            className="w-fit max-w-full rounded-full bg-white px-4 py-2.5 text-left text-sm text-zinc-800 shadow-sm transition hover:bg-white/90 md:text-base"
                          >
                            {suggestion}
                          </button>
                        ))
                      : null}

                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`w-fit max-w-[95%] rounded-2xl px-4 py-2.5 text-sm md:text-base ${
                          message.role === "user"
                            ? "ml-auto bg-brand-blue text-white"
                            : "bg-white text-zinc-800 shadow-sm"
                        }`}
                      >
                        {message.text}
                      </div>
                    ))}

                    {isTyping ? (
                      <div className="flex w-fit items-center gap-1 rounded-2xl bg-white px-4 py-3 shadow-sm">
                        <span className="size-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:0ms]" />
                        <span className="size-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:150ms]" />
                        <span className="size-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:300ms]" />
                      </div>
                    ) : null}
                  </div>

                  <form
                    onSubmit={onSubmit}
                    className="mt-4 flex items-center gap-2 rounded-2xl bg-[#dce9f5] px-3 py-2 md:px-4 md:py-2.5"
                  >
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(event) => setInputValue(event.target.value)}
                      placeholder={aiPlaceholder}
                      className="min-w-0 flex-1 bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-500 md:text-base"
                      aria-label="Ask SlimPossible AI"
                    />
                    <button
                      type="submit"
                      disabled={isTyping || !inputValue.trim()}
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white transition enabled:hover:brightness-110 disabled:opacity-50 md:size-11"
                      aria-label="Send message"
                    >
                      <ArrowRight className="size-5" />
                    </button>
                  </form>
                </div>
              </div>
            ) : null}
          </div>

          <AnimatePresence>
            {isHome && toastOpen && disclaimer ? (
              <motion.aside
                initial={{ opacity: 0, x: -48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className="absolute bottom-6 left-4 z-20 max-w-[16rem] rounded-xl bg-white p-3 shadow-md md:bottom-8 md:left-8 md:max-w-[18rem] md:p-4"
                role="status"
              >
                <button
                  type="button"
                  onClick={() => setToastOpen(false)}
                  className="absolute right-2 top-2 rounded p-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800"
                  aria-label="Dismiss disclaimer"
                >
                  <X className="size-4" />
                </button>
                <p className="pr-5 text-sm leading-snug text-zinc-900">
                  <span className="font-semibold">{disclaimer.title}</span>{" "}
                  {disclaimer.body}
                </p>
              </motion.aside>
            ) : null}
          </AnimatePresence>

          {showExplore ? (
            <div className="absolute bottom-6 right-4 z-20 flex items-center gap-3 md:bottom-8 md:right-8">
              {exploreText ? (
                <span className="text-sm text-white/90 md:text-base">
                  {exploreText}
                </span>
              ) : null}
              <Link
                href="#explore"
                className="flex size-12 items-center justify-center rounded-full border-2 border-brand-green text-brand-green transition hover:bg-brand-green/10 md:size-14"
                aria-label={exploreText || "Explore next section"}
              >
                <ArrowDown className="size-5 md:size-6" strokeWidth={2.25} />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
