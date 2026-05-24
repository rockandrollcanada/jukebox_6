interface VideoEmbedProps {
  title: string;
  videoId: string;
}

export function VideoEmbed({ title, videoId }: VideoEmbedProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-black shadow-lg">
      <div className="aspect-video w-full">
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      <div className="bg-gray-900 px-3 py-2 sm:px-4 sm:py-3">
        <p className="truncate text-sm font-medium text-white sm:text-base">{title}</p>
      </div>
    </div>
  );
}
