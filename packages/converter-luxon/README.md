[![npm (scoped)](https://img.shields.io/npm/v/@odata2ts/converter-luxon?style=for-the-badge)](https://www.npmjs.com/package/@odata2ts/converter-luxon)

# Luxon Converters

[Luxon](https://moment.github.io/luxon) based [odata2ts](https://github.com/odata2ts/odata2ts) compatible converters for date and time related OData types.

User facing data types:
* [DateTime](https://moment.github.io/luxon/api-docs/index.html#datetime)
* [Duration](https://moment.github.io/luxon/api-docs/index.html#duration)

## Conversions

| OData Type           | Result Type | Converter Id                   | Description                                                                     |
|----------------------|-------------|--------------------------------|---------------------------------------------------------------------------------|
| `Edm.DateTimeOffset` | `DateTime`  | dateTimeOffsetToLuxonConverter |                                                                                 |
| `Edm.Date`           | `DateTime`  | dateToLuxonConverter           | Luxon's DateTime will still have the time part, which should be ignored by user |
| `Edm.TimeOfDay`      | `DateTime`  | timeOfDayToLuxonConverter      | Luxon's DateTime will still have the date part, which should be ignored by user |
| `Edm.Duration`       | `Duration`  | durationToLuxonConverter       |                                                                                 |


## Installation
Note: This converter expects, that Luxon itself has been already installed, 
it doesn't pull Luxon automatically into your project. So if not already present, also install `luxon`.

```
npm install --save @odata2ts/converter-luxon
```

## Documentation

[Luxon-Converter Documentation](https://odata2ts.github.io/docs/generator/converters/luxon-converter)

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
