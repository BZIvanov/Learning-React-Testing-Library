## coverage

The test coverage command will generate coverage folder in which we can find html file with details what exactly happened with our tests.

## scripts - package.json

The custom script _test-coverage_ will run the test command, but will also display the test coverage.

- --collectCoverageFrom='src/components/\*\*/\*.{ts,tsx}' - this way we will only search in the components folder for .ts and .tsx files. This is beacuse we don't want to include non relevant files in the test coverage
- --collectCoverageFrom='!src/components/\*\*/\*.{type,interface}.{ts,tsx}' - this will exclude test coverage from files ending with type or interface and ts or tsx extension

```
npm test -- --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}'
```

## jest - package.json

In the package.json we set treshold, which if are not met the test coverage will fail. This is good for making sure we have good amount of tests.
