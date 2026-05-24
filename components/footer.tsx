import Image from "next/image";
import Link from "next/link";
import { alphabet } from "@/lib/videos";

export function Footer() {
  return (
    <footer className="mt-12 bg-red-800 text-white sm:mt-16">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Image
          src="/images/footer.png"
          alt="Rock and Roll Canada Jukebox"
          width={800}
          height={100}
          className="mb-6 w-full sm:mb-8"
        />
        
        {/* Letter navigation grid - responsive columns */}
        <nav aria-label="Jukebox letter navigation">
          <div className="grid grid-cols-4 gap-2 text-center sm:grid-cols-6 sm:gap-3 md:grid-cols-7 lg:grid-cols-13">
            {alphabet.map((letter) => (
              <Link
                key={letter}
                href={`/jukebox/${letter.toLowerCase()}`}
                className="rounded-md px-2 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 hover:no-underline sm:px-3 sm:text-base"
              >
                {letter}
              </Link>
            ))}
          </div>
        </nav>
        
        <div className="mt-6 border-t border-red-700 pt-4 text-center text-sm sm:mt-8 sm:text-base">
          Made by{" "}
          <a
            href="http://glensmith.ca"
            className="font-medium text-red-300 transition-colors hover:text-white"
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
