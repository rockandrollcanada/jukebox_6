import Image from "next/image";
import Link from "next/link";
import { alphabet } from "@/lib/videos";

export function Footer() {
  return (
    <footer style={{ marginTop: "auto", width: "100%", backgroundColor: "#1e242c", color: "#f0f0f0" }}>
      <div style={{ margin: "0 auto", maxWidth: "72rem", padding: "1.5rem 1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Image
          src="/images/footer.png"
          alt="Rock and Roll Canada Jukebox"
          width={800}
          height={100}
          style={{ width: "100%", maxWidth: "50rem", marginBottom: "1.5rem" }}
        />
        
        {/* Letter navigation */}
        <nav aria-label="Jukebox letter navigation" style={{ width: "100%" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem" }}>
            {alphabet.map((letter) => (
              <Link
                key={letter}
                href={`/jukebox/${letter.toLowerCase()}`}
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  width: "2.25rem", 
                  height: "2.25rem", 
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#f0f0f0",
                  backgroundColor: "#252d38",
                  textDecoration: "none",
                  transition: "background-color 0.2s"
                }}
              >
                {letter}
              </Link>
            ))}
          </div>
        </nav>
        
        <div style={{ marginTop: "1.5rem", paddingTop: "1rem", width: "100%", borderTop: "1px solid #374151", textAlign: "center", fontSize: "0.875rem" }}>
          Made by{" "}
          <a
            href="http://glensmith.ca"
            style={{ fontWeight: "500", color: "#dc2626", textDecoration: "none" }}
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
