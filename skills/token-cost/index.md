# Token cost

> How many tokens each agent-skills skill costs an agent: the listing kept in every session, a run, the budget the check enforces and the references read on demand.

Every skill is measured, and every skill has a budget. The numbers are an estimate, characters / 4, the rule of thumb of the [`token-saver`](/skills/skill/token-saver/) skill. They come from the version in development, which ships in the next release; `agent-skills tokens` prints them for the version you have installed.

## The columns

- **Listing**: the name and description. An agent keeps them in context in every session, for every installed skill. `agent-skills init` installs only the skills that fit the project, so a project pays for fewer listings.
- **Run**: `SKILL.md` plus the references it loads by default, read each time the skill runs. What a run writes depends on the task and is not counted; scripts keep their output to a few lines.
- **Budget**: the ceiling of a run. The repository’s check fails when a skill grows past it, so a skill cannot get heavier by accident.
- **On demand**: the other reference files, read only when a step needs them.

All 57 skills together: listings 7480 tokens, runs 52598 tokens, on demand 22771 tokens.

## Per skill

| Skill | Stacks | Listing | Run | Budget | On demand |
| --- | --- | ---: | ---: | ---: | ---: |
| [`adr`](/skills/skill/adr/) | general | 116 | 1124 | 1300 | 0 |
| [`api-tests`](/skills/skill/api-tests/) | backend | 116 | 886 | 1050 | 728 |
| [`backend-tests`](/skills/skill/backend-tests/) | backend | 131 | 887 | 1050 | 901 |
| [`blast-radius`](/skills/skill/blast-radius/) | general | 120 | 500 | 600 | 0 |
| [`browser-check`](/skills/skill/browser-check/) | web | 116 | 668 | 800 | 0 |
| [`ci-setup`](/skills/skill/ci-setup/) | general | 124 | 898 | 1050 | 1578 |
| [`commit`](/skills/skill/commit/) | general | 125 | 771 | 900 | 1494 |
| [`correct`](/skills/skill/correct/) | general | 109 | 388 | 450 | 0 |
| [`db-migrations`](/skills/skill/db-migrations/) | database | 130 | 890 | 1050 | 806 |
| [`debug`](/skills/skill/debug/) | general | 111 | 819 | 950 | 0 |
| [`deps-update`](/skills/skill/deps-update/) | general | 109 | 904 | 1000 | 0 |
| [`design-review`](/skills/skill/design-review/) | web | 155 | 888 | 1050 | 0 |
| [`deslop`](/skills/skill/deslop/) | general | 131 | 483 | 600 | 0 |
| [`docker`](/skills/skill/docker/) | docker | 120 | 910 | 1050 | 0 |
| [`docs-sync`](/skills/skill/docs-sync/) | general | 126 | 1088 | 1300 | 0 |
| [`e2e-check`](/skills/skill/e2e-check/) | web | 132 | 1081 | 1250 | 0 |
| [`e2e-tests`](/skills/skill/e2e-tests/) | web | 107 | 813 | 950 | 543 |
| [`estimate`](/skills/skill/estimate/) | general | 117 | 660 | 750 | 0 |
| [`framework-guide`](/skills/skill/framework-guide/) | general | 175 | 783 | 850 | 5793 |
| [`gate-convention`](/skills/skill/gate-convention/) | general | 156 | 980 | 1150 | 0 |
| [`guide-tests`](/skills/skill/guide-tests/) | general | 145 | 1245 | 1400 | 0 |
| [`handoff`](/skills/skill/handoff/) | general | 98 | 783 | 900 | 0 |
| [`i18n`](/skills/skill/i18n/) | web | 115 | 805 | 950 | 0 |
| [`improve`](/skills/skill/improve/) | general | 111 | 432 | 500 | 0 |
| [`learn`](/skills/skill/learn/) | general | 157 | 883 | 1050 | 0 |
| [`load-test`](/skills/skill/load-test/) | backend | 121 | 807 | 950 | 0 |
| [`merge`](/skills/skill/merge/) | general | 129 | 545 | 650 | 0 |
| [`newsletter`](/skills/skill/newsletter/) | general | 187 | 1980 | 2250 | 1212 |
| [`orchestrate`](/skills/skill/orchestrate/) | general | 153 | 1216 | 1400 | 0 |
| [`pagespeed`](/skills/skill/pagespeed/) | web | 118 | 845 | 1000 | 954 |
| [`perf-backend`](/skills/skill/perf-backend/) | backend | 132 | 928 | 1100 | 805 |
| [`plan`](/skills/skill/plan/) | general | 107 | 630 | 750 | 0 |
| [`plan-step`](/skills/skill/plan-step/) | general | 133 | 1147 | 1350 | 0 |
| [`project`](/skills/skill/project/) | general | 138 | 771 | 900 | 0 |
| [`project-docs`](/skills/skill/project-docs/) | general | 115 | 1301 | 1500 | 0 |
| [`record-docs`](/skills/skill/record-docs/) | general | 132 | 449 | 550 | 0 |
| [`refactor`](/skills/skill/refactor/) | general | 128 | 902 | 1050 | 0 |
| [`release`](/skills/skill/release/) | general | 142 | 850 | 1000 | 0 |
| [`release-notes`](/skills/skill/release-notes/) | general | 119 | 730 | 850 | 0 |
| [`report`](/skills/skill/report/) | general | 112 | 419 | 500 | 0 |
| [`review`](/skills/skill/review/) | general | 166 | 955 | 1100 | 1098 |
| [`run-step`](/skills/skill/run-step/) | general | 136 | 1354 | 1600 | 0 |
| [`security-audit`](/skills/skill/security-audit/) | general | 139 | 1596 | 1850 | 0 |
| [`seed`](/skills/skill/seed/) | skribly-app | 152 | 1232 | 1450 | 0 |
| [`seo-audit`](/skills/skill/seo-audit/) | web | 124 | 733 | 850 | 642 |
| [`slice`](/skills/skill/slice/) | skribly-app | 177 | 1527 | 1800 | 804 |
| [`spec`](/skills/skill/spec/) | general | 150 | 1132 | 1300 | 0 |
| [`standard`](/skills/skill/standard/) | general | 156 | 1332 | 1550 | 1762 |
| [`task`](/skills/skill/task/) | general | 136 | 1914 | 2200 | 1790 |
| [`test-loop`](/skills/skill/test-loop/) | general | 109 | 805 | 950 | 0 |
| [`token-saver`](/skills/skill/token-saver/) | general | 105 | 772 | 900 | 0 |
| [`tracker-write`](/skills/skill/tracker-write/) | general | 123 | 472 | 550 | 0 |
| [`train-skills`](/skills/skill/train-skills/) | general | 186 | 1008 | 1150 | 0 |
| [`upgrade`](/skills/skill/upgrade/) | general | 130 | 935 | 1100 | 0 |
| [`verify`](/skills/skill/verify/) | general | 135 | 669 | 700 | 0 |
| [`wcag-audit`](/skills/skill/wcag-audit/) | web | 104 | 716 | 850 | 1281 |
| [`writing`](/skills/skill/writing/) | general | 134 | 1357 | 1600 | 580 |

How the skills save tokens beyond their own size, with measurements: [How it works](/skills/how-it-works/#cheap-on-tokens) and [Token saving](/agent/token-saving/).
