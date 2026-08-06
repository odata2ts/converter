# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.3 to ^0.2.4

### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.4 to ^0.2.5

## [0.3.1](https://github.com/odata2ts/converter/compare/@odata2ts/converter-big-number-v0.3.0...@odata2ts/converter-big-number-v0.3.1) (2026-08-06)


### Bug Fixes

* **converter-big-number:** type the converter on BigNumber, not BigNumber.Instance ([#64](https://github.com/odata2ts/converter/issues/64)) ([73568f0](https://github.com/odata2ts/converter/commit/73568f031cf72ad7090112cd25dd50a06cac67dc))

## [0.3.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-big-number-v0.2.8...@odata2ts/converter-big-number-v0.3.0) (2026-08-06)


### ⚠ BREAKING CHANGES

* **converter-api:** `from`/`to` no longer split a string at the last dot. A third-party converter still declaring `to: "luxon.DateTime"` now means a type of that literal name and gets no import - it has to become `to: { module: "luxon", type: "DateTime" }`. This is deliberately not auto-detected: guessing whether a dot separates a module is the behaviour being removed, and it would misread a legitimate global like "Intl.DateTimeFormat". The export `getPropTypeAndModule` was removed from @odata2ts/converter-runtime.

### Features

* **converter-api:** state a type's module explicitly instead of encoding it in a dotted string ([#59](https://github.com/odata2ts/converter/issues/59)) ([f3789c7](https://github.com/odata2ts/converter/commit/f3789c79ea452da8bd8c071ff4e363f666d10676))


### Bug Fixes

* align NaN handling and bignumber.js dependency declaration of the big number converters ([b887971](https://github.com/odata2ts/converter/commit/b887971621984cdf13a338818d70cfdcc4a5f35f))
* **converter-big-number:** update bignumber.js to v11 ([3d4e7e6](https://github.com/odata2ts/converter/commit/3d4e7e6f38f099faa66b34413bd8dc5b0ded4701))
* load prettier.config.js correctly under CommonJS ([#46](https://github.com/odata2ts/converter/issues/46)) ([3fa2c9a](https://github.com/odata2ts/converter/commit/3fa2c9a46d46ee640e9be286145ad0cbbd90bd1d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.6 to ^0.3.0

## [0.2.8](https://github.com/odata2ts/converter/compare/@odata2ts/converter-big-number-v0.2.7...@odata2ts/converter-big-number-v0.2.8) (2026-07-14)


### Bug Fixes

* **big-number:** convertTo with conform signature not accepting strings as input ([#42](https://github.com/odata2ts/converter/issues/42)) ([36c6475](https://github.com/odata2ts/converter/commit/36c6475e151cc759f0b84a59c31722069981d7b1))

## [0.2.7](https://github.com/odata2ts/converter/compare/@odata2ts/converter-big-number-v0.2.6...@odata2ts/converter-big-number-v0.2.7) (2025-02-08)


### Bug Fixes

* deployment without compiled code ([#36](https://github.com/odata2ts/converter/issues/36)) ([b2da86c](https://github.com/odata2ts/converter/commit/b2da86c5fffd4727198e5fcb0f34774376d5a7ba))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.5 to ^0.2.6

## [0.2.4](https://github.com/odata2ts/converter/compare/@odata2ts/converter-big-number@0.2.3...@odata2ts/converter-big-number@0.2.4) (2024-12-18)

**Note:** Version bump only for package @odata2ts/converter-big-number






## [0.2.3](https://github.com/odata2ts/converter/compare/@odata2ts/converter-big-number@0.2.2...@odata2ts/converter-big-number@0.2.3) (2024-08-25)

**Note:** Version bump only for package @odata2ts/converter-big-number





## [0.2.2](https://github.com/odata2ts/converter/compare/@odata2ts/converter-big-number@0.2.1...@odata2ts/converter-big-number@0.2.2) (2024-08-24)

**Note:** Version bump only for package @odata2ts/converter-big-number





## [0.2.1](https://github.com/odata2ts/converter/compare/@odata2ts/converter-big-number@0.2.0...@odata2ts/converter-big-number@0.2.1) (2024-08-14)


### Bug Fixes

* add ".js" to all relative imports ([#21](https://github.com/odata2ts/converter/issues/21)) ([808d021](https://github.com/odata2ts/converter/commit/808d0217edf9b8b90062e412ddc8e956c865c01b))





# [0.2.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-big-number@0.1.0...@odata2ts/converter-big-number@0.2.0) (2024-08-13)


### Code Refactoring

* replace jest with vitest & switch to ESM ([#18](https://github.com/odata2ts/converter/issues/18)) ([29754ab](https://github.com/odata2ts/converter/commit/29754abec8617cfe45f647ffbf91e92586b79ee9))


### BREAKING CHANGES

* switch to ES modules which might break things.





# [0.1.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-big-number@0.0.1...@odata2ts/converter-big-number@0.1.0) (2023-07-31)


### Features

* promote minor version ([dbfb89c](https://github.com/odata2ts/converter/commit/dbfb89c5d3dd84202fe7ff2aa147d394484d7fbf))





## 0.0.1 (2023-07-30)

**Note:** Version bump only for package @odata2ts/converter-big-number






# 0.1.0 (2023-07-30)


### Features

* **big-numbers:** new package offering BigNumber, Big or Decimal ([#10](https://github.com/odata2ts/converter/issues/10)) ([77aee67](https://github.com/odata2ts/converter/commit/77aee67eef5ee33e29bc5c47c06ae64c5498a953))
