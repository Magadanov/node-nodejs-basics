import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import path from "path";

const compress = async () => {
  // Write your code here
  const input = path.resolve("src/zip/files/fileToCompress.txt");
  const output = path.resolve("src/zip/files/archive.gz");

  const readStream = createReadStream(input);
  const gzip = createGzip();
  const writeStream = createWriteStream(output);

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("\nFinished.");
  });

  writeStream.on("error", (err) => {
    throw new Error("FS operation failed");
  });
};

await compress();
