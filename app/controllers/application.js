import Ember from 'ember';

export default Ember.Controller.extend({

    fonte: null,
    
    banca: null,

    actions: {
        novaFonte() {
            let nome = this.get('fonte');

            let fonte = this.get('store').createRecord('fonte', {
                nome
            });

            let banca = this.get('store').createRecord('banca', {
                nome
            });
            fonte.save()
                .then(f => {
                    this.set('fonte', f);
                });
            banca.save()
                .then(f => {
                    this.set('banca', f);
                });
        },
        removerEvento(ev) {
            
            this.get('store').find('banca', '-KoGACg1R__8dn23jvsU')
                .then( b => {
                    ev.get('bancas').removeObject(b);
                    return ev.save();
                } )
                .then(console.log);

        },
        novoEvento() {
            let store = this.get('store');
            let  {casa, fora, campeonato, realizacao} = this.getProperties('casa', 'fora', 'campeonato', 'realizacao');

            let restricao = this.get('model.restricao');

            let banca = this.get('model.banca');
            
            let evento = store.createRecord('evento', {
                casa,
                fora,
                campeonato,
                inicio: new Date()
            });
            evento.save()
                .then( ev => {
                    let j = store.createRecord('jogo', {
                        exibir: true
                    });
                    j.set('evento', ev);
                    j.set('restricao', restricao);
                    banca.get('painel').addObject(j);
                    return banca.save();
                })
                .catch(console.log)
                .finally(console.log);
        }
    }
});
