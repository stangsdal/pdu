export const code: 23;
export function buildRequest(read_address: any, read_quantity: any, write_address: any, values: any): any;
export function parseRequest(buffer: any): {
    read_address: any;
    read_quantity: any;
    write_address: any;
    values: any[];
};
export function buildResponse(values: any): any;
export function parseResponse(buffer: any): {
    values: any[];
};
