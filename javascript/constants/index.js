const SUIT_CONV = {
  0: '♣︎',
  1: '♦',
  2: '♥',
  3: '♠'
};

// const SUIT_CONV = {
//   0: 'clubs',
//   1: 'diamonds',
//   2: 'hearts',
//   3: 'spades'
// };

const COLOR_CONV = {
  0: 'black',
  1: 'red',
  2: 'red',
  3: 'black'
};

const RANK_CONV = {
  1: 'A',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: 'J',
  12: 'Q',
  13: 'K'
};

export function rank (num) {
  return RANK_CONV[num % 13 + 1];
}

export function suit (num) {
  return SUIT_CONV[Math.floor(num / 13)];
}

export function color (num) {
  return COLOR_CONV[Math.floor(num / 13)];
}
