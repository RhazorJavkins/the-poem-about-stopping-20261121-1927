const { mkdirSync, writeFileSync } = require('node:fs');

const poem = [
  'Stop, my daughter says.',
  'I open my fist.',
  'The second braid unravels',
  'through my fingers.',
  '',
  'Stay, she says.',
  'She lifts her towel from the step.',
  'Her wet hair darkens my sleeve.',
].join('\n');

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');
