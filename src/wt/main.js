import {cpus} from 'os'
import {Worker} from 'worker_threads';
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
    // Write your code here
    const cpuCount = cpus().length;
    const workers = [];
    const results = [];

    for (let i = 0; i < cpuCount; i++) {
        const worker = new Worker(path.join(__dirname, 'worker.js'));
        workers.push(worker);
        const workerPromise = new Promise((resolveWorker) => {
            worker.once('message', (data) => {
                resolveWorker({status: 'resolved', data});
            });
            worker.once('error', (data) => {
                resolveWorker({status: 'error', data});
            });
            worker.postMessage(10 + i)
        })
        results.push(workerPromise)
    }

    const finalResults = await Promise.all(results);

    console.log(finalResults)
};

await performCalculations();