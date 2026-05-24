"use client";

import { useEffect, useState } from "react";

interface VideoEmbedProps {
  videoId: string;
}

export function VideoEmbed({ videoId }: VideoEmbedProps) {
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTitle() {
      try {
        const response = await fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
        );
        if (response.ok) {
          const data = await response.json();
          setTitle(data.title);
        }
      } catch {
        setTitle("");
      } finally {
        setLoading(false);
      }
    }
    fetchTitle();
  }, [videoId]);

  return (
    <div style={{ 
      width: "100%", 
      maxWidth: "28rem", 
      overflow: "hidden", 
      borderRadius: "0.5rem", 
      backgroundColor: "#1e242c",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
    }}>
      <div style={{ position: "relative", paddingBottom: "56.25%", width: "100%" }}>
        <iframe
          title={title || "YouTube video"}
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
      <div style={{ backgroundColor: "#252d38", padding: "0.75rem 1rem" }}>
        <p style={{ 
          margin: 0, 
          textAlign: "center", 
          fontSize: "0.875rem", 
          fontWeight: "500", 
          color: "#f0f0f0",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}>
          {loading ? "Loading..." : (title || "Untitled Video")}
        </p>
      </div>
    </div>
  );
}
