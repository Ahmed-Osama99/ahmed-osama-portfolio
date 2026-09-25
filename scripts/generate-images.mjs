import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputRoot = path.join(root, "public", "images");

const images = [
  { name: "profile", source: "ahmedosama.jpg", widths: [768, 1280, 1600] },
  { name: "learnify", source: "learnify.jpg", widths: [480, 768, 1200] },
  { name: "kaira", source: "kaira.jpg", widths: [480, 768, 1200] },
  { name: "dashstack", source: "dashstack.jpg", widths: [480, 768, 1200] },
];

async function generateImageVariants({ name, source, widths }) {
  const input = path.join(root, "src", "assets", source);
  const destination = path.join(outputRoot, name);

  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });

  await Promise.all(
    widths.flatMap((width) => [
      sharp(input)
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: 48, effort: 6 })
        .toFile(path.join(destination, `${width}.avif`)),
      sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 78, effort: 5 })
        .toFile(path.join(destination, `${width}.webp`)),
    ]),
  );
}

await Promise.all(images.map(generateImageVariants));
console.log(`Generated responsive image variants in ${path.relative(root, outputRoot)}.`);