"use client";

import { FormEvent, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AiSidebar } from "@/app/slim-possible-ai/components/ai-sidebar";
import { slimPossibleAiData } from "@/data/slim-possible-ai";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

export function AiChat() {
  const { placeholder, suggestions, replies, fallbackReply } =
    slimPossibleAiData.chat;
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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
        const reply = replies[text] ?? fallbackReply;
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
    [fallbackReply, isTyping, replies],
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="relative flex min-h-dvh bg-linear-to-b from-[#f3c9b8] via-[#e0c0d4] to-[#b89ad0]">
      <AiSidebar />

      <div className="relative flex min-h-dvh flex-1 flex-col px-4 pb-6 pt-24 sm:px-6 md:px-10 lg:px-12 lg:pt-10">
        <div className="mx-auto flex w-full max-w-xl flex-1 flex-col md:max-w-2xl">
          <div className="flex-1 overflow-y-auto pr-1">
            <AnimatePresence mode="popLayout">
              {messages.length === 0 ? (
                <motion.div
                  key="suggestions"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mx-auto flex w-full max-w-md flex-col items-start gap-3 pt-4 md:max-w-lg md:gap-3.5 md:pt-10"
                >
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      className="w-fit max-w-full rounded-full bg-white px-5 py-3 text-left text-sm text-zinc-900 shadow-sm transition hover:bg-white/90 md:px-6 md:py-3.5 md:text-base"
                    >
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="thread"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col gap-3 pt-2 md:gap-3.5 md:pt-6"
                >
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`w-fit max-w-[92%] rounded-2xl px-5 py-3 text-sm leading-relaxed md:text-base ${
                        message.role === "user"
                          ? "ml-auto bg-brand-blue text-white"
                          : "bg-white text-zinc-900 shadow-sm"
                      }`}
                    >
                      {message.text}
                    </div>
                  ))}

                  {isTyping ? (
                    <div className="flex w-fit items-center gap-1.5 rounded-2xl bg-white px-5 py-3.5 shadow-sm">
                      <span className="size-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:0ms]" />
                      <span className="size-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:150ms]" />
                      <span className="size-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:300ms]" />
                    </div>
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-6 flex items-center gap-2 rounded-full bg-[#d7e6f4] px-4 py-2.5 shadow-sm md:mt-8 md:px-5 md:py-3"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder={placeholder}
              className="min-w-0 flex-1 bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-500 md:text-base"
              aria-label="Ask SlimPossible AI"
            />
            <button
              type="submit"
              disabled={isTyping || !inputValue.trim()}
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white transition enabled:hover:brightness-110 disabled:opacity-50 md:size-12"
              aria-label="Send message"
            >
              <ArrowRight className="size-5 md:size-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
