export const code: 43;
export function buildRequest(type: any, id: any): any;
export function parseRequest(buffer: any): {
    type: any;
    id: any;
};
export function buildResponse(type: any, conformity: any, more: any, objects: any): any;
export function parseResponse(buffer: any): {
    type: any;
    conformity: any;
    more: boolean;
    next: any;
    objects: any[];
};
