import DS from 'ember-data';

export default DS.Model.extend({
  valor: DS.attr('number'),
  nome: DS.attr('string')
});
