const test = require('tape')
const {apiFn1, apiFn2} = require('./index')

test('simple test for pkg-common: apiFn1()', function (t) {
  t.plan(1)

  const expected = 'A'
  const observed = apiFn1()
  t.equal(expected, observed)
})

test('simple test for pkg-common: apiFn2()', function (t) {
  t.plan(1)

  const expected = 'B'
  const observed = apiFn2()
  t.equal(expected, observed)
})
