import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
    // Write your code here 
    try {
        const dirPath = path.join(__dirname, 'files');
        const files = await fsPromises.readdir(dirPath);
        const fileList = files.map(file => path.join(dirPath, file));
        console.log(fileList);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();