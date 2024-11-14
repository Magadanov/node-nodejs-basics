import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const folderPath = join(__dirname, "files");

const list = async () => {
  // Write your code here
  try {
    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
