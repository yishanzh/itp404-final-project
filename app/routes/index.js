import Route from '@ember/routing/route';
// import Ember from 'ember';

export default Route.extend({
  titleToken: 'Spot List',
  model(){
    //$.getJSON('/api/spots');
    return this.store.findAll('spot');

  }


});
