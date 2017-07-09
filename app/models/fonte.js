import DS from 'ember-data';

export default DS.Model.extend({
  nome: DS.attr('string'),

  odds: DS.hasMany('evento-fonte', { async: false, inverse: null })
});
