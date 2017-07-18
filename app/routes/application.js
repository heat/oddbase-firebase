import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

    model() {
        return RSVP.hash({
            banca: this.get('store').findRecord('banca', 'j9k4jd', { include: 'cotacao, restricao' }),
            restricao: this.get('store').findRecord('restricao', 'j9k4jd'),
        });
    }
});
