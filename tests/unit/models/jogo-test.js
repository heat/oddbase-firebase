import { moduleForModel, test } from 'ember-qunit';

moduleForModel('jogo', 'Unit | Model | jogo', {
  // Specify the other units that are required for this test.
  needs: ['model:evento', 'model:restricao']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
