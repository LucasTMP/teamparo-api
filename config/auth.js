// import 'dotenv/config';
require('dotenv/config')

module.exports = {
  secret: process.env.AUTH_SECRET,
  expiresIn: '7d',
};
