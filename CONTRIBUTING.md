# Contribution Guidelines

We welcome any contribution to `odata2ts`:

- bug reports
- feature requests
- pull requests
- suggestions
- usage questions
- ...

We're using [Github Issues](https://github.com/odata2ts/converter/issues) and
[Pull Requests](https://github.com/odata2ts/converter/pulls) as main line of communication.

## Having Questions

We expect that you've read the [odata2ts documentation on converters](https://odata2ts.github.io/docs/generator/converters).
A lot of work went into it and it should be your prime source to get the information you need.

However, as soon as the documentation does not live up to this standard
(you don't find the documentation or don't get the answer you actually need, etc.),
then by all means **open an issue** on Github. Please feel encouraged to do so, because it indicates
a shortcoming of the documentation.

## Creating Issues

Currently, there's no template in place for creating issues.

So, you have read the relevant documentation parts and skimmed through the existing issues,
then [go for it](https://github.com/odata2ts/odata2ts/issues/new).

## Code Contributions

### Prerequisites

- Node.js
- Yarn

### Setup

Clone the repo.

```shell
yarn install
yarn build
```

### Running Unit Tests

To run the **unit tests** of all modules:

```shell
yarn test
```

Each module should come with its own set of unit tests in folder `test`.
To execute only unit tests of a specific module, change to the module in question and call `yarn test` from there.

Modules without unit tests:

- converter-api: it's an API consisting only of TypeScript types

### Running Integration Tests

There are none yet.

Some integration tests might be found in the [example projects](https://github.com/odata2ts/odata2ts/tree/main/examples) of odata2ts.

### Commits & Pull Requests

We love [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) and use them to drive
our semantic versioning. Try to adhere to these conventions. `odata2ts` uses the following `types`:

- `fix`: Bug fixes, fixing typos, etc.
- `feat`: New features
- `chore`:
- `doc`: Documentation changes
- `refactor`: Refactoring code
- `build`: changes to the build process

We will probably squash your commits before merging them into the `main` branch.
So also adhere to conventional commits within the title of your pull request.
Examples:

- fix(converter-api): typo in README
- feat(myConverter: add myConverter
- ...

## Maintaining

Only available for maintainers.

### Release

```shell
yarn release
```
