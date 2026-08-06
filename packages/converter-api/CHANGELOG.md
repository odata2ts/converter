# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-api-v0.2.6...@odata2ts/converter-api-v0.3.0) (2026-08-06)


### ⚠ BREAKING CHANGES

* **converter-api:** `from`/`to` no longer split a string at the last dot. A third-party converter still declaring `to: "luxon.DateTime"` now means a type of that literal name and gets no import - it has to become `to: { module: "luxon", type: "DateTime" }`. This is deliberately not auto-detected: guessing whether a dot separates a module is the behaviour being removed, and it would misread a legitimate global like "Intl.DateTimeFormat". The export `getPropTypeAndModule` was removed from @odata2ts/converter-runtime.

### Features

* **converter-api:** state a type's module explicitly instead of encoding it in a dotted string ([#59](https://github.com/odata2ts/converter/issues/59)) ([f3789c7](https://github.com/odata2ts/converter/commit/f3789c79ea452da8bd8c071ff4e363f666d10676))


### Bug Fixes

* load prettier.config.js correctly under CommonJS ([#46](https://github.com/odata2ts/converter/issues/46)) ([3fa2c9a](https://github.com/odata2ts/converter/commit/3fa2c9a46d46ee640e9be286145ad0cbbd90bd1d))

## [0.2.6](https://github.com/odata2ts/converter/compare/@odata2ts/converter-api-v0.2.5...@odata2ts/converter-api-v0.2.6) (2025-02-08)


### Bug Fixes

* deployment without compiled code ([#36](https://github.com/odata2ts/converter/issues/36)) ([b2da86c](https://github.com/odata2ts/converter/commit/b2da86c5fffd4727198e5fcb0f34774376d5a7ba))

## [0.2.5](https://github.com/odata2ts/converter/compare/@odata2ts/converter-api-v0.2.4...@odata2ts/converter-api-v0.2.5) (2025-02-08)


### Bug Fixes

* add options to convertFrom as well ([0dffe1f](https://github.com/odata2ts/converter/commit/0dffe1fe50bbae0d019c5bcbaeda02b925d5ac67))

## [0.2.4](https://github.com/odata2ts/converter/compare/@odata2ts/converter-api@0.2.3...@odata2ts/converter-api-v0.2.4) (2025-02-08)


### Bug Fixes

* don't convert Edm.DateTime for URL values ([#26](https://github.com/odata2ts/converter/issues/26)) ([311e5e4](https://github.com/odata2ts/converter/commit/311e5e4ac9dff32188630547927fccfb2df3a38d))

## [0.2.3](https://github.com/odata2ts/converter/compare/@odata2ts/converter-api@0.2.2...@odata2ts/converter-api@0.2.3) (2024-12-18)


### Bug Fixes

* converter-api has no dependency ([#25](https://github.com/odata2ts/converter/issues/25)) ([3ea3117](https://github.com/odata2ts/converter/commit/3ea31175273037a1d0e1107b1dabf561b52c9f45))






## [0.2.2](https://github.com/odata2ts/converter/compare/@odata2ts/converter-api@0.2.1...@odata2ts/converter-api@0.2.2) (2024-08-25)

**Note:** Version bump only for package @odata2ts/converter-api





## [0.2.1](https://github.com/odata2ts/converter/compare/@odata2ts/converter-api@0.2.0...@odata2ts/converter-api@0.2.1) (2024-08-24)

**Note:** Version bump only for package @odata2ts/converter-api





# [0.2.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-api@0.1.2...@odata2ts/converter-api@0.2.0) (2024-08-13)


### Code Refactoring

* replace jest with vitest & switch to ESM ([#18](https://github.com/odata2ts/converter/issues/18)) ([29754ab](https://github.com/odata2ts/converter/commit/29754abec8617cfe45f647ffbf91e92586b79ee9))


### BREAKING CHANGES

* switch to ES modules which might break things.





## [0.1.2](https://github.com/odata2ts/converter/compare/@odata2ts/converter-api@0.1.1...@odata2ts/converter-api@0.1.2) (2023-04-08)

**Note:** Version bump only for package @odata2ts/converter-api






## [0.1.1](https://github.com/odata2ts/converter/compare/@odata2ts/converter-api@0.1.0...@odata2ts/converter-api@0.1.1) (2023-01-07)


### Bug Fixes

* repo links ([32c5f27](https://github.com/odata2ts/converter/commit/32c5f277d8f0801c369c23be5355233030a97a40))





# 0.1.0 (2022-12-18)

**Note:** Version bump only for package @odata2ts/converter-api
