import test from 'node:test';
import assert from 'node:assert/strict';
import {summarizeRelease} from '../index.mjs';

test('groups releases into batches and totals their amounts', () => {
  const items = [{owner:'Louise',amount:12},{owner:'Peter',amount:7},{owner:'Louise',amount:3}];
  assert.deepEqual(summarizeRelease(items), {total:22,batches:[items.slice(0,2),items.slice(2)],owners:['Louise','Peter']});
});

test('handles an empty release without inventing totals', () => {
  assert.deepEqual(summarizeRelease(), {total:0,batches:[],owners:[]});
});
