import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const oldPath = join(__dirname, "files", "wrongFilename.txt");
const newPath = join(__dirname, "files", "properFilename.md");

const rename = async () => {
  // Write your code here
  try {
    await fs.access(oldPath);
    try {
      await fs.access(newPath);
    } catch (error) {
      if (error.code == "ENOENT") {
        await fs.rename(oldPath, newPath);
      } else {
        throw error;
      }
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
