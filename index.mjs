export function summarizeRelease() {
  return 'fresh repository fixture';
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(summarizeRelease());
}
