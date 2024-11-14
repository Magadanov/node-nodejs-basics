import { Worker } from "worker_threads";
import os from "os";
import path from "path";

const performCalculations = async () => {
  // Write your code here
  const cpus = os.cpus().length;
  const workers = [];
  const results = [];

  for (let i = 0; i < cpus; i++) {
    const workerPath = new URL("./worker.js", import.meta.url);
    const worker = new Worker(workerPath, { workerData: 10 + i });

    worker.postMessage(10 + i);

    worker.on("message", (data) => {
      results.push({ status: "resolved", data });
    });

    worker.on("error", (error) => {
      results.push({ status: "error", data: null });
    });

    worker.on("exit", (code) => {
      console.log("\nExit.");
    });

    workers.push(worker);
  }

  await Promise.all(
    workers.map((worker) => {
      return new Promise((resolve) => {
        worker.on("exit", resolve);
      });
    })
  );

  console.log(results);
};

await performCalculations();
