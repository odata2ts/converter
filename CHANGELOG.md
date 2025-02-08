# Changelog

## 1.0.0 (2025-02-08)


### ⚠ BREAKING CHANGES

* switch to ES modules which might break things.
* **v2-to-v4:** different converter used by default
* **common:** package common only exports dateTimeOffsetToDate converter as default
* **converter-v2-to-v4:** we don't handle Int64 and Decimal anymore. It rarely makes sense to treat them as JS numbers (possible precision loss). So here we diverge from how V4 does things, but with a good reason

### Features

* **big-numbers:** new package offering BigNumber, Big or Decimal ([#10](https://github.com/odata2ts/converter/issues/10)) ([77aee67](https://github.com/odata2ts/converter/commit/77aee67eef5ee33e29bc5c47c06ae64c5498a953))
* **build:** release please ([#29](https://github.com/odata2ts/converter/issues/29)) ([24a1bce](https://github.com/odata2ts/converter/commit/24a1bce213cdd376970966e48e28db2d62ad46d1))
* **common:** add simple time converter ([#15](https://github.com/odata2ts/converter/issues/15)) ([ffeb0f3](https://github.com/odata2ts/converter/commit/ffeb0f3294e39560fcec0b56bd1ca4edbfa8112d))
* **common:** bigIntConverter ([#5](https://github.com/odata2ts/converter/issues/5)) ([d6854f6](https://github.com/odata2ts/converter/commit/d6854f6c1081fd0f2ad60e6f7f53e7b9c0bdeec3))
* **common:** introduce common converter package ([#3](https://github.com/odata2ts/converter/issues/3)) ([e63f5dc](https://github.com/odata2ts/converter/commit/e63f5dc0d6cdb1399d275912f039927b0fe7ed7b))
* **converter-runtime:** support fixing converters ([#23](https://github.com/odata2ts/converter/issues/23)) ([8beeffc](https://github.com/odata2ts/converter/commit/8beeffc0f791949ad4b524cb844b0701b4dfc628))
* **example:** example & int-test for v2Tov4 and common converter ([#4](https://github.com/odata2ts/converter/issues/4)) ([06c84eb](https://github.com/odata2ts/converter/commit/06c84ebed5c82d305f2472e7ac90880425ed17c0))
* promote minor version ([dbfb89c](https://github.com/odata2ts/converter/commit/dbfb89c5d3dd84202fe7ff2aa147d394484d7fbf))
* **ui5-v2:** Create converter for interop with UI5 V2 ODataModel ([#6](https://github.com/odata2ts/converter/issues/6)) ([7968787](https://github.com/odata2ts/converter/commit/79687876f0549a7a91cd583514b6e3ab8d90ffd8))
* **v2-to-v4:** bigNumberNoopConverter ([#8](https://github.com/odata2ts/converter/issues/8)) ([e16c4f5](https://github.com/odata2ts/converter/commit/e16c4f5eedb6847f608d104089e7123c2086db2e))


### Bug Fixes

* **#130:** sourcemaps with inline sources ([a820c1e](https://github.com/odata2ts/converter/commit/a820c1ed4c251ae2e3766ee824804cb6aa269dd8))
* add ".js" to all relative imports ([#21](https://github.com/odata2ts/converter/issues/21)) ([808d021](https://github.com/odata2ts/converter/commit/808d0217edf9b8b90062e412ddc8e956c865c01b))
* add package test to assure ids and exports match ([4c70269](https://github.com/odata2ts/converter/commit/4c702692ec1c5f56ec4957822dc95989a08b3d78))
* converter-api has no dependency ([#25](https://github.com/odata2ts/converter/issues/25)) ([3ea3117](https://github.com/odata2ts/converter/commit/3ea31175273037a1d0e1107b1dabf561b52c9f45))
* **converter-v2-to-v4:** don't convert Int64 or Decimal to number ([5564504](https://github.com/odata2ts/converter/commit/55645041a4a887297e3cffa0ccdf20751c1da230))
* **converter-v2-to-v4:** epoch time might be negative ([995b9fa](https://github.com/odata2ts/converter/commit/995b9fa85031280612934c7cbd3246ef4814ce58))
* Critical dependency: the request of a dependency is an expression ([04cc8c6](https://github.com/odata2ts/converter/commit/04cc8c64de3ac4ca7ba05d632bbfd2d254fc6e72))
* don't convert Edm.DateTime for URL values ([#26](https://github.com/odata2ts/converter/issues/26)) ([311e5e4](https://github.com/odata2ts/converter/commit/311e5e4ac9dff32188630547927fccfb2df3a38d))
* repo links ([32c5f27](https://github.com/odata2ts/converter/commit/32c5f277d8f0801c369c23be5355233030a97a40))
* **runtime:** adapt tests to changed v2-to-v4-converter ([239eaaf](https://github.com/odata2ts/converter/commit/239eaaf432efbebba95d15abd4d5e93c417a1ab1))
* **runtime:** split package and type by last dot ([#11](https://github.com/odata2ts/converter/issues/11)) ([587fe56](https://github.com/odata2ts/converter/commit/587fe5670a4b281265351730752d4e309caa33c8))
* syntax errors ([3001452](https://github.com/odata2ts/converter/commit/3001452589d456682dee07121a1c512b8f00e55a))
* wrong package name for type MsDuration ([530c801](https://github.com/odata2ts/converter/commit/530c8019ddea383e0f478a0670cb3bbc2f55aefb))


### Code Refactoring

* replace jest with vitest & switch to ESM ([#18](https://github.com/odata2ts/converter/issues/18)) ([29754ab](https://github.com/odata2ts/converter/commit/29754abec8617cfe45f647ffbf91e92586b79ee9))
* **v2-to-v4:** convert Ed.Time to Edm.TimeOfDay by default instead of Edm.Duration ([#16](https://github.com/odata2ts/converter/issues/16)) ([a3ffe54](https://github.com/odata2ts/converter/commit/a3ffe54a0ac23fc531b661d71c20de74baa0cd84))
