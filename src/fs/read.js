import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    // Write your code here 
    try {
        const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
        const fileContent = await fsPromises.readFile(filePath, { encoding: 'utf-8' });
        console.log(fileContent);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();