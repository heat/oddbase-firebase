import DS from 'ember-data';

export default DS.Model.extend({
  
  nome: DS.attr('string'),

  painel: DS.hasMany('jogo', { async: false, inverse: null })
});
