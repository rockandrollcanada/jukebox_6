import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// This would be replaced with actual video data per letter
const getVideosForLetter = (letter: string) => {
  // Placeholder - in a real app, you'd fetch videos that start with this letter
  return [
    { title: `Sample Video for ${letter.toUpperCase()}`, id: "dQw4w9WgXcQ" },
  ];
};

export function generateStaticParams() {
  return alphabet.map((letter) => ({
    letter: letter.toLowerCase(),
  }));
}

export function generateMetadata({ params }: { params: Promise<{ letter: string }> }) {
  return params.then(({ letter }) => ({
    title: `Jukebox ${letter.toUpperCase()} | Rock and Roll Canada`,
    description: `Canadian rock videos starting with ${letter.toUpperCase()}`,
  }));
}

function Footer() {
  return (
    <footer className="mt-12 bg-red-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Image
          src="/images/footer.png"
          alt="Rock and Roll Canada Jukebox"
          width={800}
          height={100}
          className="mb-8 w-full"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {alphabet.map((l) => (
            <Link
              key={l}
              href={`/jukebox/${l.toLowerCase()}`}
              className="text-white hover:text-red-300"
            >
              Jukebox {l}
            </Link>
          ))}
        </div>
        <div className="mt-8 border-t border-red-700 pt-4 text-center">
          Made by{" "}
          <a
            href="http://glensmith.ca"
            className="text-red-300 hover:text-white"
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

export default async function JukeboxPage({
  params,
}: {
  params: Promise<{ letter: string }>;
}) {
  const { letter } = await params;
  const upperLetter = letter.toUpperCase();

  if (!alphabet.includes(upperLetter)) {
    notFound();
  }

  const videos = getVideosForLetter(letter);

  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8 text-center">
          <Link href="/" className="inline-block">
            <Image
              src="/images/jukeboxlogo.png"
              alt="Rock and Roll Canada Jukebox"
              width={400}
              height={200}
              className="mx-auto mb-4"
            />
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-red-800">
            Jukebox {upperLetter}
          </h1>
          <p className="text-xl text-gray-600">
            Canadian rock videos starting with {upperLetter}
          </p>
        </header>

        {/* Letter navigation */}
        <nav className="mb-8 flex flex-wrap justify-center gap-2">
          {alphabet.map((l) => (
            <Link
              key={l}
              href={`/jukebox/${l.toLowerCase()}`}
              className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                l === upperLetter
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-red-100"
              }`}
            >
              {l}
            </Link>
          ))}
        </nav>

        <div className="space-y-8">
          {videos.map((video) => (
            <div key={video.id} className="aspect-video w-full">
              <iframe
                title={video.title}
                src={`https://www.youtube.com/embed/${video.id}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
