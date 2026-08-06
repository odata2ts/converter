# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.4 to ^0.2.5

### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.5 to ^0.2.6

## [2.0.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-example-v1.0.2...@odata2ts/converter-example-v2.0.0) (2026-08-06)


### ⚠ BREAKING CHANGES

* **converter-api:** `from`/`to` no longer split a string at the last dot. A third-party converter still declaring `to: "luxon.DateTime"` now means a type of that literal name and gets no import - it has to become `to: { module: "luxon", type: "DateTime" }`. This is deliberately not auto-detected: guessing whether a dot separates a module is the behaviour being removed, and it would misread a legitimate global like "Intl.DateTimeFormat". The export `getPropTypeAndModule` was removed from @odata2ts/converter-runtime.

### Features

* **converter-api:** state a type's module explicitly instead of encoding it in a dotted string ([#59](https://github.com/odata2ts/converter/issues/59)) ([f3789c7](https://github.com/odata2ts/converter/commit/f3789c79ea452da8bd8c071ff4e363f666d10676))


### Bug Fixes

* load prettier.config.js correctly under CommonJS ([#46](https://github.com/odata2ts/converter/issues/46)) ([3fa2c9a](https://github.com/odata2ts/converter/commit/3fa2c9a46d46ee640e9be286145ad0cbbd90bd1d))
* update to TypeScript 6.0.3 and migrate to nodenext resolution ([018355e](https://github.com/odata2ts/converter/commit/018355eeeca92b82eba8c556d0dd11ac35b396c8))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.6 to ^0.3.0

## 1.0.0 (2025-02-08)


### ⚠ BREAKING CHANGES

* switch to ES modules which might break things.

### Features

* **converter-runtime:** support fixing converters ([#23](https://github.com/odata2ts/converter/issues/23)) ([8beeffc](https://github.com/odata2ts/converter/commit/8beeffc0f791949ad4b524cb844b0701b4dfc628))


### Code Refactoring

* replace jest with vitest & switch to ESM ([#18](https://github.com/odata2ts/converter/issues/18)) ([29754ab](https://github.com/odata2ts/converter/commit/29754abec8617cfe45f647ffbf91e92586b79ee9))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.3 to ^0.2.4

## [0.4.1](https://github.com/odata2ts/converter/compare/@odata2ts/converter-example@0.4.0...@odata2ts/converter-example@0.4.1) (2024-12-18)

**Note:** Version bump only for package @odata2ts/converter-example






# 0.4.0 (2024-08-25)


### Code Refactoring

* replace jest with vitest & switch to ESM ([#18](https://github.com/odata2ts/converter/issues/18)) ([29754ab](https://github.com/odata2ts/converter/commit/29754abec8617cfe45f647ffbf91e92586b79ee9))


### Features

* **converter-runtime:** support fixing converters ([#23](https://github.com/odata2ts/converter/issues/23)) ([8beeffc](https://github.com/odata2ts/converter/commit/8beeffc0f791949ad4b524cb844b0701b4dfc628))


### BREAKING CHANGES

* switch to ES modules which might break things.





## [0.3.1](https://github.com/odata2ts/converter/compare/@odata2ts/test-converters@0.3.0...@odata2ts/test-converters@0.3.1) (2024-08-24)

**Note:** Version bump only for package @odata2ts/test-converters





# [0.3.0](https://github.com/odata2ts/converter/compare/@odata2ts/test-converters@0.2.4...@odata2ts/test-converters@0.3.0) (2024-08-13)


### Code Refactoring

* replace jest with vitest & switch to ESM ([#18](https://github.com/odata2ts/converter/issues/18)) ([29754ab](https://github.com/odata2ts/converter/commit/29754abec8617cfe45f647ffbf91e92586b79ee9))


### BREAKING CHANGES

* switch to ES modules which might break things.





## [0.2.4](https://github.com/odata2ts/converter/compare/@odata2ts/test-converters@0.2.3...@odata2ts/test-converters@0.2.4) (2023-05-22)

**Note:** Version bump only for package @odata2ts/test-converters





## [0.2.3](https://github.com/odata2ts/odata2ts/compare/@odata2ts/test-converters@0.2.2...@odata2ts/test-converters@0.2.3) (2023-04-08)

**Note:** Version bump only for package @odata2ts/test-converters






## [0.2.2](https://github.com/odata2ts/odata2ts/compare/@odata2ts/test-converters@0.2.1...@odata2ts/test-converters@0.2.2) (2023-01-07)

**Note:** Version bump only for package @odata2ts/test-converters





## [0.2.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/test-converters@0.2.0...@odata2ts/test-converters@0.2.1) (2022-12-21)

**Note:** Version bump only for package @odata2ts/test-converters





# 0.2.0 (2022-12-18)

**Note:** Version bump only for package @odata2ts/test-converters
