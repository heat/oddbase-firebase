import Ember from 'ember';
import RegraCalculoTaxaMixin from 'sysbet-aposta/mixins/regra-calculo-taxa';
import { module, test } from 'qunit';

module('Unit | Mixin | regra calculo taxa');

// Replace this with your real tests.
test('it works', function(assert) {
  let RegraCalculoTaxaObject = Ember.Object.extend(RegraCalculoTaxaMixin);
  let subject = RegraCalculoTaxaObject.create();
  assert.ok(subject);
});
