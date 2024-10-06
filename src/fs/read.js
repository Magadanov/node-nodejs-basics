import fs from "fs/promises";

const read = async () => {
  // Write your code here
  const filePath = "src/fs/files/fileToRead.txt";
  try {
    await fs.access(filePath);
    const content = await fs.readFile(filePath, "utf-8");
    console.log(content);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
