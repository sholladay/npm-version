'use strict';

const binVersion = require('bin-version');

function npmVersion() {
    return binVersion('npm');
}

module.exports = npmVersion;
