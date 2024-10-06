import { createWriteStream } from "fs";
import path from "path";

const write = async () => {
  // Write your code here
  const filePath = path.resolve("src/streams/files/fileToWrite.txt");
  const writeStream = createWriteStream(filePath);

  process.stdin.pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("\nFinished.");
  });

  writeStream.on("error", (err) => {
    throw new Error("FS operation failed");
  });
};

await write();
