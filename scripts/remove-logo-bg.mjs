/**
 * Rend le fond « papier » du logo transparent (flood-fill depuis les bords).
 * Usage : node scripts/remove-logo-bg.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const target = path.join(root, "public", "logo-libellules.png");
const backup = path.join(root, "public", "logo-libellules-with-paper-bg.png");

// Moyenne des 4 coins (fond crème)
const PR = 251.5;
const PG = 252.25;
const PB = 246.25;

function distPaper(r, g, b) {
  return Math.hypot(r - PR, g - PG, b - PB);
}

const SEED = 22;
const GROW = 30;

if (!fs.existsSync(backup)) {
  fs.copyFileSync(target, backup);
}

const { data, info } = await sharp(target).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const w = info.width;
const h = info.height;
const ch = 4;
const idx = (x, y) => (y * w + x) * ch;

const mask = new Uint8Array(w * h);
const q = [];

function pushIfPaper(x, y, maxDist) {
  if (x < 0 || x >= w || y < 0 || y >= h) return;
  const k = y * w + x;
  if (mask[k]) return;
  const i = idx(x, y);
  const r = data[i];
  const g0 = data[i + 1];
  const b = data[i + 2];
  if (distPaper(r, g0, b) > maxDist) return;
  mask[k] = 1;
  q.push(k);
}

for (let x = 0; x < w; x++) {
  pushIfPaper(x, 0, SEED);
  pushIfPaper(x, h - 1, SEED);
}
for (let y = 0; y < h; y++) {
  pushIfPaper(0, y, SEED);
  pushIfPaper(w - 1, y, SEED);
}

for (let head = 0; head < q.length; head++) {
  const key = q[head];
  const x = key % w;
  const y = (key / w) | 0;
  const neigh = [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ];
  for (const [nx, ny] of neigh) {
    pushIfPaper(nx, ny, GROW);
  }
}

let cleared = 0;
for (let k = 0; k < mask.length; k++) {
  if (!mask[k]) continue;
  const i = k * ch;
  data[i + 3] = 0;
  cleared++;
}

await sharp(Buffer.from(data), { raw: { width: w, height: h, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(target);

console.log(`OK — ${cleared} px transparents / ${w * h} (${((cleared / (w * h)) * 100).toFixed(1)} %)`);
console.log(`Copie de secours : ${path.basename(backup)}`);
