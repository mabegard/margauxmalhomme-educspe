#!/usr/bin/env node
/**
 * Génère un favicon.ico (PNG embarqué) à partir de public/favicon-32.png
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pngPath = path.join(root, "public/favicon-32.png");
const png = fs.readFileSync(pngPath);

const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // count: 1 image

const entry = Buffer.alloc(16);
entry[0] = width >= 256 ? 0 : width;
entry[1] = height >= 256 ? 0 : height;
entry[2] = 0; // palette
entry[3] = 0; // reserved
entry.writeUInt16LE(1, 4); // color planes
entry.writeUInt16LE(32, 6); // bpp
entry.writeUInt32LE(png.length, 8); // size
entry.writeUInt32LE(6 + 16, 12); // offset

const ico = Buffer.concat([header, entry, png]);

for (const dest of ["src/app/favicon.ico", "public/favicon.ico"]) {
  fs.writeFileSync(path.join(root, dest), ico);
}

console.log(`favicon.ico écrit (${ico.length} octets, ${width}x${height})`);
