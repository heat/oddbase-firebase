import DS from 'ember-data';

export default DS.Model.extend({
  
  taxas: DS.hasMany('taxa', { async: false, inverse: null })
});
