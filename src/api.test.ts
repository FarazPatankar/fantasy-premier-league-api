import { describe, expect, it } from "vitest";
import * as v from "valibot";

import { getEventFixtures } from "./api.js";
import {
  BootstrapStaticSchema,
  FixtureSchema,
  getBootstrapStatic,
} from "./index.js";

describe("api", () => {
  it("getEventFixtures", async () => {
    const response = await getEventFixtures({ event: 38 });
    const result = v.safeParse(v.array(FixtureSchema), response);

    expect(result.success).toBe(true);
  });

  it("getBootstrapStatic", async () => {
    const response = await getBootstrapStatic();
    const result = v.safeParse(BootstrapStaticSchema, response);

    expect(result.success).toBe(true);
  });
});
