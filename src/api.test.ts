import { describe, expect, it } from "vitest";
import * as v from "valibot";

import { getEventFixtures } from "./api.js";
import { FixtureSchema } from "./schema.js";

describe("api", () => {
  it("getEventFixtures", async () => {
    const response = await getEventFixtures({ event: 38 });
    const result = v.safeParse(v.array(FixtureSchema), response);

    expect(result.success).toBe(true);
  });
});
