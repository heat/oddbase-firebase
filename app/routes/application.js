import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

    model() {
        return RSVP.hash({
            banca: this.get('store').find('banca', 'j9k4jd'),
            restricao: this.get('store').find('restricao', 'j9k4jd'),
        });
    }
});
