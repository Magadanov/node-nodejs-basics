const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  const parsedArgs = [];

  for (let i = 0; i < args.length; i += 2) {
    const name = args[i].replace("--", "");
    const value = args[i + 1];
    parsedArgs.push(`${name} is ${value}`);
  }

  console.log(parsedArgs.join(", "));
};

parseArgs();
