import fs from "fs/promises";

const copy = async () => {
  // Write your code here
  const source = "src/fs/files";
  const destination = "src/fs/files_copy";

  try {
    await fs.access(source);
    await fs.access(destination);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code == "ENOENT") {
      await fs.cp(source, destination, { recursive: true });
    } else {
      throw err;
    }
  }
};

await copy();
