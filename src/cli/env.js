const parseEnv = () => {
    // Write your code here 
    const env = process.env;
    const envKeys = Object.keys(env);
    const filteredKeys = envKeys.filter(key => key.startsWith('RSS_'));
    console.log(filteredKeys.map(key => `${key}=${env[key]}`).join('; '));
};

parseEnv();