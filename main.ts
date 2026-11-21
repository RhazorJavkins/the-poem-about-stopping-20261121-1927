const { mkdirSync, writeFileSync } = require('node:fs');

const poem = [
  'Stop, my daughter says.',
  'One braid done, the rest',
  'still warm in my fist.',
  'I open my hand.',
  '',
  'Stay, she says.',
  'I sit beside her.',
  'The loose half dries first.',
].join('\n');

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');
