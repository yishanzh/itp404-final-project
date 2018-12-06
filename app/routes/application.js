// import Route from '@ember/routing/route';
// import Ember from 'ember';
//
// export default Route.extend({
//   title: function(tokens) {
//    tokens = Ember.makeArray(tokens);
//    tokens.unshift('My Study Spot');
//    return tokens.reverse().join(' - ');
//   }
// });
import Route from '@ember/routing/route';
import { makeArray } from '@ember/array';

export default Route.extend({
  title: function(tokens) {
   tokens = makeArray(tokens);
   tokens.unshift('my spot');
   return tokens.reverse().join(' - ');
  }
});
