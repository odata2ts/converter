[![npm (scoped)](https://img.shields.io/npm/v/@odata2ts/converter-decimal?style=for-the-badge)](https://www.npmjs.com/package/@odata2ts/converter-decimal)

# Decimal Converter

[decimal.js](https://github.com/MikeMcl/decimal.js/) based [odata2ts](https://github.com/odata2ts/odata2ts)
compatible converter for OData's `Edm.Int64` and `Edm.Decimal` types.

## Comparison to bignumber.js

From [the comparison](https://github.com/MikeMcl/big.js/wiki):

> decimal.js was orginally developed through adding support for non-integer powers to bignumber.js,
> but I decided to release it as a separate library. The main difference between them is that precision
> is specified in terms of significant digits in decimal.js instead of decimal places, and all calculations
> are rounded to that precision (similar to Python's decimal module) rather than just those involving division.

> bignumber.js is perhaps more suitable for financial applications because the user doesn't need to worry
> about losing precision unless an operation involving division is used.

> decimal.js may be better for more scientific applications as it can handle very small or large values more
> efficiently. For example, it does not have the limitation of bignumber.js that when adding a value with
> a small exponent to one with a large exponent, bignumber.js will attempt to perform the operation to full precision,
> which may make the time taken for the operation unviable.

> As mentioned above, decimal.js also supports non-integer powers and adds the trigonometric functions
> and exp, ln, and log methods. These additions make decimal.js significantly larger than bignumber.js.

## Conversions

| OData Type    | Result Type | Converter Id     | Description                                                        |
| ------------- | ----------- | ---------------- | ------------------------------------------------------------------ |
| `Edm.Int64`   | `Decimal`   | decimalConverter | see [Decimal documentation](https://mikemcl.github.io/decimal.js/) |
| `Edm.Decimal` | `Decimal`   | decimalConverter | see [Decimal documentation](https://mikemcl.github.io/decimal.js/) |

## Installation

As usual:

```
npm install --save @odata2ts/converter-decimal
```

Note, that this converter expects, that you install `decimal.js` by yourself:

```
npm install --save decimal.js
```

## Documentation

[Decimal Converter Documentation](https://odata2ts.github.io/docs/generator/converters/decimal-converter)

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
