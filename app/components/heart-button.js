import Component from '@ember/component';

export default Component.extend({
  actions: {
    like() {
      this.toggleProperty('liked');
    }
  }
});
