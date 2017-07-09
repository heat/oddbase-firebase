import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.get('store').query('evento', {
            orderBy:'bancas/-KoGACg1R__8dn23jvsU',
            equalTo: true
        });
    }
});
