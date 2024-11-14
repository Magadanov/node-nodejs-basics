import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const filePath = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  // Write your code here
  try {
    const content = await fs.readFile(filePath, "utf-8");
    console.log(content);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
