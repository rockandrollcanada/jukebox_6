import Link from "next/link";
import { alphabet } from "@/lib/videos";

interface LetterNavProps {
  currentLetter?: string;
}

export function LetterNav({ currentLetter }: LetterNavProps) {
  return (
    <nav style={{ marginBottom: "2rem" }} aria-label="Browse by letter">
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem" }}>
        {alphabet.map((letter) => {
          const isActive = letter === currentLetter?.toUpperCase();
          return (
            <Link
              key={letter}
              href={`/jukebox/${letter.toLowerCase()}`}
              className={`letter-link${isActive ? " active" : ""}`}
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
