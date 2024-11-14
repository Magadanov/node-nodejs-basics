import { createReadStream } from "fs";
import { createHash } from "crypto";
import path from "path";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  // Write your code here
  const fileStream = createReadStream(filePath);
  const hash = createHash("sha256");

  fileStream.pipe(hash);

  hash.on("finish", () => {
    console.log(hash.digest("hex"));
  });

  fileStream.on("error", (err) => {
    throw new Error("FS operation failed");
  });
};

await calculateHash();
