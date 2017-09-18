const test = require('tape')
const {fun, castle} = require('./index')

test('simple test for pkg1: fun()', function (t) {
  t.plan(1)

  const expected = 42
  const observed = fun()
  t.equal(expected, observed)
})

test('simple test for pkg1: castle()', function (t) {
  t.plan(1)

  const expected = 'oh yeah let us build casstlye'
  const observed = castle()
  t.equal(expected, observed)
})
