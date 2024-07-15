import { describe, expect, it } from "vitest";
import { dummyFn } from "./api.js";

describe("api", () => {
	it("returns true", () => {
		const response = dummyFn();

		expect(response).toBe(true);
	});
});
