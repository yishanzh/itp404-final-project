import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createSpot(){
      // event.preventDefault();
      // console.log("entered action")
      let spot = this.store.createRecord('spot', {
        name: this.name,
        address: this.address,
        hours: this.hours,
        review: this.review
      });
      // console.log("spot created")

      spot.save().then(() => {
        // console.log("ready to transition")
        this.transitionToRoute('spot', spot.id);
      });
      // console.log(spot);
    }
  }
});
