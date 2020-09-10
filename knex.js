var options = {
    development: {
        client: 'pg',
        connection: {
            host : '127.0.0.1',
            user : 'seanbeach',
            password : '',
            database : 'tap-on-it'
        },
        migrations: {
            directory: __dirname + '/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
  };

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = require('knex')(config);