export function buildStartEndAddress(start: any, end: any): any;
export function buildAddressQuantity(address: any, quantity: any): any;
export function buildEmpty(): any;
export function parseStartEndAddress(buffer: any): {
    start: any;
    end: number;
};
export function parseAddressQuantity(buffer: any): {
    address: any;
    quantity: any;
};
export function parseAddressValue(buffer: any): {
    address: any;
    value: any;
};
export function parseEmpty(): {};
export function numberToBuffer(number: any): any;
export function bitsToBuffer(bits: any): any;
export function blocksToBuffer(blocks: any): any;
export function bufferToBits(buffer: any): number[];
export function bufferToBlocks(buffer: any): any[];
export function copyBufferBlocks(buffer: any, values: any, offset: any): void;
