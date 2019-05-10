import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | detalle-cerveza', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:detalle-cerveza');
    assert.ok(route);
  });
});
