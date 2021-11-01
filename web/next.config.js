const { i18n } = require('./next-i18next.config')
const withPWA = require('next-pwa')

module.exports = withPWA({
  i18n,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
})
