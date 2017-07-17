import Ember from 'ember';

const { get, getOwner } = Ember;

export default Ember.Component.extend({

    cotacao: null,

    regras: null,

    regra: null,

    taxa: Ember.computed('cotacao.taxa', 'regras.@each.prioridade', function() {
        let cotacao = this.get('cotacao');
        let regras = this.get('regras');
        if( Ember.isArray(regras)) {
            let regra = regras
                // filtra todas as regras de mesma classe
                .filter( r => cotacao.get('codigo').includes(r.get('codigo')))
                .sortBy('prioridade')
                // verifica qual a mais autal
                .reduce( (actual, next) => {
                    if (actual.get('prioridade') > next.get('prioridade')) {
                        return actual;
                    }
                return next;
            }, Ember.Object.create());
            this.set('regra', regra);
            let overr = regra.getProperties('limite', 'exibir', 'mult', 'codigo');
            let taxa = cotacao.get('taxa');
            if(!Number.isNaN(overr.mult) && overr.mult !== 0) {
                taxa = taxa * overr.mult;
            }
            if( overr.exibir === false ) {
                taxa = 0;
            }
            if(!Number.isNaN(overr.limite) && overr.limite > 1 && overr.limite < taxa ) {
                taxa = overr.limite;
            }
            return taxa;
        }
        return cotacao.get('taxa');
    }),
});
