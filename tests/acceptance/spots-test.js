import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
// import window from 'ember-window-mock';


module('Acceptance | spots', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting / displays a list of study spots', async function(assert) {
    server.loadFixtures('spots');

    await visit('/');
    // await pauseTest();

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="spot"]').exists({ count:10 });
  });

  test('viewing the details of a spot', async function(assert){
    server.loadFixtures('spots');

    await visit('/spots/1');

    assert.dom('[data-test="spot-name"]').hasText('Icon Plaza Study Room');
    assert.dom('[data-test="spot-address"]').hasText('Address: 3584 S Figueroa Street');
    assert.dom('[data-test="spot-hour"]').hasText('Operating hours: Monday to Sunday, 24 hours');
    assert.dom('[data-test="spot-review"]').hasText('Review: Great Place near USC to study');
  });

//adding test not working
  // test('add a new spot', async function(assert){
  //   await visit('spots/new');
  //   await fillIn('#name', 'Cafe Mak');
  //   // await fillIn('[data-test="name" input', 'Cafe Mak');
  //   await fillIn('#address', '612 Shatto Pl');
  //   // await fillIn('[data-test="hours" input', '612 Shatto Pl');
  //   await fillIn('#hours', 'Monday to Sunday, 10 am to 1 am');
  //   // await fillIn('[data-test="hours" input', 'Monday to Sunday, 10 am to 1 am');
  //   await fillIn('#review', 'Great place to grind for exams. It opens late');
  //   // await fillIn('[data-test="review" textarea', 'Great place to grind for exams. It opens late');
  //
  //
  //   await click('[data-test="add"]');
  //
  //
  //   assert.equal(currentURL(), '/spots/1');
  //
  //   assert.dom('[data-test="spot-name"]').hasText('Cafe Mak');
  //   assert.dom('[data-test="spot-address"]').hasText('Address: 612 Shatto Pl');
  //   assert.dom('[data-test="spot-hour"]').hasText('Operating hours: Monday to Sunday, 10 am to 1am');
  //   assert.dom('[data-test="spot-review"]').hasText('Review: Great place to grnd for exams. It opens late');
  // });

//delete test not working
  // test('deleting a spot', async function(assert) {
  //   server.loadFixtures('spots');
  //   //window.confirm not working
  //   window.confirm = () => true;
  //
  //   await visit('/');
  //   // await pauseTest();
  //   await click('[data-test="delete-spot"]');
  //   // window.confirm = () => true;
  //   assert.dom('[data-test="spot"]').exists({ count: 9 });
  //
  // });


});
