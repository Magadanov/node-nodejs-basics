import { copyFile, mkdir, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const source = join(__dirname, "files");
const destination = join(__dirname, "files_copy");

const copy = async () => {
  // Write your code here
  try {
    const files = await readdir(source);

    await mkdir(destination);

    await Promise.all(
      files.map(async (file) => {
        const sourcePath = join(source, file);
        const destinationPath = join(destination, file);
        await copyFile(sourcePath, destinationPath);
      })
    );
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
