import DS from 'ember-data';

export default DS.Model.extend({
  casa: DS.attr('string'),
  fora: DS.attr('string'),
  campeonato: DS.attr('string'),
  realizacao: DS.attr('date'),

  bancas: DS.hasMany('banca', { async: true, inverse: false}),

});
