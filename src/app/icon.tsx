import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#05070f",
          borderRadius: 7,
          display: "flex",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 4,
            top: 5,
            width: 24,
            height: 6.5,
            borderRadius: 3.25,
            background: "linear-gradient(135deg,#2a3494,#6d28d9)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 13,
            top: 5,
            width: 6,
            height: 16.5,
            borderRadius: 3,
            background: "#6d28d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 11.5,
            top: 21,
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#8b5cf6,#22d3ee)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
