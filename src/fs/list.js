import fs from "fs/promises";

const list = async () => {
  // Write your code here
  const folderPath = "src/fs/files";
  try {
    await fs.access(folderPath);
    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
