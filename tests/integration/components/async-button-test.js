import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | async-button', function(hooks) {
  setupRenderingTest(hooks);


  test('show text "adding" after clicking add button', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`
      <AsyncButton
        data-test="add"
        @defaultText="Add"
        @pendingText="Adding..."
      />
      `);
    // await pauseTest();
    await click('[data-test="add"]');

    assert.dom('[data-test="add"]').hasText('Adding...');

  });

  test('show text "saving" after clicking save button', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`
      <AsyncButton
        data-test="save"
        @defaultText="Save"
        @pendingText="Saving..."
      />
      `);
    // await pauseTest();
    await click('[data-test="save"]');

    assert.dom('[data-test="save"]').hasText('Saving...');

  });
});
