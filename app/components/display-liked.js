import Component from '@ember/component';

export default Component.extend({
  liked: true,
  actions: {
    like(spot, newValue){
      spot.set('liked', newValue);
      spot.save();
    },

    deleteSpot(spot){
      let confirmed = window.confirm(
        'Are you sure you want to delete this study spot?'
      );
      if ( confirmed ) {
        spot.destroyRecord();
      }
    }
  }
});
