import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";

type ArticleFooterProps = {
  title: string;
  slug: string;
};

function ShareIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black text-slate-400 transition duration-200 hover:border-[#ffd700]/50 hover:text-[#ffd700]"
    >
      {children}
    </a>
  );
}

export function ArticleFooter({ title, slug }: ArticleFooterProps) {
  const url = absoluteUrl(`/blog/${slug}`);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <footer className="article-footer theme-card relative mt-16 overflow-hidden rounded-xl px-6 py-8 sm:px-8 sm:py-10">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
            Author
          </p>
          <p className="mt-2 font-medium text-slate-200">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-slate-400">{siteConfig.shortDescription}</p>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
            Share
          </p>
          <div className="flex gap-3">
            <ShareIcon
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              label="Share on X"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </ShareIcon>
            <ShareIcon
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              label="Share on LinkedIn"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </ShareIcon>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white/8 pt-8">
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/blog">View all insights</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Start a project
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}
