import { createReadStream } from "fs";
import { createHash } from "crypto";
import path from "path";

const calculateHash = async () => {
  // Write your code here
  const filePath = path.resolve("src/hash/files/fileToCalculateHashFor.txt");
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
