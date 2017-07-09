import FirebaseSerializer from 'emberfire/serializers/firebase';
export default FirebaseSerializer.extend({
  attrs: {
    taxas: { embedded: 'always' }
  }
});