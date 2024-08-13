[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/odata2ts/converter/coverage.yml?branch=main&style=for-the-badge)](https://github.com/odata2ts/converter/actions/workflows/coverage.yml)
[![Coveralls](https://img.shields.io/coveralls/github/odata2ts/converter?style=for-the-badge)](https://coveralls.io/github/odata2ts/converter?branch=main)

# Type Converter Package for odata2ts

This monorepo contains all modules relevant for [odata2ts](https://github.com/odata2ts/odata2ts)
to realize data type conversions: From OData types to native JS types or third-party types and back:

- the `converter-runtime` package realizes the loading process of converters
- the `converter-api` package specifies converters and serves as contract between odata2ts and any converter implementation

It also contains converters you can use:

- [V2-to-V4 Converters](https://www.npmjs.com/package/@odata2ts/converter-v2-to-v4)
  - V2 numeric types are converted from `string` to `number`
  - `Edm.Int64` and `Edm.Decimal` are not converted and remain type `string`
  - `Edm.DateTime` is converted to `Edm.DateTimeOffset`, i.e. proper ISO 8601 date and time presentation
  - `Edm.Time` is by default converted to `Edm.TimeOfDay` (ISO 8601 time), but can also be relabeled as `Edm.Duration`
- [Common Converters](https://www.npmjs.com/package/@odata2ts/converter-common)
  - `Edm.DateTimeOffset`: JavaScript `Date` type
  - `Edm.Duration`: simple duration object
  - `Edm.Int64`: JavaScript `bigint` type
- [Luxon Converters](https://www.npmjs.com/package/@odata2ts/converter-luxon)
  - `Edm.DateTimeOffset`: Luxon's `DateTime` type
  - `Edm.Date`: Luxon's `DateTime` type
  - `Edm.TimeOfDay`: Luxon's `DateTime` type
  - `Edm.Duration`: Luxon's `Duration` type
- [UI5 V2 Converters](https://www.npmjs.com/package/@odata2ts/converter-ui5-v2)
  - type alignment with UI5 V2 ODataModel (`sap.ui.model.odata.v2.ODataModel`)

Converters can be picked as a package (using the default converter set) or individually
by specifying each converter. If different converters handle the same data type, then the last converter wins.

Converters are chainable. This makes the `v2-to-v4 converter` utterly useful, because it spares
other converters the work and headaches to cope with V2 types and lets them focus on converting V4 data types.
For example, every `Edm.DateTime` gets converted to `Edm.DateTimeOffset`, so that the Luxon and the common converter
only need to handle `Edm.DateTimeOffset`.

## Background

While some OData types (`Edm.String`, `Edm.Boolean`, ...) can easily and perfectly be mapped to native JS types,
more advanced types are simply strings:

- `Edm.DateTimeOffset`: `"1999-31-12T23:59:59Z"`
- `Edm.Duration`: `"PT10H"`

As you can imagine, there are countless third-party libs and custom data structures
which could be used in these cases. Thus, the choice of how to map data types
must be left open to the user.

So either use an existing converter or roll your own.

## Documentation

[Converter Documentation](https://odata2ts.github.io/docs/generator/converters)

Main Documentation of odata2ts: [https://odata2ts.github.io/](https://odata2ts.github.io/)

## Support, Feedback, Contributing

This project is open to feature requests, suggestions, bug reports, usage questions etc.
via [GitHub issues](https://github.com/odata2ts/converter/issues).

Contributions and feedback are encouraged and always welcome.

See the [contribution guidelines](https://github.com/odata2ts/converter/blob/main/CONTRIBUTING.md) for further information.

## Spirit

This project has been created and is maintained in the following spirit:

- adhere to the **OData specification** as much as possible
  - support any OData service implementation which conforms to the spec
  - allow to work around faulty implementations if possible
- stability matters
  - exercise Test Driven Development
  - bomb the place with unit tests (code coverage > 95%)
  - ensure that assumptions & understanding are correct by creating integration tests

## License

MIT - see [License](./LICENSE).
