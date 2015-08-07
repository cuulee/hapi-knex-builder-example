'use strict';

exports.register = function (server, options, next) {

    var knex = require('knex')({
        client: 'mysql',
        connection: server.settings.app.mysql
    });

    server.expose('knex', knex);

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};
