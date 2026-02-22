import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-surface/50 bg-surface/30 py-8 mt-20">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
          <span>A Why Things Project</span>
        </div>

        <p className="text-sm text-foreground/60 text-center max-w-md">
          Snap makes it easy to generate beautiful, high-quality social media
          mockups for your designs and presentations.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-surface hover:bg-surface transition-colors text-sm font-medium"
          >
            <Heart size={16} className="text-red-500" fill="currentColor" />
            Support us
          </a>
        </div>

        <p className="text-xs text-foreground/40 mt-6">
          &copy; {new Date().getFullYear()} Why Things. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
