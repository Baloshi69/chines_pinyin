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

// ============================================================================
// "TRUE SOUND" PHONETIC ALIGNMENT SYSTEM
// Based on IPA-driven Mandarin-to-Urdu transliteration research
// Corrects Anglocentric errors in standard Pinyin mappings
// ============================================================================

export const pronunciationNotations = {
  initials: {
    // === STOP CONSONANTS (The Unvoicing Shift) ===
    // Pinyin stops are UNVOICED [p, t, k] - never use voiced Urdu letters
    b: { urdu: 'پ', ipa: '[p]', note: 'Unvoiced – NOT ب. Like "p" without air puff' },
    p: { urdu: 'پھ', ipa: '[pʰ]', note: 'Aspirated – with puff of air' },
    d: { urdu: 'ت', ipa: '[t]', note: 'Unvoiced – NOT د. Soft dental' },
    t: { urdu: 'تھ', ipa: '[tʰ]', note: 'Aspirated' },
    g: { urdu: 'ک', ipa: '[k]', note: 'Unvoiced – NOT گ' },
    k: { urdu: 'کھ', ipa: '[kʰ]', note: 'Aspirated' },

    // === OTHER CONSONANTS ===
    m: { urdu: 'م', ipa: '[m]' },
    f: { urdu: 'ف', ipa: '[f]' },
    n: { urdu: 'ن', ipa: '[n]' },
    l: { urdu: 'ل', ipa: '[l]' },
    h: { urdu: 'خ', ipa: '[x]', note: 'Soft خ – more friction than ہ' },

    // === ALVEOLO-PALATAL (Soft/Front – tongue tip DOWN) ===
    j: { urdu: 'چ', ipa: '[tɕ]', type: 'soft', note: 'Soft – keep tongue tip behind lower teeth' },
    q: { urdu: 'چھ', ipa: '[tɕʰ]', type: 'soft', note: 'Soft Aspirated – tongue tip down, puff of air' },
    x: { urdu: 'ش', ipa: '[ɕ]', type: 'soft', note: 'Soft/Hissing – spread lips like smiling' },

    // === DENTAL SIBILANTS ===
    z: { urdu: 'ز', ipa: '[ts]', note: 'Like "ds" in kids – unvoiced' },
    c: { urdu: 'تس', ipa: '[tsʰ]', note: 'Like "ts" in cats – aspirated' },
    s: { urdu: 'س', ipa: '[s]' },

    // === RETROFLEX (Hard – curl tongue BACK) ===
    zh: { urdu: 'چ', ipa: '[tʂ]', type: 'hard', note: 'Hard/Retroflex – curl tongue back' },
    ch: { urdu: 'چھ', ipa: '[tʂʰ]', type: 'hard', note: 'Retroflex Aspirated – curl tongue + puff air' },
    sh: { urdu: 'ش', ipa: '[ʂ]', type: 'hard', note: 'Retroflex – curl tongue, round lips' },
    r: { urdu: 'ژ', ipa: '[ɻ]', type: 'hard', note: 'Buzzing ژ – NOT rolling ر' }
  },
  finals: {
    // === OPEN VOWEL ===
    a: { urdu: 'آ', harakat: 'مدّہ', note: 'Open [a] – use Madda' },

    // === DIPHTHONGS ===
    ai: { urdu: 'آئی', note: 'a + i glide' },
    ao: { urdu: 'آؤ', note: 'a + o glide' },

    // === SCHWA GROUP ===
    e: { urdu: 'اَ', harakat: 'زبر', note: 'Schwa [ə] – Zabar' },
    ei: { urdu: 'اے', note: 'e + i glide' },
    er: { urdu: 'اَر', harakat: 'زبر', note: 'Retroflex schwa' },

    // === O GROUP ===
    o: { urdu: 'او', note: 'Back rounded' },
    ou: { urdu: 'اوُ', harakat: 'پیش', note: 'o + u glide' },

    // === NASAL -N FINALS (Use Jazam ْ) ===
    an: { urdu: 'اَنْ', harakat: 'زبر+جزم', note: 'Schwa + nasal stop' },
    en: { urdu: 'اَنْ', harakat: 'زبر+جزم', note: 'Schwa [ə] + n' },
    in: { urdu: 'یِنْ', harakat: 'زیر+جزم', note: 'High front + nasal' },

    // === NASAL -NG FINALS (Use ن + گ) ===
    ang: { urdu: 'آنگ', harakat: 'ن+گ', note: 'Velar nasal [ŋ]' },
    eng: { urdu: 'اَنگ', harakat: 'زبر+ن+گ', note: 'Schwa + velar nasal' },
    ong: { urdu: 'ونگ', harakat: 'ن+گ', note: 'Rounded + velar nasal' },

    // === HIGH FRONT I GROUP ===
    i: { urdu: 'ی', harakat: 'زیر', note: 'High front [i]. Buzz after z/c/s/zh/ch/sh/r' },
    ia: { urdu: 'یا', note: 'i + a' },
    iao: { urdu: 'یاو', note: 'i + a + o' },
    ie: { urdu: 'یے', note: 'i + e' },
    iou: { urdu: 'یو', note: 'Written as -iu' },
    ian: { urdu: 'یَنْ', harakat: 'زبر+جزم', note: 'i + a + n' },
    iang: { urdu: 'یانگ', harakat: 'ن+گ', note: 'i + a + velar nasal' },
    ing: { urdu: 'ینگ', harakat: 'ن+گ', note: 'i + velar nasal' },
    iong: { urdu: 'یونگ', harakat: 'ن+گ', note: 'i + rounded + velar nasal' },

    // === HIGH BACK U GROUP ===
    u: { urdu: 'و', harakat: 'پیش', note: 'High back rounded [u]' },
    ua: { urdu: 'وا', note: 'u + a' },
    uo: { urdu: 'وُو', note: 'u + o' },
    uai: { urdu: 'وائی', note: 'u + a + i' },
    uei: { urdu: 'وے', note: 'Written as -ui' },
    uan: { urdu: 'وَنْ', harakat: 'زبر+جزم', note: 'u + a + n' },
    uen: { urdu: 'وَنْ', harakat: 'زبر+جزم', note: 'Written as -un' },
    uang: { urdu: 'وانگ', harakat: 'ن+گ', note: 'u + a + velar nasal' },
    ueng: { urdu: 'وَنگ', harakat: 'ن+گ', note: 'u + velar nasal (rare)' },

    // === FRONT ROUNDED Ü GROUP ===
    ü: { urdu: 'یُو', harakat: 'پیش', note: 'French U – lips rounded, tongue high front' },
    üe: { urdu: 'یُوے', note: 'ü + e' },
    üan: { urdu: 'یُوَنْ', harakat: 'زبر+جزم', note: 'ü + a + n' },
    ün: { urdu: 'یُنْ', harakat: 'جزم', note: 'ü + n' }
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
