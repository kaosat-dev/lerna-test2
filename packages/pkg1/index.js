const pkgCommon = require('lerna-test2-pkg-common')

const foo = 42
const fun = () => foo
const castles = () => `oh yeah let us build casstlye${pkgCommon.apiFn1()}`

module.exports = {fun, castles}
