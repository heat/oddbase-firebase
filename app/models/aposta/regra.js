import DS from 'ember-data';

export default DS.Model.extend({
  prioridade: DS.attr('number'),
  codigo: DS.attr('string'),
  limite: DS.attr('number'),
  mult: DS.attr('number'),
  exibir: DS.attr('boolean', { defaultValue: true }),
});
