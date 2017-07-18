import DS from 'ember-data';

export default DS.Model.extend({

  /**
   * Define o grau de prioridade de aplica'cao da regra.
   * quanto mais especifico melhor
   */
  prioridade: DS.attr('number'),
  
  /**
   * codigo de identificacao da regra. (namespace de selecao da regra)
   */
  codigo: DS.attr('string'),
  
  /**
   * valor limit maximo de uma taxa para uma determinada regra
   */
  limite: DS.attr('number'),

  /**
   * valor aplicacao de reducao de taxa
   */
  mult: DS.attr('number'),

  /**
   * exibir a taxa ?
   */
  exibir: DS.attr('boolean', { defaultValue: true }),

  fixo: DS.attr('number'),
});
