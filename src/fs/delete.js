import fs from "fs/promises";

const remove = async () => {
  // Write your code here
  const filePath = "src/fs/files/fileToRemove.txt";
  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
