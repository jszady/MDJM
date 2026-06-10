import { ImageResponse } from "next/og";

export const alt = "MJDM — Premium Web Design, Development & Growth Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#040816",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px 112px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 26,
            letterSpacing: 10,
            marginBottom: 44,
            display: "flex",
          }}
        >
          MJDM
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.08,
              display: "flex",
            }}
          >
            Build the presence
          </span>
          <span
            style={{
              color: "#C4B5FD",
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.08,
              display: "flex",
            }}
          >
            people remember.
          </span>
        </div>
        <div
          style={{
            color: "#94A3B8",
            fontSize: 24,
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          Premium web design, development, SEO, content, and social growth for modern businesses.
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
