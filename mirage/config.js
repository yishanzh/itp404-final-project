export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
   this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
   this.timing = 1000;      // delay for each request, automatically set to 0 during testing

    this.get('/spots');
    this.post('/spots');
    this.get('/spots/:id');
    this.patch('/spots/:id'); // or this.put    //patch works with json api
    this.del('/spots/:id');


}
