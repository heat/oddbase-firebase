import DS from 'ember-data';

export default DS.Model.extend({
  evento: DS.belongsTo('evento'),


  taxas: DS.hasMany('taxa', { async: false, inverse: null })
});
