export const code: 12;
export function buildResponse(status: any, event_count: any, message_count: any, events: any): any;
export function parseResponse(buffer: any): {
    status: any;
    event_count: any;
    message_count: any;
    events: any;
};
export { buildEmpty as buildRequest, parseEmpty as parseRequest };
