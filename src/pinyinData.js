// Exact match of Yoyo Chinese Pinyin Chart structure

// Initials (columns) - No y/w, Yoyo shows them in standalone column
export const initials = [
  'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h',
  'j', 'q', 'x',
  'z', 'c', 's',       // z, c, s BEFORE zh, ch, sh
  'zh', 'ch', 'sh', 'r'
];

// Finals (rows) - Exact Yoyo order
export const finals = [
  // Row 1: Special 'i' for z/c/s/zh/ch/sh/r (zi, ci, si, zhi, chi, shi, ri)
  'i',
  // a group
  'a', 'ai', 'an', 'ang', 'ao',
  // e group
  'e', 'ei', 'en', 'eng', 'er',
  // i group (normal)
  'i', 'ia', 'ian', 'iang', 'iao', 'ie', 'in', 'ing', 'iong', 'iou',
  // o group
  'o', 'ong', 'ou',
  // u group
  'u', 'ua', 'uai', 'uan', 'uang', 'uei', 'uen', 'ueng', 'uo',
  // ü group
  'ü', 'üan', 'üe', 'ün'
];

// Standalone finals (column 2 in Yoyo) - finals without initials
export const standaloneFinals = {
  'i': null,  // First 'i' row has no standalone
  'a': 'a', 'ai': 'ai', 'an': 'an', 'ang': 'ang', 'ao': 'ao',
  'e': 'e', 'ei': 'ei', 'en': 'en', 'eng': 'eng', 'er': 'er',
  // i group standalone uses y-
  'ia': 'ya', 'ian': 'yan', 'iang': 'yang', 'iao': 'yao', 'ie': 'ye',
  'in': 'yin', 'ing': 'ying', 'iong': 'yong', 'iou': 'you',
  // o group
  'o': 'o', 'ong': null, 'ou': 'ou',
  // u group standalone uses w-
  'u': 'wu', 'ua': 'wa', 'uai': 'wai', 'uan': 'wan', 'uang': 'wang',
  'uei': 'wei', 'uen': 'wen', 'ueng': 'weng', 'uo': 'wo',
  // ü group standalone uses yu-
  'ü': 'yu', 'üan': 'yuan', 'üe': 'yue', 'ün': 'yun'
};

// Map for display: iou->iu, uei->ui, uen->un for combined forms
export const displayFinalMap = {
  'iou': 'iu',
  'uei': 'ui',
  'uen': 'un'
};

export const pronunciationNotations = {
  initials: {
    b: { urdu: 'ب', arabic: 'ب', note: 'Unaspirated' },
    p: { urdu: 'پ', arabic: 'ب + هـ', note: 'Aspirated (puff of air)' },
    m: { urdu: 'م', arabic: 'م' },
    f: { urdu: 'ف', arabic: 'ف' },
    d: { urdu: 'د', arabic: 'د', note: 'Unaspirated' },
    t: { urdu: 'ت', arabic: 'ت + هـ', note: 'Aspirated' },
    n: { urdu: 'ن', arabic: 'ن' },
    l: { urdu: 'ل', arabic: 'ل' },
    g: { urdu: 'ک', arabic: 'ك', note: 'Unaspirated' },
    k: { urdu: 'کھ', arabic: 'ك + هـ', note: 'Aspirated' },
    h: { urdu: 'ہ', arabic: 'خ / هـ', note: 'Rough h' },
    j: { urdu: 'ج', arabic: 'ج', note: 'Tongue tip behind lower teeth' },
    q: { urdu: 'چھ', arabic: 'ت + ش', note: 'Aspirated ch' },
    x: { urdu: 'ش', arabic: 'ش', note: 'Light sh, tongue low' },
    z: { urdu: 'ز', arabic: 'د + ز', note: 'Like "ds" in kids' },
    c: { urdu: 'ت+س', arabic: 'ت + س', note: 'Like "ts" in cats (aspirated)' },
    s: { urdu: 'س', arabic: 'س' },
    zh: { urdu: 'ج', arabic: 'ج', note: 'Retroflex (tongue curled back)' },
    ch: { urdu: 'چھ', arabic: 'ت + ش', note: 'Retroflex + Aspirated' },
    sh: { urdu: 'ش', arabic: 'ش', note: 'Retroflex' },
    r: { urdu: 'ر', arabic: 'ر', note: 'Retroflex voiced' }
  },
  finals: {
    a: { urdu: 'آ', arabic: 'ا' },
    o: { urdu: 'او', arabic: 'و' },
    e: { urdu: 'اَ', arabic: 'ـَـ' },
    ai: { urdu: 'آئی', arabic: 'أي' },
    ei: { urdu: 'اے', arabic: 'أي' },
    ao: { urdu: 'آؤ', arabic: 'أو' },
    ou: { urdu: 'اوُ', arabic: 'أو' },
    an: { urdu: 'ان', arabic: 'ان' },
    en: { urdu: 'ن', arabic: 'ن' },
    ang: { urdu: 'انگ', arabic: 'انغ' },
    eng: { urdu: 'نگ', arabic: 'نغ' },
    ong: { urdu: 'ونگ', arabic: 'ونغ' },
    er: { urdu: 'ار', arabic: 'أر' },
    // i group
    i: { urdu: 'ی', arabic: 'ي', note: 'Buzz sound after z,c,s,zh,ch,sh,r' },
    ia: { urdu: 'یا', arabic: 'يا' },
    iao: { urdu: 'یاو', arabic: 'ياو' },
    ie: { urdu: 'یے', arabic: 'يي' },
    iou: { urdu: 'یو', arabic: 'يو', note: 'Written as iu' },
    ian: { urdu: 'یان', arabic: 'يان' },
    in: { urdu: 'ین', arabic: 'ين' },
    iang: { urdu: 'یانگ', arabic: 'يانغ' },
    ing: { urdu: 'ینگ', arabic: 'ينغ' },
    iong: { urdu: 'یونگ', arabic: 'يونغ' },
    // u group
    u: { urdu: 'و', arabic: 'و' },
    ua: { urdu: 'وا', arabic: 'وا' },
    uo: { urdu: 'وو', arabic: 'وو' },
    uai: { urdu: 'وائی', arabic: 'واي' },
    uei: { urdu: 'وے', arabic: 'وي', note: 'Written as ui' },
    uan: { urdu: 'وان', arabic: 'وان' },
    uen: { urdu: 'ون', arabic: 'ون', note: 'Written as un' },
    uang: { urdu: 'وانگ', arabic: 'وانغ' },
    ueng: { urdu: 'ونگ', arabic: 'ونغ' },
    // ü group
    ü: { urdu: 'ُیو', arabic: 'ي + و', note: 'French U, lips rounded' },
    üe: { urdu: 'ُیے', arabic: 'ي+و+ي' },
    üan: { urdu: 'ُیان', arabic: 'يوان' },
    ün: { urdu: 'ُین', arabic: 'يون' }
  }
};

// Valid Pinyin Combinations - Extracted from Yoyo table
const validCombinations = [
  // Special i row (z/c/s/zh/ch/sh/r + i)
  'zi', 'ci', 'si', 'zhi', 'chi', 'shi', 'ri',

  // a row
  'a', 'ba', 'pa', 'ma', 'fa', 'da', 'ta', 'na', 'la', 'ga', 'ka', 'ha', 'za', 'ca', 'sa', 'zha', 'cha', 'sha',

  // ai row
  'ai', 'bai', 'pai', 'mai', 'dai', 'tai', 'nai', 'lai', 'gai', 'kai', 'hai', 'zai', 'cai', 'sai', 'zhai', 'chai', 'shai',

  // an row
  'an', 'ban', 'pan', 'man', 'fan', 'dan', 'tan', 'nan', 'lan', 'gan', 'kan', 'han', 'zan', 'can', 'san', 'zhan', 'chan', 'shan', 'ran',

  // ang row
  'ang', 'bang', 'pang', 'mang', 'fang', 'dang', 'tang', 'nang', 'lang', 'gang', 'kang', 'hang', 'zang', 'cang', 'sang', 'zhang', 'chang', 'shang', 'rang',

  // ao row
  'ao', 'bao', 'pao', 'mao', 'dao', 'tao', 'nao', 'lao', 'gao', 'kao', 'hao', 'zao', 'cao', 'sao', 'zhao', 'chao', 'shao', 'rao',

  // e row
  'e', 'me', 'de', 'te', 'ne', 'le', 'ge', 'ke', 'he', 'ze', 'ce', 'se', 'zhe', 'che', 'she', 're',

  // ei row
  'ei', 'bei', 'pei', 'mei', 'fei', 'dei', 'nei', 'lei', 'gei', 'hei', 'zei', 'zhei', 'shei',

  // en row
  'en', 'ben', 'pen', 'men', 'fen', 'nen', 'gen', 'ken', 'hen', 'zen', 'cen', 'sen', 'zhen', 'chen', 'shen', 'ren',

  // eng row
  'eng', 'beng', 'peng', 'meng', 'feng', 'deng', 'teng', 'neng', 'leng', 'geng', 'keng', 'heng', 'zeng', 'ceng', 'seng', 'zheng', 'cheng', 'sheng', 'reng',

  // er row
  'er',

  // i row (normal)
  'yi', 'bi', 'pi', 'mi', 'di', 'ti', 'ni', 'li', 'ji', 'qi', 'xi',

  // ia row
  'ya', 'dia', 'lia', 'jia', 'qia', 'xia',

  // ian row
  'yan', 'bian', 'pian', 'mian', 'dian', 'tian', 'nian', 'lian', 'jian', 'qian', 'xian',

  // iang row
  'yang', 'niang', 'liang', 'jiang', 'qiang', 'xiang',

  // iao row
  'yao', 'biao', 'piao', 'miao', 'diao', 'tiao', 'niao', 'liao', 'jiao', 'qiao', 'xiao',

  // ie row
  'ye', 'bie', 'pie', 'mie', 'die', 'tie', 'nie', 'lie', 'jie', 'qie', 'xie',

  // in row
  'yin', 'bin', 'pin', 'min', 'nin', 'lin', 'jin', 'qin', 'xin',

  // ing row
  'ying', 'bing', 'ping', 'ming', 'ding', 'ting', 'ning', 'ling', 'jing', 'qing', 'xing',

  // iong row
  'yong', 'jiong', 'qiong', 'xiong',

  // iou row (displayed as iu)
  'you', 'miu', 'diu', 'niu', 'liu', 'jiu', 'qiu', 'xiu',

  // o row
  'o', 'bo', 'po', 'mo', 'fo',

  // ong row
  'dong', 'tong', 'nong', 'long', 'gong', 'kong', 'hong', 'zong', 'cong', 'song', 'zhong', 'chong', 'rong',

  // ou row
  'ou', 'pou', 'mou', 'fou', 'dou', 'tou', 'lou', 'gou', 'kou', 'hou', 'zou', 'cou', 'sou', 'zhou', 'chou', 'shou', 'rou',

  // u row
  'wu', 'bu', 'pu', 'mu', 'fu', 'du', 'tu', 'nu', 'lu', 'gu', 'ku', 'hu', 'zu', 'cu', 'su', 'zhu', 'chu', 'shu', 'ru',

  // ua row
  'wa', 'gua', 'kua', 'hua', 'zhua', 'shua',

  // uai row
  'wai', 'guai', 'kuai', 'huai', 'zhuai', 'chuai', 'shuai',

  // uan row
  'wan', 'duan', 'tuan', 'nuan', 'luan', 'guan', 'kuan', 'huan', 'zuan', 'cuan', 'suan', 'zhuan', 'chuan', 'shuan', 'ruan',

  // uang row
  'wang', 'guang', 'kuang', 'huang', 'zhuang', 'chuang', 'shuang',

  // uei row (displayed as ui)
  'wei', 'dui', 'tui', 'gui', 'kui', 'hui', 'zui', 'cui', 'sui', 'zhui', 'chui', 'shui', 'rui',

  // uen row (displayed as un)
  'wen', 'dun', 'tun', 'lun', 'gun', 'kun', 'hun', 'zun', 'cun', 'sun', 'zhun', 'chun', 'shun', 'run',

  // ueng row
  'weng',

  // uo row
  'wo', 'duo', 'tuo', 'nuo', 'luo', 'guo', 'kuo', 'huo', 'zuo', 'cuo', 'suo', 'zhuo', 'chuo', 'shuo', 'ruo',

  // ü row
  'yu', 'nü', 'lü', 'ju', 'qu', 'xu',

  // üan row
  'yuan', 'juan', 'quan', 'xuan',

  // üe row
  'yue', 'nüe', 'lüe', 'jue', 'que', 'xue',

  // ün row
  'yun', 'jun', 'qun', 'xun'
];

export function getPhonetic(initialChar, finalChar, lang, displayMode = 'joined') {
  const iData = pronunciationNotations.initials[initialChar];
  const fData = pronunciationNotations.finals[finalChar];

  if (!iData || !fData) return '';

  const initialText = iData[lang] || '';
  const finalText = fData[lang] || '';

  if (displayMode === 'separated') {
    return `${initialText} + ${finalText}`;
  }

  // Default: joined
  return `${initialText}${finalText}`;
}

export function getTones(pinyin) {
  const vowels = ['a', 'o', 'e', 'i', 'u', 'ü', 'v'];
  const toneMarks = {
    a: ['ā', 'á', 'ǎ', 'à', 'a'],
    o: ['ō', 'ó', 'ǒ', 'ò', 'o'],
    e: ['ē', 'é', 'ě', 'è', 'e'],
    i: ['ī', 'í', 'ǐ', 'ì', 'i'],
    u: ['ū', 'ú', 'ǔ', 'ù', 'u'],
    ü: ['ǖ', 'ǘ', 'ǚ', 'ǜ', 'ü'],
    v: ['ǖ', 'ǘ', 'ǚ', 'ǜ', 'ü']
  };

  let mainVowelChar = '';
  let mainVowelIndex = -1;

  if (pinyin.includes('a')) {
    mainVowelChar = 'a';
    mainVowelIndex = pinyin.indexOf('a');
  } else if (pinyin.includes('e')) {
    mainVowelChar = 'e';
    mainVowelIndex = pinyin.indexOf('e');
  } else if (pinyin.includes('ou')) {
    mainVowelChar = 'o';
    mainVowelIndex = pinyin.indexOf('o');
  } else {
    for (let i = pinyin.length - 1; i >= 0; i--) {
      if (vowels.includes(pinyin[i])) {
        mainVowelChar = pinyin[i];
        mainVowelIndex = i;
        break;
      }
    }
  }

  if (mainVowelIndex === -1) return [pinyin, pinyin, pinyin, pinyin, pinyin];

  const tones = [];
  const marks = toneMarks[mainVowelChar];

  for (let i = 0; i < 4; i++) {
    const pre = pinyin.substring(0, mainVowelIndex);
    const post = pinyin.substring(mainVowelIndex + 1);
    tones.push(pre + marks[i] + post);
  }
  tones.push(pinyin); // Neutral

  return tones;
}

// Check if a specific initial+final combination is valid
export function isValidSyllable(initial, final, rowIndex = -1) {
  // Handle special first 'i' row (only z/c/s/zh/ch/sh/r)
  if (rowIndex === 0 && final === 'i') {
    const specialInitials = ['z', 'c', 's', 'zh', 'ch', 'sh', 'r'];
    if (!specialInitials.includes(initial)) return false;
    return validCombinations.includes(initial + 'i');
  }

  // Normal i row (rowIndex 11 in Yoyo, but we handle by checking)
  if (final === 'i' && rowIndex > 0) {
    // Normal 'i' combines with b,p,m,d,t,n,l,j,q,x
    const normalIInitials = ['b', 'p', 'm', 'd', 't', 'n', 'l', 'j', 'q', 'x'];
    if (!normalIInitials.includes(initial)) return false;
  }

  // Construct pinyin
  let pinyin = initial + final;

  // Apply display rules for lookup
  // iou -> iu, uei -> ui, uen -> un
  if (final === 'iou') pinyin = initial + 'iu';
  if (final === 'uei') pinyin = initial + 'ui';
  if (final === 'uen') pinyin = initial + 'un';

  // j/q/x + ü -> ju/qu/xu (ü dots removed)
  if (['j', 'q', 'x'].includes(initial) && final === 'ü') pinyin = initial + 'u';
  if (['j', 'q', 'x'].includes(initial) && final === 'üe') pinyin = initial + 'ue';
  if (['j', 'q', 'x'].includes(initial) && final === 'üan') pinyin = initial + 'uan';
  if (['j', 'q', 'x'].includes(initial) && final === 'ün') pinyin = initial + 'un';

  return validCombinations.includes(pinyin);
}

// Get display pinyin (applies spelling rules)
export function getDisplayPinyin(initial, final) {
  let pinyin = initial + final;

  // Display transformations
  if (final === 'iou') return initial + 'iu';
  if (final === 'uei') return initial + 'ui';
  if (final === 'uen') return initial + 'un';

  // j/q/x + ü rules
  if (['j', 'q', 'x'].includes(initial)) {
    if (final === 'ü') return initial + 'u';
    if (final === 'üe') return initial + 'ue';
    if (final === 'üan') return initial + 'uan';
    if (final === 'ün') return initial + 'un';
  }

  return pinyin;
}

// Get standalone form of a final (no initial)
export function getStandalone(final) {
  return standaloneFinals[final] || null;
}
