"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadBlob = void 0;
const downloadBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
};
exports.downloadBlob = downloadBlob;
