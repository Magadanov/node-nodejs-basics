import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


const copy = async () => {
    // Write your code here 
    try {
        const sourceDir = path.join(__dirname, 'files');
        const destDir = path.join(__dirname, 'files_copy');
        await fsPromises.mkdir(destDir, { recursive: true, mode: fsPromises.constants.S_IRWXU });
        const files = await fsPromises.readdir(sourceDir);
        for (const file of files) {
            const sourceDir = path.join(__dirname, 'files', file);
            const destDir = path.join(__dirname, 'files_copy', file);
            await fsPromises.copyFile(sourceDir, destDir, fsPromises.constants.COPYFILE_EXCL);
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
