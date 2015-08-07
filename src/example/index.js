'use strict';

exports.register = function (server, options, next) {

    server.route([
        {
            method: 'GET',
            path: '/example',
            config: {
                handler: function (request, reply) {
                    var select = request.app.knex.select().from('tbl');
                    return reply(select.toQuery());
                }
            }
        }
    ]);

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};
