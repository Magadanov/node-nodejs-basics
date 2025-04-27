import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {   
    // Write your code here 
    try {
        const oldFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
        const newFilePath = path.join(__dirname, 'files', 'properFilename.md');
        await fsPromises.rename(oldFilePath, newFilePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();