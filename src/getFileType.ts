export const getFileType = (file: File): string => {
  const extension = file.name.split(".").pop()?.toLowerCase() || "";
  switch (extension) {
    case "txt":
      return "Text";
    case "js":
      return "JavaScript";
    case "ts":
      return "TypeScript";
    case "json":
      return "JSON";
    default:
      return "Unknown";
  }
};
