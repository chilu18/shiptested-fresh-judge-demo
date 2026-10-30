import test from 'node:test';
import assert from 'node:assert/strict';
import {summarizeRelease} from '../index.mjs';

test('the untouched fixture has a deterministic smoke test', () => {
  assert.equal(summarizeRelease(), 'fresh repository fixture');
});
