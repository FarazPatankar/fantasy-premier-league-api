import eslint from "@eslint/js";
import n from "eslint-plugin-n";
import vitest from "eslint-plugin-vitest";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "coverage*",
      "lib",
      "node_modules",
      "pnpm-lock.yaml",
      "**/*.snap",
    ],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
  eslint.configs.recommended,
  n.configs["flat/recommended"],
  ...tseslint.config({
    extends: tseslint.configs.recommendedTypeChecked,
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      parserOptions: {
        EXPERIMENTAL_useProjectService: {
          allowDefaultProjectForFiles: ["./*.*s", "eslint.config.js"],
          defaultProject: "./tsconfig.json",
        },
      },
    },
    rules: {
      // These on-by-default rules don't work well for this repo and we like them off.
      "no-constant-condition": "off",

      // These on-by-default rules work well for this repo if configured
      "@typescript-eslint/no-unused-vars": ["error", { caughtErrors: "all" }],
    },
  }),
  {
    files: ["*.jsonc"],
    rules: {
      "jsonc/comma-dangle": "off",
      "jsonc/no-comments": "off",
      "jsonc/sort-keys": "error",
    },
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ["**/*.md/*.ts"],
    rules: {
      "n/no-missing-import": [
        "error",
        { allowModules: ["fantasy-premier-league-api"] },
      ],
    },
  },
  {
    files: ["**/*.test.*"],
    languageOptions: {
      globals: vitest.environments.env.globals,
    },
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,

      // These on-by-default rules aren't useful in test files.
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
    },
  },
);
