import { createReadStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const filePath = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  // Write your code here
  const readStream = createReadStream(filePath);

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("error", (err) => {
    throw new Error("FS operation failed");
  });

  readStream.on("end", () => {
    console.log("\nFinished.");
  });
};

await read();
