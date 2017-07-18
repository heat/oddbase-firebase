import Ember from 'ember';
import RegraCalculoTaxaMixin from 'sysbet-aposta/mixins/regra-calculo-taxa';

const { get, getOwner } = Ember;

export default Ember.Component.extend(RegraCalculoTaxaMixin, {

    cotacao: null,

    regras: null,

    regra: null,

    taxa: Ember.computed('cotacao.taxa', 'regras.@each.prioridade', function() {
        let cotacao = this.get('cotacao');
        let regras = this.get('regras');
        return this.calcularTaxa(cotacao, regras);
    }),
});
