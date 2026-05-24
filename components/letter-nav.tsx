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
                  ? "bg-red-800 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-800"
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
