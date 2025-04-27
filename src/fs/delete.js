import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url)); 

const remove = async () => {
    // Write your code here 
    try {
        const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
        await fsPromises.unlink(filePath);
    } catch {
        throw new Error('FS operation failed');
    }

};

await remove();