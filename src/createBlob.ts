export const createBlob = (data: any) => {
  return new Blob(data, { type: "text/plain" });
};
