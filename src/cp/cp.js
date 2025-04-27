import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    // Write your code here
    const filePath = path.join(__dirname, 'files', 'script.js');
    const childProcess = spawn('node', [filePath, ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('error', (error) => {
        throw new Error('Process failed');
    });
    childProcess.on('exit', (code) => {
        if (code !== 0) {
            throw new Error(`Process failed with exit code ${code}`);
        }
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [10, 20, 30] );
