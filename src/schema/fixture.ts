import * as v from "valibot";

enum FixtureStatIdentifier {
  GOALS_SCORED = "goals_scored",
  ASSISTS = "assists",
  OWN_GOALS = "own_goals",
  CLEAN_SHEETS = "clean_sheets",
  GOALS_CONCEDED = "goals_conceded",
  PENALTIES_SAVED = "penalties_saved",
  PENALTIES_MISSED = "penalties_missed",
  YELLOW_CARDS = "yellow_cards",
  RED_CARDS = "red_cards",
  SAVES = "saves",
  BONUS = "bonus",
  BPS = "bps",
  DEFENSIVE_CONTRIBUTION = "defensive_contribution"
}

const FixtureStatIdentifierSchema = v.enum(FixtureStatIdentifier);

const FixtureStatMapSchema = v.object({
  value: v.number(),
  element: v.number(),
});

const FixtureStatSchema = v.object({
  identifier: FixtureStatIdentifierSchema,
  a: v.array(FixtureStatMapSchema),
  h: v.array(FixtureStatMapSchema),
});

export const FixtureSchema = v.object({
  code: v.number(),
  event: v.number(),
  finished: v.boolean(),
  finished_provisional: v.boolean(),
  id: v.number(),
  kickoff_time: v.string(),
  minutes: v.number(),
  provisional_start_time: v.boolean(),
  started: v.boolean(),
  team_a: v.number(),
  team_a_score: v.nullable(v.number()),
  team_h: v.number(),
  team_h_score: v.nullable(v.number()),
  stats: v.array(FixtureStatSchema),
  team_h_difficulty: v.number(),
  team_a_difficulty: v.number(),
  pulse_id: v.number(),
});

export type Fixture = v.InferOutput<typeof FixtureSchema>;
