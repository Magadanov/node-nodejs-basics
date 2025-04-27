const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2);
    const result = args.reduce((acc, cur, ind) => {
        if (ind % 2 === 0) {
            const key = cur.replace('--', '');
            acc[key] = args[ind + 1];
        }
        return acc;
    }, {})
    console.log(Object.entries(result).map(([key, value]) => `${key} is ${value}`).join('; '));
}

parseArgs();