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
    <main style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: "56rem", padding: "1.5rem 1rem" }}>
        {/* Header */}
        <header style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <Link href="/" style={{ display: "inline-block", opacity: 1, transition: "opacity 0.2s" }}>
            <Image
              src="/images/jukeboxlogo.png"
              alt="Rock and Roll Canada Jukebox"
              width={400}
              height={200}
              style={{ width: "100%", maxWidth: "20rem", height: "auto", marginBottom: "1rem" }}
            />
          </Link>
          <h1 style={{ marginBottom: "0.75rem", fontSize: "1.875rem", fontWeight: "bold", color: "#dc2626" }}>
            Jukebox {upperLetter}
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#a3a3a3" }}>
            Canadian rock videos starting with {upperLetter}
          </p>
        </header>

        {/* Letter Navigation */}
        <LetterNav currentLetter={upperLetter} />

        {/* Videos Section */}
        <section aria-label={`Videos starting with ${upperLetter}`}>
          {videos.length === 0 ? (
            <div style={{ padding: "3rem 0", textAlign: "center" }}>
              <p style={{ fontSize: "1.25rem", color: "#a3a3a3" }}>
                No videos available for this letter yet.
              </p>
              <Link
                href="/"
                style={{ marginTop: "1rem", display: "inline-block", color: "#dc2626" }}
              >
                Back to home
              </Link>
            </div>
          ) : (
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
              gap: "1.5rem",
              justifyItems: "center"
            }}>
              {videos.map((video, index) => (
                <VideoEmbed
                  key={`${video.id}-${index}`}
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
