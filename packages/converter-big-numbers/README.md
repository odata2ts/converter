[![npm (scoped)](https://img.shields.io/npm/v/@odata2ts/converter-big-numbers?style=for-the-badge)](https://www.npmjs.com/package/@odata2ts/converter-big-numbers)

# Big Number Converters

[odata2ts](https://github.com/odata2ts/odata2ts) compatible converters for OData's `Edm.Int64` and `Edm.Decimal` types.
This package allows usage of one of the number types provided by MikMcl:

- [big.js](https://github.com/MikeMcl/big.js/): the minimal version
- [bignumber.js](https://github.com/MikeMcl/bignumber.js): full decimal and non-decimal arithmetic (recommended for advanced financial stuff)
- [decimal.js](https://github.com/MikeMcl/decimal.js/): full decimal and non-decimal arithmetic (recommended for scientific usage)

See [the comparison](https://github.com/MikeMcl/big.js/wiki).

## Conversions

| OData Type                    | Result Type | Converter Id       | Description                                                            |
| ----------------------------- | ----------- | ------------------ | ---------------------------------------------------------------------- |
| `Edm.Int64`<br/>`Edm.Decimal` | `Big`       | BigConverter       | see [Big documentation](https://mikemcl.github.io/big.js/)             |
| `Edm.Int64`<br/>`Edm.Decimal` | `BigNumber` | BigNumberConverter | see [BigNumber documentation](https://mikemcl.github.io/bignumber.js/) |
| `Edm.Int64`<br/>`Edm.Decimal` | `Decimal`   | DecimalConverter   | see [Decimal documentation](https://mikemcl.github.io/decimal.js/)     |

## Installation

As usual:

```
npm install --save @odata2ts/converter-big-numbers
```

Note, that this converter expects, that you install the library that you want to use by yourself.
So one of the following:

- `npm install --save big.js`
- `npm install --save bignumber.js`
- `npm install --save decimal.js`

## Documentation

[Big Number Converter Documentation](https://odata2ts.github.io/docs/generator/converters/bignumber-converter)

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
