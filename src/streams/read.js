import { createReadStream } from "fs";
import path from "path";

const read = async () => {
  // Write your code here
  const filePath = path.resolve("src/streams/files/fileToRead.txt");
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
