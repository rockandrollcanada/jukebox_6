import Image from "next/image";
import Link from "next/link";
import { videosByLetter, alphabet } from "@/lib/videos";

const videos = videosByLetter.a;

function VideoEmbed({ title, videoId }: { title: string; videoId: string }) {
  return (
    <div className="aspect-video w-full">
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full rounded-lg"
      />
    </div>
  );
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
          {alphabet.map((letter) => (
            <Link
              key={letter}
              href={`/jukebox/${letter.toLowerCase()}`}
              className="text-white hover:text-red-300"
            >
              Jukebox {letter}
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

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-red-800">
            Rock and Roll Canada Video Juke Box
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Watch Canadian Rock Bands play Ontario
          </p>
          <Image
            src="/images/jukeboxlogo.png"
            alt="Rock and Roll Canada Jukebox Version two."
            width={600}
            height={300}
            className="mx-auto"
            priority
          />
        </header>

        <div className="space-y-8">
          {videos.map((video, index) => (
            <div key={`${video.id}-${index}`}>
              <VideoEmbed title={video.title} videoId={video.id} />
              {(index + 1) % 4 === 0 && index < videos.length - 1 && (
                <Image
                  src="/images/jukebox-part.png"
                  alt="Rock and Roll Canada Jukebox divider"
                  width={800}
                  height={50}
                  className="mx-auto my-8 w-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
