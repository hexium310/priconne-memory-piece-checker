export interface Character {
  hasUniqueEquipment: boolean;
  initialRarity: 1 | 2 | 3;
  maxRarity: 5 | 6;
  name: string;
  pieceType: 'hard' | 'dungeon' | 'arena' | 'pArena' | 'clan' | 'master' | 'none';
}

export const characters: Character[] = [
  {
    name: 'ペコリーヌ',
    initialRarity: 1,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'コッコロ',
    initialRarity: 1,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'ユイ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'レイ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'シズル',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'ミミ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'キョウカ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'アオイ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'イリヤ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'シノブ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'ジュン',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'トモ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'サレン',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'クルミ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'カスミ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'マヒル',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'リマ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'シオリ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'アキノ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'ミフユ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'ルカ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'エリコ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'ミサキ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'ユキ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'ニノン',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'アリサ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'ジータ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'hard',
  },
  {
    name: 'アン',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'hard',
  },
  {
    name: 'ノゾミ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'dungeon',
  },
  {
    name: 'クウカ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'dungeon',
  },
  {
    name: 'アカリ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'dungeon',
  },
  {
    name: 'ミツキ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'dungeon',
  },
  {
    name: 'ユカリ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'dungeon',
  },
  {
    name: 'マホ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'dungeon',
  },
  {
    name: 'キャル',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'dungeon',
  },
  {
    name: 'リン',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'dungeon',
  },
  {
    name: 'ミサト',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'dungeon',
  },
  {
    name: 'マツリ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'dungeon',
  },
  {
    name: 'アユミ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'dungeon',
  },
  {
    name: 'タマキ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'arena',
  },
  {
    name: 'ヒヨリ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'arena',
  },
  {
    name: 'ミソギ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'arena',
  },
  {
    name: 'モニカ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'arena',
  },
  {
    name: 'リノ',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: 'arena',
  },
  {
    name: 'アヤネ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'arena',
  },
  {
    name: 'ナナカ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'arena',
  },
  {
    name: 'ミヤコ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'pArena',
  },
  {
    name: 'カオリ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'pArena',
  },
  {
    name: 'アンナ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'pArena',
  },
  {
    name: 'ハツネ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'pArena',
  },
  {
    name: 'スズナ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'pArena',
  },
  {
    name: 'ツムギ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'pArena',
  },
  {
    name: 'マコト',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'clan',
  },
  {
    name: 'ヨリ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'clan',
  },
  {
    name: 'イオ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'clan',
  },
  {
    name: 'チカ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'clan',
  },
  {
    name: 'スズメ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'clan',
  },
  {
    name: 'クリスティーナ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'master',
  },
  {
    name: 'ムイミ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'master',
  },
  {
    name: 'ペコリーヌ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'master',
  },
  {
    name: 'キャル（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'master',
  },
  {
    name: 'スズメ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'master',
  },
  {
    name: 'タマキ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'master',
  },
  {
    name: 'シノブ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'master',
  },
  {
    name: 'ミサキ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'master',
  },
  {
    name: 'チカ（クリスマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'アヤネ（クリスマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'ユイ（ニューイヤー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'ヒヨリ（ニューイヤー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'シズル（バレンタイン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'グレア',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'hard',
  },
  {
    name: 'クウカ（オーエド）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'hard',
  },
  {
    name: 'ニノン（オーエド）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'レム',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'エミリア',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'スズナ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'サレン（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'マコト（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'マホ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'コッコロ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'none',
  },
  {
    name: 'ミフユ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'none',
  },
  {
    name: 'ミヤコ（ハロウィン）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: 'none',
  },
  {
    name: 'クルミ（クリスマス）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'レイ（ニューイヤー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'エリコ（バレンタイン）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'ルゥ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'ラム',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'イオ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'カオリ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'ネネカ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'master',
  },
  {
    name: 'アオイ（編入生）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'クロエ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'ミソギ（ハロウィン）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'キョウカ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
  {
    name: 'ミミ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: 'none',
  },
];
