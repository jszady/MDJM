"use client";

import Link from "next/link";
import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { ArticleInlineCta } from "@/components/blog/article-inline-cta";
import { QuoteCallout } from "@/components/blog/quote-callout";
import { HighlightPanel } from "@/components/blog/highlight-panel";
import { SectionDivider } from "@/components/blog/section-divider";
import type { ContentBlock } from "@/data/blog-content";

type ArticleContentProps = {
  blocks: ContentBlock[];
  /** When true, inserts a mid-article CTA before the block at `midArticleCtaInsertBeforeIndex`. */
  showMidArticleCta?: boolean;
  /** Insert CTA before this index (defaults to ~40% through the block list). */
  midArticleCtaInsertBeforeIndex?: number;
};

/** Renders `[label](/path)` as internal `<Link>`; other text unchanged. */
function renderParagraphWithLinks(text: string): ReactNode {
  const re = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      out.push(text.slice(last, m.index));
    }
    out.push(
      <Link
        key={`inl-${key++}`}
        href={m[2]}
        className="font-medium text-[#ffd700] underline decoration-[#2563eb]/40 underline-offset-[3px] transition hover:text-white hover:decoration-[#ffd700]/70"
      >
        {m[1]}
      </Link>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    out.push(text.slice(last));
  }
  return out.length ? out : text;
}

function BlockReveal({
  children,
  delay = 0,
  reduceMotion = false
}: {
  children: React.ReactNode;
  delay?: number;
  reduceMotion?: boolean;
}) {
  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function ArticleContent({
  blocks,
  showMidArticleCta = true,
  midArticleCtaInsertBeforeIndex: midOverride
}: ArticleContentProps) {
  const reduceMotion = useReducedMotion();
  let sectionIndex = 0;

  const rawMid =
    midOverride ?? Math.max(2, Math.min(Math.floor(blocks.length * 0.4), Math.max(2, blocks.length - 1)));
  const insertBefore = Math.min(rawMid, Math.max(2, blocks.length - 1));
  const showMid = showMidArticleCta && blocks.length >= 3;

  return (
    <div className="article-content max-w-[65ch]">
      {blocks.map((block, index) => {
        const wrap = (node: ReactNode) => (
          <Fragment key={index}>
            {showMid && insertBefore === index ? <ArticleInlineCta variant="mid" /> : null}
            {node}
          </Fragment>
        );

        if (block.type === "paragraph") {
          return wrap(
            <BlockReveal delay={index * 0.02} reduceMotion={!!reduceMotion}>
              <p className="mt-7 text-[17px] leading-[1.85] text-slate-300 first:mt-0 sm:text-lg sm:leading-[1.9]">
                {renderParagraphWithLinks(block.text)}
              </p>
            </BlockReveal>
          );
        }

        if (block.type === "heading2") {
          const showDivider = sectionIndex > 0;
          sectionIndex++;
          return wrap(
            <BlockReveal reduceMotion={!!reduceMotion}>
              {showDivider ? <SectionDivider /> : null}
              <h2 className="article-heading2 mt-14 pt-2 text-2xl font-semibold tracking-tight first:mt-0 sm:text-[1.75rem]">
                <span className="article-heading2-gradient">{block.text}</span>
                <span className="article-heading2-underline" />
              </h2>
            </BlockReveal>
          );
        }

        if (block.type === "list") {
          return wrap(
            <BlockReveal delay={index * 0.02} reduceMotion={!!reduceMotion}>
              <ul className="article-list mt-6 space-y-4 pl-0 sm:mt-7">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffd700]"
                      aria-hidden
                    />
                    <span className="text-[17px] leading-[1.85] text-slate-200 sm:text-lg sm:leading-[1.9]">
                      {renderParagraphWithLinks(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </BlockReveal>
          );
        }

        if (block.type === "quote") {
          return wrap(
            <BlockReveal reduceMotion={!!reduceMotion}>
              <QuoteCallout>{block.text}</QuoteCallout>
            </BlockReveal>
          );
        }

        if (block.type === "highlight") {
          return wrap(
            <BlockReveal reduceMotion={!!reduceMotion}>
              <HighlightPanel>{block.text}</HighlightPanel>
            </BlockReveal>
          );
        }

        if (block.type === "image") {
          return wrap(
            <BlockReveal reduceMotion={!!reduceMotion}>
              <figure className="article-image-slot my-10 overflow-hidden rounded-xl border border-white/10">
                {block.src ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={block.src}
                    alt={block.alt}
                    className="aspect-video w-full object-cover"
                  />
                ) : (
                  <div className="aspect-video bg-slate-900/80" />
                )}
                {block.caption ? (
                  <figcaption className="mt-4 px-6 pb-6 text-center text-sm text-slate-400">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            </BlockReveal>
          );
        }

        return null;
      })}
    </div>
  );
}
