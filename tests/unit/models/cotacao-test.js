import { moduleForModel, test } from 'ember-qunit';

moduleForModel('cotacao', 'Unit | Model | cotacao', {
  // Specify the other units that are required for this test.
  needs: ['model:taxa']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
