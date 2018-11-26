export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.loadFixtures('spots');
   //server.createList('spot', 20);
}
