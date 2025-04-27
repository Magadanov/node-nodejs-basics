import fsPromises from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url)); 

const calculateHash = async () => {
    // Write your code here 
    try {
        const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
        const fileContent = await fsPromises.readFile(filePath, { encoding: 'utf-8' });
        const hashed = crypto.createHash('sha256').update(fileContent).digest('hex');
        console.log(hashed);
    } catch (error) {
        throw new Error('Something went wrong');
    }
};

await calculateHash();