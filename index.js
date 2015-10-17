'use strict';

const binVersion = require('bin-version'),
      Promise    = require('bluebird');

function npmVersion() {
    return new Promise(function (resolve, reject) {
            binVersion('npm', function (err, version) {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(version);
            });
        });
}

module.exports = npmVersion;
