import { moduleForModel, test } from 'ember-qunit';

moduleForModel('evento-fonte', 'Unit | Model | evento fonte', {
  // Specify the other units that are required for this test.
  needs: ['model:evento']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
