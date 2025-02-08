# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.5.6](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4-v0.5.5...@odata2ts/converter-v2-to-v4-v0.5.6) (2025-02-08)


### Bug Fixes

* pass along ISO8601 dates when using convertFrom ([ae7b407](https://github.com/odata2ts/converter/commit/ae7b4074fa49b50ea81d9cd0c8527fa80e586954))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.4 to ^0.2.5

## [0.5.5](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.5.4...@odata2ts/converter-v2-to-v4-v0.5.5) (2025-02-08)


### Bug Fixes

* don't convert Edm.DateTime for URL values ([#26](https://github.com/odata2ts/converter/issues/26)) ([311e5e4](https://github.com/odata2ts/converter/commit/311e5e4ac9dff32188630547927fccfb2df3a38d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.3 to ^0.2.4

## [0.5.4](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.5.3...@odata2ts/converter-v2-to-v4@0.5.4) (2024-12-18)

**Note:** Version bump only for package @odata2ts/converter-v2-to-v4






## [0.5.3](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.5.2...@odata2ts/converter-v2-to-v4@0.5.3) (2024-08-25)

**Note:** Version bump only for package @odata2ts/converter-v2-to-v4





## [0.5.2](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.5.1...@odata2ts/converter-v2-to-v4@0.5.2) (2024-08-24)

**Note:** Version bump only for package @odata2ts/converter-v2-to-v4





## [0.5.1](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.5.0...@odata2ts/converter-v2-to-v4@0.5.1) (2024-08-14)


### Bug Fixes

* add ".js" to all relative imports ([#21](https://github.com/odata2ts/converter/issues/21)) ([808d021](https://github.com/odata2ts/converter/commit/808d0217edf9b8b90062e412ddc8e956c865c01b))





# [0.5.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.4.0...@odata2ts/converter-v2-to-v4@0.5.0) (2024-08-13)


### Code Refactoring

* replace jest with vitest & switch to ESM ([#18](https://github.com/odata2ts/converter/issues/18)) ([29754ab](https://github.com/odata2ts/converter/commit/29754abec8617cfe45f647ffbf91e92586b79ee9))


### BREAKING CHANGES

* switch to ES modules which might break things.






# [0.4.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.3.1...@odata2ts/converter-v2-to-v4@0.4.0) (2023-08-30)


### Code Refactoring

* **v2-to-v4:** convert Ed.Time to Edm.TimeOfDay by default instead of Edm.Duration ([#16](https://github.com/odata2ts/converter/issues/16)) ([a3ffe54](https://github.com/odata2ts/converter/commit/a3ffe54a0ac23fc531b661d71c20de74baa0cd84))


### BREAKING CHANGES

* **v2-to-v4:** different converter used by default






## [0.3.1](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.3.0...@odata2ts/converter-v2-to-v4@0.3.1) (2023-07-21)

**Note:** Version bump only for package @odata2ts/converter-v2-to-v4





# [0.3.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.2.1...@odata2ts/converter-v2-to-v4@0.3.0) (2023-07-21)


### Features

* **v2-to-v4:** bigNumberNoopConverter ([#8](https://github.com/odata2ts/converter/issues/8)) ([e16c4f5](https://github.com/odata2ts/converter/commit/e16c4f5eedb6847f608d104089e7123c2086db2e))





## [0.2.1](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.2.0...@odata2ts/converter-v2-to-v4@0.2.1) (2023-05-23)

**Note:** Version bump only for package @odata2ts/converter-v2-to-v4





# [0.2.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.1.4...@odata2ts/converter-v2-to-v4@0.2.0) (2023-05-22)


### Bug Fixes

* add package test to assure ids and exports match ([4c70269](https://github.com/odata2ts/converter/commit/4c702692ec1c5f56ec4957822dc95989a08b3d78))
* **converter-v2-to-v4:** don't convert Int64 or Decimal to number ([5564504](https://github.com/odata2ts/converter/commit/55645041a4a887297e3cffa0ccdf20751c1da230))


### BREAKING CHANGES

* **converter-v2-to-v4:** we don't handle Int64 and Decimal anymore. It rarely makes sense to treat them as JS numbers (possible precision loss). So here we diverge from how V4 does things, but with a good reason






## [0.1.4](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.1.3...@odata2ts/converter-v2-to-v4@0.1.4) (2023-04-13)

**Note:** Version bump only for package @odata2ts/converter-v2-to-v4






## [0.1.3](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.1.2...@odata2ts/converter-v2-to-v4@0.1.3) (2023-04-08)

**Note:** Version bump only for package @odata2ts/converter-v2-to-v4






## [0.1.2](https://github.com/odata2ts/converter/compare/@odata2ts/converter-v2-to-v4@0.1.1...@odata2ts/converter-v2-to-v4@0.1.2) (2023-01-07)


### Bug Fixes

* repo links ([32c5f27](https://github.com/odata2ts/converter/commit/32c5f277d8f0801c369c23be5355233030a97a40))
* syntax errors ([3001452](https://github.com/odata2ts/converter/commit/3001452589d456682dee07121a1c512b8f00e55a))





## [0.1.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/converter-v2-to-v4@0.1.0...@odata2ts/converter-v2-to-v4@0.1.1) (2022-12-21)


### Bug Fixes

* **converter-v2-to-v4:** epoch time might be negative ([995b9fa](https://github.com/odata2ts/odata2ts/commit/995b9fa85031280612934c7cbd3246ef4814ce58))





# 0.1.0 (2022-12-18)

**Note:** Version bump only for package @odata2ts/converter-v2-to-v4
