import { createClient } from 'redis';

const client = createClient({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

client.on('error', err => console.error('Redis Client Error', err));

let connectPromise;

export async function getRedisClient() {
    if (client.isOpen) {
        return client;
    }

    if (!connectPromise) {
        connectPromise = client.connect().catch(error => {
            connectPromise = undefined;
            throw error;
        });
    }

    await connectPromise;
    return client;
}

export default client;
