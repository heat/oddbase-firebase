import Ember from 'ember';
import TenantMixinMixin from 'sysbet-aposta/mixins/tenant-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | tenant mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let TenantMixinObject = Ember.Object.extend(TenantMixinMixin);
  let subject = TenantMixinObject.create();
  assert.ok(subject);
});
