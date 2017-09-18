const test = require('tape')
const {fun} = require('./index')

test('simple test for pkg1', function (t) {
  t.plan(1)

  const expected = 42
  const observed = fun()
  t.equal(expected, observed)
})
