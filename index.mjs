import lodash from 'lodash';

export function summarizeRelease(items = []) {
  return {
    total: lodash.sumBy(items, 'amount'),
    batches: lodash.chunk(items, 2),
    owners: lodash.uniq(items.map(item => item.owner)),
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(summarizeRelease());
}
