import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name( ) {
    return faker.address.streetName();
  },
  address(){
    return faker.address.streetAddress();
  },
  hours(){
    return `Monday to Friday, 9 am to 5 pm.`;
  },
  review(){
    return faker.lorem.sentences();
  }

});
