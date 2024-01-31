export const code: 22;
export function buildRequest(address: any, andmask: any, ormask: any): any;
export function parseRequest(buffer: any): {
    address: any;
    andmask: any;
    ormask: any;
};
export { buildRequest as buildResponse, parseRequest as parseResponse };
