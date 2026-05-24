interface VideoEmbedProps {
  title: string;
  videoId: string;
}

export function VideoEmbed({ title, videoId }: VideoEmbedProps) {
  return (
    <div className="mx-auto w-full max-w-lg overflow-hidden rounded-lg bg-card shadow-lg">
      <div className="aspect-video w-full">
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      <div className="bg-secondary px-3 py-2 sm:px-4 sm:py-3">
        <p className="truncate text-center text-sm font-medium text-card-foreground sm:text-base">{title}</p>
      </div>
    </div>
  );
}
