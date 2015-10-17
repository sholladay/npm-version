# npm-version

Get the version of npm your user has.

 - Returns Promises, for easy asynchronous control flow.
 - Guarantees valid semver as the result.
 - Takes `$PATH` into account.

**Version**: `0.1.0`

## Installation

````sh
npm install npm-version --save
````

## Usage

Ask what the current version of npm being used is.

````javascript
npmVersion()
    .then(function (version) {
        console.log('Version of npm:', version);
        console.log('I wonder if I you are out of date.');
    });
````

## Contributing
See our [contribution guidelines](https://github.com/sholladay/npm-version/blob/master/CONTRIBUTING.md "The guidelines for being involved in this project.") for more details.
1. [Fork it](https://github.com/sholladay/npm-version/fork).
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/npm-version/compare "Submit code to this repo now for review.").

## License
[MPL-2.0](https://github.com/sholladay/npm-version/blob/master/LICENSE "The license for npm-version.")

Go make something, dang it.
