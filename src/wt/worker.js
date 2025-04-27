import {parentPort} from 'worker_threads'

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (data) => {
    // This function sends result of nthFibonacci computations to main thread
    parentPort.postMessage(data)
};

parentPort.on('message', (n) => {
    // This function receives n from main thread and sends result of nthFibonacci computations
    const result = nthFibonacci(n);
    sendResult(result);
})