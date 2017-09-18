const test = require('tape')
const {nope} = require('./index')

test('simple test for pkg2', function (t) {
  t.plan(1)

  const expected = 'yipee'
  const observed = nope()
  t.equal(expected, observed)
})
