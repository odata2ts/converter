[![npm (scoped)](https://img.shields.io/npm/v/@odata2ts/converter-runtime?style=for-the-badge)](https://www.npmjs.com/package/@odata2ts/converter-runtime)

# Converter Runtime for odata2ts

Provides necessary implementations for using [odata2ts converters](https://odata2ts.github.io/docs/generator/converters/)
within the generation process. So this library is primarily intended to be used by the 
[odata2ts generator](https://www.npmjs.com/package/@odata2ts/odata2ts).

Provided implementations:
* `ChainedConverter`: chains the output of converter A to the input of converter B
* `loadConverters()`: loading function to dynamically import specified converters
  * takes care of loading order => last converter wins if multiple converters could be used for a given data type
  * returns mapping of OData data types to `ConverterChains`

## Installation
```
npm install --save @odata2ts/converter-runtime
```

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
