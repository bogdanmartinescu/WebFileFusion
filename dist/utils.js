"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyBuffer = exports.bytesToSize = exports.isFileType = exports.getFileExtension = void 0;
/**
 * Get the file extension from a given file.
 * @param file The file object.
 * @returns The file extension or an empty string.
 */
const getFileExtension = (file) => {
    var _a;
    return ((_a = file.name.split(".").pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || "";
};
exports.getFileExtension = getFileExtension;
/**
 * Check if the file is of a specific type based on its extension.
 * @param file The file object.
 * @param type The extension type to check.
 * @returns True if the file's extension matches the provided type, otherwise false.
 */
const isFileType = (file, type) => {
    return (0, exports.getFileExtension)(file) === type.toLowerCase();
};
exports.isFileType = isFileType;
/**
 * Convert a size in bytes to a human-readable string.
 * @param bytes The size in bytes.
 * @returns A human-readable size string.
 */
const bytesToSize = (bytes) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0)
        return "0 Byte";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString(), 10);
    return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
};
exports.bytesToSize = bytesToSize;
/**
 * Check if the provided ArrayBuffer is empty.
 * @param buffer The ArrayBuffer.
 * @returns True if the ArrayBuffer is empty, otherwise false.
 */
const isEmptyBuffer = (buffer) => {
    return buffer.byteLength === 0;
};
exports.isEmptyBuffer = isEmptyBuffer;
