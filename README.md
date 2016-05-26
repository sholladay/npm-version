# npm-version

> Get the version of npm your user has.

## Why?

 - Fine tune your install process.
 - Takes `$PATH` into account.
 - Guarantees valid semver as the result.

## Install

```sh
npm install npm-version --save
```

## Usage

Get it into your program.

```js
const npmVersion = require('npm-version');
```

Ask what the current version of npm being used is.

```js
npmVersion().then((version) => {
    console.log('Version of npm:', version);
});
```

## Contributing

See our [contributing guidelines](https://github.com/sholladay/npm-version/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/npm-version/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/npm-version/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/npm-version/blob/master/LICENSE "The license for npm-version.") © [Seth Holladay](http://seth-holladay.com "Author of npm-version.")

Go make something, dang it.
