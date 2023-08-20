"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileType = void 0;
const getFileType = (file) => {
    var _a;
    const extension = ((_a = file.name.split(".").pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || "";
    switch (extension) {
        case "txt":
            return "Text";
        case "js":
            return "JavaScript";
        case "ts":
            return "TypeScript";
        case "json":
            return "JSON";
        // ... You can extend this list as needed
        default:
            return "Unknown";
    }
};
exports.getFileType = getFileType;
