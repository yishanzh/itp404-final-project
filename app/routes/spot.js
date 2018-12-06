import Route from '@ember/routing/route';
// import Ember from 'ember';

export default Route.extend({
  titleToken: function(model) {
    return model.get('name');
  },
  model(params){
    return this.store.findRecord('spot', params.id);
  }

});
