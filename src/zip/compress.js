import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFilePath = path.join(__dirname, 'files', 'archive.gz');
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(compressedFilePath);
    const gzip = createGzip();
    readStream
        .pipe(gzip)
        .pipe(writeStream)
        .on('finish', () => {
            console.log('File compression completed');
        })
        .on('error', () => {
            throw new Error('Something went wrong');
        });
    writeStream.on('error', () => {
        throw new Error('Something went wrong');
    });
    gzip.on('error', () => {
        throw new Error('Something went wrong');
    });
};

await compress();