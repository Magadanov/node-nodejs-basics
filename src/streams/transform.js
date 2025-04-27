import stream from 'stream';

const transform = async () => {
    // Write your code here 
    const transformStream = new stream.Transform({
        transform(chunk, encoding, callback) {
            const transformedChunk = chunk.toString().split('').reverse().join('');
            this.push(transformedChunk);
            callback();
        }
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);
    process.stdin.on('error', (error) => {
        throw new Error('Something went wrong');
    });
    process.stdin.on('end', () => {
        console.log('\nTransformation completed');
    });
};

await transform();