import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
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
