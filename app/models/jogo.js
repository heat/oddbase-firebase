import Ember from 'ember';
import DS from 'ember-data';
import RegraCalculoTaxaMixin from 'sysbet-aposta/mixins/regra-calculo-taxa';

const { attr, belongsTo } = DS;

export default DS.Model.extend(RegraCalculoTaxaMixin, {
  
  exibir: attr('boolean'), 
  
  evento: belongsTo('evento', { async: true, inverse: null }),
  
  restricao: belongsTo('restricao', { async: true, inverse: null }),

  cotacao: belongsTo('cotacao', { async: true, inverse: null }),

  taxas: Ember.computed('cotacao.taxas.@each.taxa','restricao.regras.[]', function() {
    let taxas = this.get('cotacao.taxas');
    let regras = this.get('restricao.regras');
    
    return taxas.map( t => {
         let taxa = this.calcularTaxa(t, regras);
         let json = t.toJSON();
         json.taxa = taxa;
         return json;
        });
  }),
});