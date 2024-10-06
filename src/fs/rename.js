import fs from "fs/promises";

const rename = async () => {
  // Write your code here
  const oldPath = "src/fs/files/wrongFilename.txt";
  const newPath = "src/fs/files/properFilename.md";
  try {
    await fs.access(oldPath);
    try {
      await fs.access(newPath);
    } catch (error) {
      if (error.code == "ENOENT") {
        await fs.rename(oldPath, newPath);
      } else {
        throw error;
      }
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
