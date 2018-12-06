import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editSpot(event){
      event.preventDefault();

      let spot = this.model;  //all controllers have the model from the route
      spot.save().then(() => {
        this.transitionToRoute('spot', spot.id);
      });
    }
  }
});
