import { Fixture } from "./schema.js";

const BASE_URL = "https://fantasy.premierleague.com/api";

/**
 *
 * @param event The ID of the event to fetch fixtures for.
 * @returns Fixtures for the event.
 */
export const getEventFixtures = async ({
  event,
}: {
  event: number;
}): Promise<Fixture[]> => {
  const response = await fetch(`${BASE_URL}/fixtures/?event=${event}`);
  const data = await response.json();

  return data;
};
