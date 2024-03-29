import DS from 'ember-data';

export default DS.Model.extend({

    nome: DS.attr('string'),

    jogos: DS.hasMany('jogo', { async: false, inverse: null })
});
