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
            let  {casa, fora, campeonato, realizacao} = this.getProperties('casa', 'fora', 'campeonato', 'realizacao');

            let { fonte, banca } = this.getProperties('fonte', 'banca');

            let evento = this.get('store').createRecord('evento', {
                casa,
                fora,
                campeonato,
                inicio: new Date()
            });

            evento.get('bancas').addObject(banca);

            let odd = this.get('store').createRecord('taxa', {
                            nome: 'Casa',
                            valor: 1.02
                        });
            evento.save()
                .then( c => {
                    let v = this.get('store').createRecord('evento-fonte', {
                        evento: c,
                    });
                    v.get('taxas').addObject(odd);
                    fonte.get('odds').addObject(v);
                    fonte.save();
                    return c;
                })
                .catch(console.log)
                .finally(console.log);
        }
    }
});
