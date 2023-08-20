/**
 * Get the file extension from a given file.
 * @param file The file object.
 * @returns The file extension or an empty string.
 */
export declare const getFileExtension: (file: File) => string;
/**
 * Check if the file is of a specific type based on its extension.
 * @param file The file object.
 * @param type The extension type to check.
 * @returns True if the file's extension matches the provided type, otherwise false.
 */
export declare const isFileType: (file: File, type: string) => boolean;
/**
 * Convert a size in bytes to a human-readable string.
 * @param bytes The size in bytes.
 * @returns A human-readable size string.
 */
export declare const bytesToSize: (bytes: number) => string;
/**
 * Check if the provided ArrayBuffer is empty.
 * @param buffer The ArrayBuffer.
 * @returns True if the ArrayBuffer is empty, otherwise false.
 */
export declare const isEmptyBuffer: (buffer: ArrayBuffer) => boolean;
