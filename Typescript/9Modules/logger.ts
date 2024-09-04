export default function log(message: string): void {
    console.log(message);
}

export function info(message: string): void {
    console.log(`INFO: ${message}`);
}

export function error(message: string): void {
    console.error(`Error: ${message}`);
}