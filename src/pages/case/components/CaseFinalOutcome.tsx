interface CaseFinalOutcomeProps {
  paragraphs: string[];
}

export default function CaseFinalOutcome({ paragraphs }: CaseFinalOutcomeProps) {
  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-primary-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">最终落地效果</h2>
      </div>

      <div className="mt-3 flex flex-col gap-2.5">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="rounded-card border border-primary-100 bg-primary-50/60 px-3.5 py-3 text-[13px] leading-relaxed text-foreground-700"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}