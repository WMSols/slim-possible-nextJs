import Image from "next/image";
import { FadeUpView } from "@/components/animations/fade-up-view";
import { AiChatWidget } from "@/components/shared/ai-chat-widget";
import { slimPossibleAiData } from "@/data/slim-possible-ai";

export function AiLanding() {
  const { title, subtitle } = slimPossibleAiData.landing;

  return (
    <section className="relative min-h-dvh overflow-hidden bg-linear-to-br from-[#9b7bb8] via-[#c9a8c4] to-[#f0c4b0]">
      <div className="absolute inset-0 bg-black/30"></div>
      <Image
        src="/images/slim-ai-mobile.png"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover object-center md:hidden"
        sizes="100vw"
      />
      <Image
        src="/images/slim-ai.png"
        alt=""
        fill
        className="pointer-events-none hidden object-cover object-center md:block"
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full flex-col justify-center px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:justify-center lg:px-14 lg:pb-24">
        <FadeUpView className="relative z-10 sm:ml-4 ">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl 2xl:text-8xl text-shadow-md">
            {title}
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/95 md:mt-5 md:text-lg lg:text-xl">
            {subtitle}
          </p>
        </FadeUpView>
      </div>

      <AiChatWidget />
    </section>
  );
}
