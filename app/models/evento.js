import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  casa: DS.attr('string'),
  fora: DS.attr('string'),
  campeonato: DS.attr('string'),
  
  inicio: DS.attr('date'),

  tipo: DS.attr('string')

// restricao: Ember.computed.alias('restricao/cocodoco'),
});
