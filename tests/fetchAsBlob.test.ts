import { fetchAsBlob } from "../src/fetchAsBlob";

import fetch, { Response, Request } from "cross-fetch";
(global as any).fetch = fetch;
(global as any).Response = Response;
(global as any).Request = Request;

// jest-fetch-mock setup
import fetchMock from "jest-fetch-mock";
jest.setMock("cross-fetch", fetchMock);

describe("fetchAsBlob", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should fetch and return a blob", async () => {
    // Mock the URL and blob response
    const mockData = "test-data";
    const mockBlob = new Blob([mockData], { type: "text/plain" });
    fetchMock.mockOnce(mockData, { headers: { "Content-Type": "text/plain" } });

    const result = await fetchAsBlob("http://example.com/test-url");
    expect(result.size).toBe(mockBlob.size);
    expect(result.type).toBe(mockBlob.type);
  });

  it("should throw an error if the request fails", async () => {
    fetchMock.mockRejectOnce(new Error("Failed to fetch"));
    await expect(fetchAsBlob("http://example.com/error-url")).rejects.toThrow(
      "Failed to fetch"
    );
  });
});
