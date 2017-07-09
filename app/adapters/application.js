import FirebaseAdapter from 'emberfire/adapters/firebase';
import TenantMixin from 'sysbet-aposta/mixins/tenant-mixin';

export default FirebaseAdapter.extend(TenantMixin, {

    pathForType(modelName) {
        let tenatized = this.tenatenize(modelName);
        return this._super(tenatized);
    }
});
