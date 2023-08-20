"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readArrayBuffer = void 0;
const readArrayBuffer = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            var _a;
            const content = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            if (content instanceof ArrayBuffer) {
                resolve(content);
            }
            else {
                reject(new Error("File content could not be read as an ArrayBuffer."));
            }
        };
        reader.onerror = () => {
            reject(new Error("Error reading the file."));
        };
        reader.readAsArrayBuffer(file);
    });
};
exports.readArrayBuffer = readArrayBuffer;
