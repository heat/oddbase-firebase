import DS from 'ember-data';

export default DS.Model.extend({
  taxa: DS.attr('number'),
  nome: DS.attr('string')
});
