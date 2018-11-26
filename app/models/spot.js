import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  hours: DS.attr('string'),
  review: DS.attr('string')
});
