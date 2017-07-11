import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  
  exibir: attr('boolean'), 
  
  evento: belongsTo('evento', { async: true, inverse: null }),
  
  restricao: belongsTo('restricao', { async: true, inverse: null }),

  cotacao: belongsTo('cotacao', { async: true, inverse: null }),
});
