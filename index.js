const QUnit = require('qunit');

QUnit.begin(() => {
  return Promise.reject(new Error('The error message'));
});

QUnit.module('Repro module', function() {
  QUnit.test('a test', function(assert) {
    assert.ok(true, 'an assertion');
  });
});