import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | heart-button', function(hooks) {
  setupRenderingTest(hooks);

  test('show filled heart if liked is true', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('liked', true);
    await render(hbs`
      <HeartButton
        data-test="heart-button"
        @liked={{liked}}
      />
      `);
    // await pauseTest();
    assert.dom('[data-test="heart-button"]').hasText('♥');

  });

  test('show empty heart if liked is false', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('liked', false);
    await render(hbs`
      <HeartButton
        data-test="heart-button"
        @liked={{liked}}
      />
      `);
    // await pauseTest();
    assert.dom('[data-test="heart-button"]').hasText('♡');

  });

});
