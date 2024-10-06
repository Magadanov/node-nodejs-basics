import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import path from "path";

const decompress = async () => {
  // Write your code here
  const input = path.resolve("src/zip/files/archive.gz");
  const output = path.resolve("src/zip/files/fileToCompress.txt");

  const readStream = createReadStream(input);
  const gunzip = createGunzip();
  const writeStream = createWriteStream(output);

  readStream.pipe(gunzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("\nFinished.");
  });

  writeStream.on("error", (err) => {
    throw new Error("FS operation failed");
  });
};

await decompress();
