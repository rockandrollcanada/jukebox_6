import Image from "next/image";
import { videosByLetter } from "@/lib/videos";
import { Footer } from "@/components/footer";
import { VideoEmbed } from "@/components/video-embed";
import { LetterNav } from "@/components/letter-nav";

const videos = videosByLetter.a;

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        {/* Header */}
        <header className="mb-6 flex flex-col items-center text-center sm:mb-8 lg:mb-10">
          <h1 className="mb-3 text-2xl font-bold text-primary sm:mb-4 sm:text-3xl lg:text-4xl">
            Rock and Roll Canada Video Juke Box
          </h1>
          <p className="mb-4 text-base text-muted-foreground sm:mb-6 sm:text-lg lg:text-xl">
            Watch Canadian Rock Bands play Ontario
          </p>
          <Image
            src="/images/jukeboxlogo.png"
            alt="Rock and Roll Canada Jukebox Version two."
            width={600}
            height={300}
            className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-xl"
            priority
          />
        </header>

        {/* Letter Navigation */}
        <LetterNav />

        {/* Video Grid */}
        <section aria-label="Featured videos">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
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
