[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/odata2ts/converter/coverage.yml?branch=main&style=for-the-badge)](https://github.com/odata2ts/converter/actions/workflows/coverage.yml)
[![Coveralls](https://img.shields.io/coveralls/github/odata2ts/converter?style=for-the-badge)](https://coveralls.io/github/odata2ts/converter?branch=main)

# Type Converter Package for odata2ts

This monorepo contains all modules relevant for [odata2ts](https://github.com/odata2ts/odata2ts) 
to realize data type conversions: From OData types to native JS types or third-party types and back:
- the `converter-runtime` package realizes the loading process of converters
- the `converter-api` package specifies converters and serves as contract between odata2ts and any converter implementation

It also contains converters you can use:
- [v2-to-v4-converter](https://www.npmjs.com/package/@odata2ts/converter-v2-to-v4)
  - you probably want V2 number types to be JS numbers
  - by converting v2 to v4 data types other converters only need to take care of V4 data types
  - makes switch between V2 and V4 versions of the same OData service more pain-free
- [luxon-converter](https://www.npmjs.com/package/@odata2ts/converter-luxon)
  - third-party `DateTime` type
  - third-party `Duration` type

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

* adhere to the **OData specification** as much as possible
  * support any OData service implementation which conforms to the spec
  * allow to work around faulty implementations if possible
* stability matters
  * exercise Test Driven Development
  * bomb the place with unit tests (code coverage > 95%)
  * ensure that assumptions & understanding are correct by creating integration tests

## License
MIT - see [License](./LICENSE).
