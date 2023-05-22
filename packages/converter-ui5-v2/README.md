[![npm (scoped)](https://img.shields.io/npm/v/@odata2ts/converter-ui5-v2?style=for-the-badge)](https://www.npmjs.com/package/@odata2ts/converter-ui5-v2)

# UI5 ODataModel V2 Converters

Converter package for interoperability between [odata2ts](https://github.com/odata2ts/odata2ts) and 
SAP's V2 ODataModel (`sap.ui.model.odata.v2.ODataModel`).

The `ODataModel` is not only responsible for the REST communication, but also takes care of data type conversion.
This converter package supplies `odata2ts` with all converters needed to use the same types as the `ODataModel` does.

This way you get the correct types, when generating model types which represent `sap.ui.model.odata.v2.ODataModel`
values. On the other hand, it also allows you to use the generated OData client in combination with the `ODataModel`.

## Conversions

This package adds only one special converter for converting `Edm.Time` to a custom object which holds the milliseconds
since midnight. All other converters are imported from other packages:
* converter-v2-to-v4
* converter-common

| OData Type           | JSON Rep. | Format                                           |    Data Type     | Uses                                                                |
|----------------------|-----------|--------------------------------------------------|:----------------:|---------------------------------------------------------------------|
| `Edm.DateTime`       | `string`  | `/Date(timestamp)/`                              |      `Date`      | dateTimeToDateTimeOffsetConverter<br/>dateTimeOffsetToDateConverter |
| `Edm.DateTimeOffset` | `string`  | ISO 8601 Date and Time<br/>with offsets          |      `Date`      | dateTimeOffsetToDateConverter                                       |
| `Edm.Time`           | `string`  | ISO 8601 Duration<br/>(limited to the time part) | `{ ms: number }` | timeToMsDurationConverter                                           |
| `Edm.Byte`           | `string`  |                                                  |     `number`     | stringToNumberConverter                                             |
| `Edm.SByte`          | `string`  |                                                  |     `number`     | stringToNumberConverter                                             |
| `Edm.Single`         | `string`  |                                                  |     `number`     | stringToNumberConverter                                             |
| `Edm.Double`         | `string`  |                                                  |     `number`     | stringToNumberConverter                                             |

## Installation

```
npm install --save @odata2ts/converter-ui5-v2
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
