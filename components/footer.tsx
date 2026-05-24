import Image from "next/image";
import Link from "next/link";
import { alphabet } from "@/lib/videos";

export function Footer() {
  return (
    <footer className="mt-12 bg-card text-card-foreground sm:mt-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Image
          src="/images/footer.png"
          alt="Rock and Roll Canada Jukebox"
          width={800}
          height={100}
          className="mb-6 w-full sm:mb-8"
        />
        
        {/* Letter navigation grid - responsive columns */}
        <nav aria-label="Jukebox letter navigation" className="w-full">
          <div className="flex flex-wrap justify-center gap-2 text-center sm:gap-3">
            {alphabet.map((letter) => (
              <Link
                key={letter}
                href={`/jukebox/${letter.toLowerCase()}`}
                className="flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-primary hover:no-underline sm:h-10 sm:w-10 sm:text-base"
              >
                {letter}
              </Link>
            ))}
          </div>
        </nav>
        
        <div className="mt-6 w-full border-t border-border pt-4 text-center text-sm sm:mt-8 sm:text-base">
          Made by{" "}
          <a
            href="http://glensmith.ca"
            className="font-medium text-primary transition-colors hover:text-primary/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            Glen Smith
          </a>
        </div>
      </div>
    </footer>
  );
}
