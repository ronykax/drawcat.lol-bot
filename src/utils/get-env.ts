import "dotenv/config";

export default function getEnv(name: string) {
    const result = process.env[name];

    if (!result) {
        throw new Error(`invalid env: ${name}`);
    }

    return result;
}
