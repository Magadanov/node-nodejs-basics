import fs from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const filePath = join(__dirname, "files", "fresh.txt");

const create = async () => {
  // Write your code here
  try {
    await fs.writeFile(filePath, "I am fresh and young", {
      encoding: "utf-8",
      flag: "wx",
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
