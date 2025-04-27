import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    });
    process.stdin.on('error', (error) => {
        throw new Error('Something went wrong');
    });
    process.stdin.on('end', () => {
        writeStream.end();
        console.log('File write completed');
    });
};

await write();