import Ember from 'ember';

const TENANT_NAME = 'j9k4jd';

export default Ember.Mixin.create({

    tenatenize(modelName) {
        if(!Ember.isEmpty(modelName)) {
            return modelName.replace('b/', `bancas/${TENANT_NAME}/`);
        }
        return modelName;
    }
});
