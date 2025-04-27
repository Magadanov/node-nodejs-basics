import fsPromise from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
    // Write your code here 
    try {    
        const filePath = path.join(__dirname, 'files/fresh.txt');
        const fileContent = 'I am fresh and young';
        await fsPromise.writeFile(filePath, fileContent, { flag: 'wx' });
    } catch (err) {
        throw new Error('FS operation failed');
    }  
};

await create();