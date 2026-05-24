import Link from "next/link";
import { alphabet } from "@/lib/videos";

interface LetterNavProps {
  currentLetter?: string;
}

export function LetterNav({ currentLetter }: LetterNavProps) {
  return (
    <nav className="mb-6 sm:mb-8" aria-label="Browse by letter">
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
        {alphabet.map((letter) => {
          const isActive = letter === currentLetter?.toUpperCase();
          return (
            <Link
              key={letter}
              href={`/jukebox/${letter.toLowerCase()}`}
              className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-semibold transition-colors hover:no-underline sm:h-10 sm:w-10 sm:text-base ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-primary"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {letter}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
