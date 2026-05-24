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
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                width: "2.25rem", 
                height: "2.25rem", 
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "600",
                textDecoration: "none",
                transition: "background-color 0.2s",
                backgroundColor: isActive ? "#dc2626" : "#252d38",
                color: isActive ? "#ffffff" : "#e5e5e5",
                boxShadow: isActive ? "0 4px 6px -1px rgba(0, 0, 0, 0.3)" : "none"
              }}
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
