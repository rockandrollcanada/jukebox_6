import Image from "next/image";
import { videosByLetter } from "@/lib/videos";
import { Footer } from "@/components/footer";
import { VideoEmbed } from "@/components/video-embed";
import { LetterNav } from "@/components/letter-nav";

const videos = videosByLetter.a;

export default function Home() {
  return (
    <main style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: "56rem", padding: "1.5rem 1rem" }}>
        {/* Header */}
        <header style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h1 style={{ marginBottom: "1rem", fontSize: "1.875rem", fontWeight: "bold", color: "#dc2626" }}>
            Rock and Roll Canada Video Juke Box
          </h1>
          <p style={{ marginBottom: "1.5rem", fontSize: "1.125rem", color: "#a3a3a3" }}>
            Watch Canadian Rock Bands play Ontario
          </p>
          <Image
            src="/images/jukeboxlogo.png"
            alt="Rock and Roll Canada Jukebox Version two."
            width={600}
            height={300}
            style={{ width: "100%", maxWidth: "32rem", height: "auto" }}
            priority
          />
        </header>

        {/* Letter Navigation */}
        <LetterNav />

        {/* Video Grid */}
        <section aria-label="Featured videos">
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "1.5rem",
            justifyItems: "center"
          }}>
            {videos.map((video, index) => (
              <VideoEmbed
                key={`${video.id}-${index}`}
                title={video.title}
                videoId={video.id}
              />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
