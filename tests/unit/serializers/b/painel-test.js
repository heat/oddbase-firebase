import { moduleForModel, test } from 'ember-qunit';

moduleForModel('b/painel', 'Unit | Serializer | b/painel', {
  // Specify the other units that are required for this test.
  needs: ['serializer:b/painel']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
