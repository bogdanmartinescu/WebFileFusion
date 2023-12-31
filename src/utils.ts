/**
 * Get the file extension from a given file.
 * @param file The file object.
 * @returns The file extension or an empty string.
 */
export const getFileExtension = (file: File): string => {
  return file.name.split(".").pop()?.toLowerCase() || "";
};

/**
 * Check if the file is of a specific type based on its extension.
 * @param file The file object.
 * @param type The extension type to check.
 * @returns True if the file's extension matches the provided type, otherwise false.
 */
export const isFileType = (file: File, type: string): boolean => {
  return getFileExtension(file) === type.toLowerCase();
};

/**
 * Convert a size in bytes to a human-readable string.
 * @param bytes The size in bytes.
 * @returns A human-readable size string.
 */
export const bytesToSize = (bytes: number): string => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = parseInt(
    Math.floor(Math.log(bytes) / Math.log(1024)).toString(),
    10
  );
  return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
};

/**
 * Check if the provided ArrayBuffer is empty.
 * @param buffer The ArrayBuffer.
 * @returns True if the ArrayBuffer is empty, otherwise false.
 */
export const isEmptyBuffer = (buffer: ArrayBuffer): boolean => {
  return buffer.byteLength === 0;
};
