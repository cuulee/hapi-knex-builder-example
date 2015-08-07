'use strict';

var fs = require('fs');
var Glue = require('glue');
var minimist = require('minimist');

var args = minimist(process.argv.slice(2));

// load configuration
var envConfigFile = args['env-config'] || 'config/local.json';
var envConfig = JSON.parse(fs.readFileSync(envConfigFile));
var manifest = envConfig.manifest;
manifest.server.app = envConfig;

// compose Hapi server from config file
Glue.compose(manifest, { relativeTo: process.cwd() }, function (err, server) {
    if (err) { return console.error(err); }

    server.start();
});
