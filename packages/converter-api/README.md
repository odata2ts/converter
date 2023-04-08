[![npm (scoped)](https://img.shields.io/npm/v/@odata2ts/converter-api?style=for-the-badge)](https://www.npmjs.com/package/@odata2ts/converter-api)

# odata2ts Converter API

Defines the API of converters and converter packages as they are used in 
[`@odata2ts`](https://github.com/odata2ts/odata2ts).

As an API this module only consists of interfaces, which you should implement when writing your own converters.

Additionally, converter modules need to follow certain conventions, which are listed here.

## Introduction
Consumers of an OData service need to handle the data types known to OData and in this regard 
also need to take into account which OData version is used, because there are quite some
differences between V2 and V4.

Converters allow to use a different representation for a given data type by converting
from and to the OData type. For example, the type `Edm.DateTimeOffset` represents a certain
point in time by using the ISO 8601 DateTime format; we might want to use a JS Date object
instead. So the converter would do the following conversions:
* convert from the OData type to JS Date
* convert from JS Date to the OData type

With the help of converters the consumer then only needs to handle JS date objects.
Furthermore, converters can also remedy the different representations of V2 and V4
(see [@odata2ts/v2-to-v4-converter](https://www.npmjs.com/package/@odata2ts/converter-v2-to-v4)).


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
