const ss = [
  '䷀',
  '䷁',
  '䷂',
  '䷃',
  '䷄',
  '䷅',
  '䷆',
  '䷇',
  '䷈',
  '䷉',
  '䷊',
  '䷋',
  '䷌',
  '䷍',
  '䷎',
  '䷏',
  '䷐',
  '䷑',
  '䷒',
  '䷓',
  '䷔',
  '䷕',
  '䷖',
  '䷗',
  '䷘',
  '䷙',
  '䷚',
  '䷛',
  '䷜',
  '䷝',
  '䷞',
  '䷟',
  '䷠',
  '䷡',
  '䷢',
  '䷣',
  '䷤',
  '䷥',
  '䷦',
  '䷧',
  '䷨',
  '䷩',
  '䷪',
  '䷫',
  '䷬',
  '䷭',
  '䷮',
  '䷯',
  '䷰',
  '䷱',
  '䷲',
  '䷳',
  '䷴',
  '䷵',
  '䷶',
  '䷷',
  '䷸',
  '䷹',
  '䷺',
  '䷻',
  '䷼',
  '䷽',
  '䷾',
  '䷿'
]

const files = ['./zh-TW/64gua.json', './zh-CN/64gua.json'];

const fs = require('fs');
const addSymbol = (file) => {
  const guas = require(file);
  const newC = guas.map((g, i) => {
    return {
      ...g,
      symbol: ss[i],
    };
  });
  fs.writeFileSync(file, JSON.stringify(newC, null, 2));
}

files.forEach(addSymbol);
