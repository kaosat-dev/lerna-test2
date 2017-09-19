const test = require('tape')
const {fun, castles} = require('./index')

test('simple test for pkg1: fun()', function (t) {
  t.plan(1)

  const expected = 42
  const observed = fun()
  t.equal(expected, observed)
})

test('simple test for pkg1: castles()', function (t) {
  t.plan(1)

  const expected = 'oh yeah let us build casstlyeA'
  const observed = castles()
  t.equal(expected, observed)
})
