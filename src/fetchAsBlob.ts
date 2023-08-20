export const fetchAsBlob = async (url: string): Promise<Blob> => {
  const response = await fetch(url);
  return await response.blob();
};
