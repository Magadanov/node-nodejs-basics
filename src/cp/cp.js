import { spawn } from "child_process";
import path from "path";
import process from "process";

const spawnChildProcess = async (args) => {
  // Write your code here
  const scriptPath = path.resolve("src/cp/files/script.js");

  const child = spawn(process.execPath, [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "pipe"],
  });

  process.stdin.on("data", (chunk) => {
    child.stdin.write(chunk);
  });

  child.stdout.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  child.stderr.on("data", (chunk) => {
    process.stderr.write("Error");
  });

  child.on("exit", (code) => {
    process.exit(code);
  });
};
const args = process.argv.slice(2);

// Put your arguments in function call to test this functionality
spawnChildProcess(args);
