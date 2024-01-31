export const code: 67;
export function buildRequest(read_category: any, read_index: any, read_page: any, read_quantity: any): any;
export function parseRequest(buffer: any): {
    read_category: any;
    read_index: any;
    read_page: any;
    read_quantity: any;
};
export function buildResponse(values: any): any;
export function parseResponse(buffer: any): {
    values: any[];
};
