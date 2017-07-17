import DS from 'ember-data';

export default DS.Model.extend({

    regras: DS.hasMany('aposta/regra', { async: false, inverse: null })
});
