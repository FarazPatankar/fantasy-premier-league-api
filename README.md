<h1 align="center">Fantasy Premier League API</h1>

<p align="center">A type-safe wrapper for the Fantasy Premier League API.</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 2" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-2-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/FarazPatankar/fantasy-premier-league-api/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/FarazPatankar/fantasy-premier-league-api" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/FarazPatankar/fantasy-premier-league-api?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/FarazPatankar/fantasy-premier-league-api/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/fantasy-premier-league-api"><img alt="📦 npm version" src="https://img.shields.io/npm/v/fantasy-premier-league-api?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npm i fantasy-premier-league-api
```

### getBootstrapStatic

Get the bootstrap-static endpoint data which returns:

- element_stats
- element_types
- elements
- events
- game_settings
- phases
- teams
- total_players
- defensive_contribution
- clearances_blocks_interceptions
- recoveries
- tackles
- price_change_calibrating
- price_change_hourly_rate
- price_change_locked_until
- price_change_percent
- price_change_projections

```ts
import { getBootstrapStatic } from "fantasy-premier-league-api";

const bootstrap = await getBootstrapStatic();
```

### getEventFixtures

Get the fixtures for a specific event.

```ts
import { getEventFixtures } from "fantasy-premier-league-api";

const fixtures = await getEventFixtures({ event: 1 });
```

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://farazpatankar.com/"><img src="https://avatars.githubusercontent.com/u/10681116?v=4?s=100" width="100px;" alt="Faraz Patankar"/><br /><sub><b>Faraz Patankar</b></sub></a><br /><a href="https://github.com/FarazPatankar/fantasy-premier-league-api/commits?author=FarazPatankar" title="Code">💻</a> <a href="#content-FarazPatankar" title="Content">🖋</a> <a href="https://github.com/FarazPatankar/fantasy-premier-league-api/commits?author=FarazPatankar" title="Documentation">📖</a> <a href="#ideas-FarazPatankar" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-FarazPatankar" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-FarazPatankar" title="Maintenance">🚧</a> <a href="#projectManagement-FarazPatankar" title="Project Management">📆</a> <a href="#tool-FarazPatankar" title="Tools">🔧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com/"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app).
