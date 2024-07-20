import { ofetch } from "ofetch";

import { Fixture } from "./schema/fixture.js";
import { BootstrapStatic } from "./index.js";

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
  const response = await ofetch<Fixture[]>(
    `${BASE_URL}/fixtures/?event=${event}`,
  );

  return response;
};

/**
 * @returns All fixtures for every event.
 */
export const getAllFixtures = async (): Promise<Fixture[]> => {
  const response = await ofetch<Fixture[]>(`${BASE_URL}/fixtures/`);

  return response;
};

/**
 * Fetches the bootstrap-static endpoint data which returns:
 * - element_stats
 * - element_types
 * - elements
 * - events
 * - game_settings
 * - phases
 * - teams
 * - total_players
 */
export const getBootstrapStatic = async (): Promise<BootstrapStatic> => {
  const response = await ofetch<BootstrapStatic>(
    `${BASE_URL}/bootstrap-static/`,
  );

  return response;
};
