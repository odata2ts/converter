[![npm (scoped)](https://img.shields.io/npm/v/@odata2ts/converter-v2-to-v4?style=for-the-badge)](https://www.npmjs.com/package/@odata2ts/converter-v2-to-v4)

# V2-to-V4 Converters

A set of [odata2ts](https://github.com/odata2ts/odata2ts) compatible converters to convert certain OData V2 types to their V4 analog.
Thus, other converters only need to take care of the V4 data models.

## Conversions

| OData V2 Type  | Result Type           | Converter Id                                       | Description                                                                                            |
| -------------- | --------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Edm.DateTime` | `Edm.DateTimeOffset`  | dateTimeToDateTimeOffsetConverter                  | Converts "/Date(123...)/" to ISO8601 "2022-02-22T12:00:00Z"; offsets are supported "/Date(123..+120)/" |
| `Edm.Byte`     | `number`              | stringToNumberConverter                            |                                                                                                        |
| `Edm.SByte`    | `number`              | stringToNumberConverter                            |                                                                                                        |
| `Edm.Single`   | `number`              | stringToNumberConverter                            |                                                                                                        |
| `Edm.Double`   | `number`              | stringToNumberConverter                            |                                                                                                        |
| `Edm.Int64`    | `number`<br/>`string` | stringToNumberConverter<br/>bigNumberNoopConverter | By default, converted to `number`, with the help of the noop converter `string`                        |
| `Edm.Decimal`  | `number`<br/>`string` | stringToNumberConverter<br/>bigNumberNoopConverter | By default, converted to `number`, with the help of the noop converter `string`                        |
| `Edm.Time`     | `Edm.TimeOfDay`       | timeToTimeOfDayConverter                           | Converts duration format to time format, e.g. `PT12H15M` to `12:15:00`                                 |
| `Edm.Time`     | `Edm.Duration`        | timeToDurationConverter                            | Relabels `Edm.Time` to `Edm.Duration` (no conversion required); not a default converter                |

### Note on Big Numbers

`Edm.Int64` & `Edm.Decimal` get converted to the `number` type as V4 does it.
However, please note that those numbers potentially don't fit into JS' number type,
which might result in precision loss.

In order to prevent such precision loss, you could use additional converters **after**
this converter, e.g. `int64ToBigIntConverter` from the common converter package.

Alternatively, you can use the `bigNumberNoopConverter` from this package to keep those
types as `string`. This would like this in the `odata2ts` configuration:

```ts
{
  converters: [{
    module: "@odata2ts/converter-v2-to-v4",
    use: [
      "stringToNumberConverter",
      "bigNumberNoopConverter",
      "dateTimeToDateTimeOffsetConverter",
      "timeToTimeOfDayConverter"
    ]
  }]
}
```

## Installation

```
npm install --save @odata2ts/converter-v2-to-v4
```

## Documentation

[V2-to-V4-Converter Documentation](https://odata2ts.github.io/docs/generator/converters/v2-to-v4-converter)

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
