[![npm (scoped)](https://img.shields.io/npm/v/@odata2ts/converter-common?style=for-the-badge)](https://www.npmjs.com/package/@odata2ts/converter-common)

# Common Converters

Common converters compatible with [odata2ts](https://github.com/odata2ts/odata2ts).

## Conversions

| OData Type           | Result Type      | Converter Id                  |  Description                                |
|----------------------|------------------|-------------------------------|---------------------------------------------|
| `Edm.DateTimeOffset` | `Date`           | dateTimeOffsetToDateConverter | Conversion to JS' date instance             |
| `Edm.Duration`       | `SimpleDuration` | simpleDurationConverter       | Result data type is provided by the package |
| `Edm.Int64`          | `bigint`         | int64ToBigIntConverter        | Converts to JS' built-in `bigint` type      |

By default, only the `dateTimeOffsetToDateConverter` is included when the whole converter package is used.
It's rather intended to pick the converters you need.

### `SimpleDuration`
The `SimpleDuration` type is provided by this package and represents the duration as simple object:
```ts
export interface SimpleDuration {
  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}
```
Note: `seconds` can be a fraction to represent milliseconds, e.g. `23.123` = 23 sec and 123 ms

## Installation

```
npm install --save @odata2ts/converter-common
```

## Documentation

[Common Converter Documentation](https://odata2ts.github.io/docs/generator/converters/common-converter)

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
