# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.3 to ^0.2.4
  * devDependencies
    * @odata2ts/converter-example bumped from ^0.4.1 to ^1.0.0
    * @odata2ts/converter-luxon bumped from ^0.2.4 to ^0.2.5
    * @odata2ts/converter-v2-to-v4 bumped from ^0.5.4 to ^0.5.5

### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.4 to ^0.2.5
  * devDependencies
    * @odata2ts/converter-example bumped from ^1.0.0 to ^1.0.1
    * @odata2ts/converter-luxon bumped from ^0.2.5 to ^0.2.6
    * @odata2ts/converter-v2-to-v4 bumped from ^0.5.5 to ^0.5.6

## [0.6.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime-v0.5.5...@odata2ts/converter-runtime-v0.6.0) (2026-08-06)


### ⚠ BREAKING CHANGES

* **converter-api:** `from`/`to` no longer split a string at the last dot. A third-party converter still declaring `to: "luxon.DateTime"` now means a type of that literal name and gets no import - it has to become `to: { module: "luxon", type: "DateTime" }`. This is deliberately not auto-detected: guessing whether a dot separates a module is the behaviour being removed, and it would misread a legitimate global like "Intl.DateTimeFormat". The export `getPropTypeAndModule` was removed from @odata2ts/converter-runtime.

### Features

* **converter-api:** state a type's module explicitly instead of encoding it in a dotted string ([#59](https://github.com/odata2ts/converter/issues/59)) ([f3789c7](https://github.com/odata2ts/converter/commit/f3789c79ea452da8bd8c071ff4e363f666d10676))


### Bug Fixes

* **converter-runtime:** report actionable errors when loading converters ([d25471e](https://github.com/odata2ts/converter/commit/d25471e97cccc0433d014f3568f51b2d3baf21a4))
* load prettier.config.js correctly under CommonJS ([#46](https://github.com/odata2ts/converter/issues/46)) ([3fa2c9a](https://github.com/odata2ts/converter/commit/3fa2c9a46d46ee640e9be286145ad0cbbd90bd1d))
* update to TypeScript 6.0.3 and migrate to nodenext resolution ([018355e](https://github.com/odata2ts/converter/commit/018355eeeca92b82eba8c556d0dd11ac35b396c8))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.6 to ^0.3.0
  * devDependencies
    * @odata2ts/converter-example bumped from ^1.0.2 to ^2.0.0
    * @odata2ts/converter-luxon bumped from ^0.2.7 to ^0.3.0
    * @odata2ts/converter-v2-to-v4 bumped from ^0.5.7 to ^0.5.8

## [0.5.5](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime-v0.5.4...@odata2ts/converter-runtime-v0.5.5) (2025-02-08)


### Bug Fixes

* chained converters must respect & pass along options ([#38](https://github.com/odata2ts/converter/issues/38)) ([478be5b](https://github.com/odata2ts/converter/commit/478be5ba0694edcc10a0704e8108c527f88224be))

## [0.5.4](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime-v0.5.3...@odata2ts/converter-runtime-v0.5.4) (2025-02-08)


### Bug Fixes

* deployment without compiled code ([#36](https://github.com/odata2ts/converter/issues/36)) ([b2da86c](https://github.com/odata2ts/converter/commit/b2da86c5fffd4727198e5fcb0f34774376d5a7ba))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @odata2ts/converter-api bumped from ^0.2.5 to ^0.2.6
  * devDependencies
    * @odata2ts/converter-example bumped from ^1.0.1 to ^1.0.2
    * @odata2ts/converter-luxon bumped from ^0.2.6 to ^0.2.7
    * @odata2ts/converter-v2-to-v4 bumped from ^0.5.6 to ^0.5.7

## [0.5.1](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.5.0...@odata2ts/converter-runtime@0.5.1) (2024-12-18)

**Note:** Version bump only for package @odata2ts/converter-runtime






# [0.5.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.4.2...@odata2ts/converter-runtime@0.5.0) (2024-08-25)


### Features

* **converter-runtime:** support fixing converters ([#23](https://github.com/odata2ts/converter/issues/23)) ([8beeffc](https://github.com/odata2ts/converter/commit/8beeffc0f791949ad4b524cb844b0701b4dfc628))





## [0.4.2](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.4.1...@odata2ts/converter-runtime@0.4.2) (2024-08-24)

**Note:** Version bump only for package @odata2ts/converter-runtime





## [0.4.1](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.4.0...@odata2ts/converter-runtime@0.4.1) (2024-08-14)


### Bug Fixes

* add ".js" to all relative imports ([#21](https://github.com/odata2ts/converter/issues/21)) ([808d021](https://github.com/odata2ts/converter/commit/808d0217edf9b8b90062e412ddc8e956c865c01b))





# [0.4.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.3.0...@odata2ts/converter-runtime@0.4.0) (2024-08-13)


### Code Refactoring

* replace jest with vitest & switch to ESM ([#18](https://github.com/odata2ts/converter/issues/18)) ([29754ab](https://github.com/odata2ts/converter/commit/29754abec8617cfe45f647ffbf91e92586b79ee9))


### BREAKING CHANGES

* switch to ES modules which might break things.






# [0.3.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.2.2...@odata2ts/converter-runtime@0.3.0) (2023-08-30)


### Code Refactoring

* **v2-to-v4:** convert Ed.Time to Edm.TimeOfDay by default instead of Edm.Duration ([#16](https://github.com/odata2ts/converter/issues/16)) ([a3ffe54](https://github.com/odata2ts/converter/commit/a3ffe54a0ac23fc531b661d71c20de74baa0cd84))


### BREAKING CHANGES

* **v2-to-v4:** different converter used by default






## [0.2.2](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.2.1...@odata2ts/converter-runtime@0.2.2) (2023-07-30)


### Bug Fixes

* **runtime:** split package and type by last dot ([#11](https://github.com/odata2ts/converter/issues/11)) ([587fe56](https://github.com/odata2ts/converter/commit/587fe5670a4b281265351730752d4e309caa33c8))





## [0.2.1](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.2.0...@odata2ts/converter-runtime@0.2.1) (2023-07-21)

**Note:** Version bump only for package @odata2ts/converter-runtime





# [0.2.0](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.1.7...@odata2ts/converter-runtime@0.2.0) (2023-07-21)


### Features

* **v2-to-v4:** bigNumberNoopConverter ([#8](https://github.com/odata2ts/converter/issues/8)) ([e16c4f5](https://github.com/odata2ts/converter/commit/e16c4f5eedb6847f608d104089e7123c2086db2e))





## [0.1.7](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.1.6...@odata2ts/converter-runtime@0.1.7) (2023-05-23)

**Note:** Version bump only for package @odata2ts/converter-runtime





## [0.1.6](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.1.5...@odata2ts/converter-runtime@0.1.6) (2023-05-22)


### Bug Fixes

* **runtime:** adapt tests to changed v2-to-v4-converter ([239eaaf](https://github.com/odata2ts/converter/commit/239eaaf432efbebba95d15abd4d5e93c417a1ab1))






## [0.1.5](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.1.4...@odata2ts/converter-runtime@0.1.5) (2023-04-13)

**Note:** Version bump only for package @odata2ts/converter-runtime





## [0.1.4](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.1.3...@odata2ts/converter-runtime@0.1.4) (2023-04-12)


### Bug Fixes

* Critical dependency: the request of a dependency is an expression ([04cc8c6](https://github.com/odata2ts/converter/commit/04cc8c64de3ac4ca7ba05d632bbfd2d254fc6e72))






## [0.1.3](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.1.2...@odata2ts/converter-runtime@0.1.3) (2023-04-08)

**Note:** Version bump only for package @odata2ts/converter-runtime






## [0.1.2](https://github.com/odata2ts/converter/compare/@odata2ts/converter-runtime@0.1.1...@odata2ts/converter-runtime@0.1.2) (2023-01-07)


### Bug Fixes

* repo links ([32c5f27](https://github.com/odata2ts/converter/commit/32c5f277d8f0801c369c23be5355233030a97a40))
* syntax errors ([3001452](https://github.com/odata2ts/converter/commit/3001452589d456682dee07121a1c512b8f00e55a))





## [0.1.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/converter-runtime@0.1.0...@odata2ts/converter-runtime@0.1.1) (2022-12-21)

**Note:** Version bump only for package @odata2ts/converter-runtime





# 0.1.0 (2022-12-18)

**Note:** Version bump only for package @odata2ts/converter-runtime
