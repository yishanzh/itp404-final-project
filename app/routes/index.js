import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    //$.getJSON('/api/spots');
    return this.store.findAll('spot');
  }
});
