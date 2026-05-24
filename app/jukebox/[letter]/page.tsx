import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVideosForLetter, alphabet } from "@/lib/videos";
import { Footer } from "@/components/footer";
import { VideoEmbed } from "@/components/video-embed";
import { LetterNav } from "@/components/letter-nav";

export function generateStaticParams() {
  return alphabet.map((letter) => ({
    letter: letter.toLowerCase(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ letter: string }>;
}) {
  const { letter } = await params;
  return {
    title: `Jukebox ${letter.toUpperCase()} | Rock and Roll Canada`,
    description: `Canadian rock videos starting with ${letter.toUpperCase()}`,
  };
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
    <main className="flex min-h-screen w-full flex-col">
      <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        {/* Header */}
        <header className="mb-6 flex flex-col items-center text-center sm:mb-8">
          <Link href="/" className="inline-block transition-opacity hover:opacity-80">
            <Image
              src="/images/jukeboxlogo.png"
              alt="Rock and Roll Canada Jukebox"
              width={400}
              height={200}
              className="mx-auto mb-4 w-full max-w-xs sm:max-w-sm"
            />
          </Link>
          <h1 className="mb-2 text-2xl font-bold text-primary sm:mb-3 sm:text-3xl lg:text-4xl">
            Jukebox {upperLetter}
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Canadian rock videos starting with {upperLetter}
          </p>
        </header>

        {/* Letter Navigation */}
        <LetterNav currentLetter={upperLetter} />

        {/* Videos Section */}
        <section aria-label={`Videos starting with ${upperLetter}`}>
          {videos.length === 0 ? (
            <div className="py-12 text-center sm:py-16">
              <p className="text-lg text-muted-foreground sm:text-xl">
                No videos available for this letter yet.
              </p>
              <Link
                href="/"
                className="mt-4 inline-block text-primary hover:text-primary/80"
              >
                Back to home
              </Link>
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
              {videos.map((video, index) => (
                <VideoEmbed
                  key={`${video.id}-${index}`}
                  title={video.title}
                  videoId={video.id}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}
