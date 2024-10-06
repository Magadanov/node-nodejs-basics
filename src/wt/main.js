import { Worker, isMainThread, parentPort } from "worker_threads";
import os from "os";
import path from "path";

const performCalculations = async () => {
  // Write your code here
  const cpus = os.cpus().length;
  const workers = [];
  const results = [];

  for (let i = 0; i < cpus; i++) {
    const worker = new Worker(path.resolve("src/wt/worker.js"));
    workers.push(worker);

    worker.postMessage(10 + i);

    worker.on("message", (result) => {
      results[i] = result;
    });

    worker.on("error", (error) => {
      results[i] = { status: "error", data: null };
    });

    worker.on("exit", (code) => {
      console.log("\nExit.");
    });
  }

  await Promise.all(
    workers.map((worker) => {
      return new Promise((resolve) => {
        worker.on("exit", () => {
          resolve();
        });
      });
    })
  );

  console.log(results);
};

await performCalculations();
