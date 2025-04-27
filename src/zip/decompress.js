import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const decompress = async () => {
    // Write your code here 
    const sourceFilePath = path.join(__dirname, 'files', 'archive.gz');
    const destinationFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

    const readableStream = fs.createReadStream(sourceFilePath);
    const gunzipStream = createGunzip();
    const writableStream = fs.createWriteStream(destinationFilePath);

    readableStream
        .pipe(gunzipStream)
        .pipe(writableStream)
        .on('finish', () => {
            console.log('File successfully decompressed!');
        });

    readableStream.on('error', () => {
        console.error('Something went wrong');
    });

    gunzipStream.on('error', () => {
        console.error('Something went wrong');
    });
    writableStream.on('error', () => {
        console.error('Something went wrong');
    });
};

await decompress();