const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    hostname: process.env.HOSTNAME,
};