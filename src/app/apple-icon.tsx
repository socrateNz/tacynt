import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#05070f",
          borderRadius: 39,
          display: "flex",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 22.5,
            top: 28,
            width: 135,
            height: 36,
            borderRadius: 18,
            background: "linear-gradient(135deg,#2a3494,#6d28d9)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 72.5,
            top: 28,
            width: 35,
            height: 93,
            borderRadius: 17.5,
            background: "#6d28d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 64.5,
            top: 118,
            width: 51,
            height: 51,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#8b5cf6,#22d3ee)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
