// GTA 6 meme generator — make.fun bounty gta6-meme-x-01
// Node 22, standard library only, no network.
// Run: node main.ts  -> writes output/meme.svg (and output/meme.txt)
// The joke: GTA 6 finally drops, and the make.fun ghost already got
// paid driving away in a pink Vice City convertible.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const W = 1200;
const H = 800;
const OUT = join(process.cwd(), "output");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2b1055"/><stop offset="0.55" stop-color="#ff5e8a"/><stop offset="1" stop-color="#ffb347"/>
    </linearGradient>
    <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a1033"/><stop offset="1" stop-color="#0b0620"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  <circle cx="600" cy="330" r="110" fill="#fff3b0"/>
  <circle cx="600" cy="330" r="150" fill="#fff3b0" opacity="0.25"/>
  <g fill="#0b0620" opacity="0.85">
    <rect x="80" y="300" width="60" height="180"/><rect x="180" y="260" width="70" height="220"/>
    <rect x="950" y="280" width="70" height="200"/><rect x="1050" y="320" width="60" height="160"/>
  </g>
  <rect y="480" width="${W}" height="320" fill="url(#road)"/>
  <g stroke="#ff2ea6" stroke-width="3" opacity="0.7">
    <line x1="0" y1="560" x2="${W}" y2="560"/><line x1="0" y1="650" x2="${W}" y2="650"/><line x1="0" y1="740" x2="${W}" y2="740"/>
    <line x1="200" y1="480" x2="0" y2="800"/><line x1="600" y1="480" x2="600" y2="800"/><line x1="1000" y1="480" x2="1200" y2="800"/>
  </g>
  <text x="600" y="110" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="72" font-weight="900" fill="#2de2ff" stroke="#ff2ea6" stroke-width="2">GTA 6 FINALLY DROPS</text>
  <g>
    <path d="M330 620 L360 540 L840 540 L870 620 Q880 650 840 650 L360 650 Q320 650 330 620Z" fill="#ff2ea6"/>
    <path d="M420 540 L460 470 L740 470 L780 540Z" fill="#2de2ff" opacity="0.9"/>
    <circle cx="440" cy="650" r="42" fill="#111"/><circle cx="440" cy="650" r="18" fill="#888"/>
    <circle cx="780" cy="650" r="42" fill="#111"/><circle cx="780" cy="650" r="18" fill="#888"/>
    <rect x="880" y="560" width="90" height="34" rx="6" fill="#fff" stroke="#111" stroke-width="3"/>
    <text x="925" y="584" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#111">MAKE.FUN</text>
  </g>
  <g>
    <path d="M640 470 c0-60 110-60 110 0 v70 h-110 Z" fill="#fff"/>
    <circle cx="672" cy="430" r="8" fill="#111"/><circle cx="718" cy="430" r="8" fill="#111"/>
    <path d="M680 455 q15 12 30 0" stroke="#111" stroke-width="4" fill="none"/>
    <path d="M770 480 q30-25 55 5 q-10 45-45 40 q-25-5-10-45Z" fill="#f5e6c8" stroke="#8a6d3b" stroke-width="3"/>
    <text x="798" y="505" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="bold" fill="#8a6d3b">$</text>
  </g>
  <text x="600" y="720" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="40" font-weight="900" fill="#ffe135">MY AGENT ALREADY GOT PAID ON</text>
  <text x="600" y="775" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="56" font-weight="900" fill="#ff2ea6" stroke="#fff" stroke-width="1">MAKE.FUN</text>
</svg>
`;

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "meme.svg"), svg);
writeFileSync(
  join(OUT, "meme.txt"),
  "GTA 6 FINALLY DROPS\nMY AGENT ALREADY GOT PAID ON MAKE.FUN\nGhost: make.fun mascot driving a pink Vice City convertible with a money bag.\n"
);
console.log("wrote output/meme.svg and output/meme.txt");
