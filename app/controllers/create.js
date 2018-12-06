import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createSpot(){
      // event.preventDefault();

      let spot = this.store.createRecord('spot', {
        name: this.name,
        address: this.address,
        hours: this.hours,
        review: this.review
      });

      spot.save().then(() => {
        this.transitionToRoute('spot', spot.id);
      });
      // console.log(spot);
    }
  }
});
