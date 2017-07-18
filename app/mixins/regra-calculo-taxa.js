import Ember from 'ember';

export default Ember.Mixin.create({

calcularTaxa: _calculataxa,
});



function _calculataxa(cotacao, regras) {

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
            let overr = regra.getProperties('limite', 'exibir', 'mult', 'codigo', 'fixo');
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
            if(!Number.isNaN(overr.fixo) && overr.fixo > 1) {
                taxa = overr.fixo;
            }
            return taxa;
        }
        return cotacao.get('taxa');
}