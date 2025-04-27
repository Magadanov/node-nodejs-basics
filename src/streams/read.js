import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
    readStream.on('error', (error) => {
        throw new Error('Something went wrong');
    });
    readStream.on('end', () => {
        console.log('\nFile read completed');
    });
};

await read();