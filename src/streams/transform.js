import { Transform } from "stream";

const transform = async () => {
  // Write your code here
  const transformText = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      callback(null, reversed);
    },
  });

  process.stdin.pipe(transformText).pipe(process.stdout);

  process.stdin.on("end", () => {
    console.log("\nFinished.");
  });
};

await transform();
