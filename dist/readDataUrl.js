"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDataUrl = void 0;
const readDataUrl = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            var _a;
            const content = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            if (typeof content === "string") {
                resolve(content);
            }
            else {
                reject(new Error("File content could not be read as a Data URL."));
            }
        };
        reader.onerror = () => {
            reject(new Error("Error reading the file."));
        };
        reader.readAsDataURL(file);
    });
};
exports.readDataUrl = readDataUrl;
