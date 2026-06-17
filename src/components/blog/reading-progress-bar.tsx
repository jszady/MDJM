"use client";

import { useEffect, useState } from "react";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const article = document.querySelector("article[data-article-content]");
    if (!article) return;

    const updateProgress = () => {
      const rect = article.getBoundingClientRect();
      const articleTop = rect.top + window.scrollY;
      const articleHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      if (scrollTop + viewportHeight < articleTop) {
        setProgress(0);
        return;
      }
      if (scrollTop > articleTop + articleHeight) {
        setProgress(100);
        return;
      }

      const scrolled = scrollTop + viewportHeight - articleTop;
      const total = articleHeight + viewportHeight;
      setProgress(Math.min(100, Math.max(0, (scrolled / total) * 100)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed left-0 right-0 top-0 z-40 h-0.5"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="h-full bg-gradient-to-r from-[#e91e8c] via-[#ffd700] to-[#2563eb] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
