import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="7.8" cy="7.6" r="0.7" fill="currentColor" stroke="none" />
      <line x1="7.8" y1="10.6" x2="7.8" y2="17" />
      <path d="M11.5 17v-3.6c0-1.7 1-2.9 2.6-2.9s2.6 1.2 2.6 2.9V17" />
      <line x1="11.5" y1="10.6" x2="11.5" y2="17" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M15 8.5h-1.7c-1 0-1.3.5-1.3 1.4V12h3l-.4 3h-2.6v6h-3v-6H7v-3h2V9.2C9 6.9 10.2 5 13 5h2v3.5z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
