"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlob = void 0;
const createBlob = (data) => {
    return new Blob(data, { type: "text/plain" });
};
exports.createBlob = createBlob;
