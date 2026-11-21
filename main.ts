const { mkdirSync, writeFileSync } = require('node:fs');

const poem = [
  'Stop, my daughter says.',
  'I open my fist.',
  'The second braid comes apart',
  'one crossing at a time.',
  '',
  'Stay, she says.',
  'She scoots over on the step.',
  'Her wet hair darkens my sleeve.',
].join('\n');

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');
