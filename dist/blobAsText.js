"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blobAsText = void 0;
const blobAsText = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            var _a;
            resolve((_a = event.target) === null || _a === void 0 ? void 0 : _a.result);
        };
        reader.onerror = () => {
            reject(new Error("Failed to read blob as text"));
        };
        reader.readAsText(blob);
    });
};
exports.blobAsText = blobAsText;
