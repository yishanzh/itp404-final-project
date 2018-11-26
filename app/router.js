import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('spot', { path:'/spots/:id' });
  this.route('create', { path:'/spots/new' });
  this.route('edit', { path:'spots/:id/edit' });
});

export default Router;
