import { PieceType } from 'data/pieceTypes';

export interface Character {
  hasUniqueEquipment: boolean;
  initialRarity: 1 | 2 | 3;
  maxRarity: 5 | 6;
  name: string;
  pieceType: PieceType[];
}

export const characters: Character[] = [
  {
    name: 'ペコリーヌ',
    initialRarity: 1,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'コッコロ',
    initialRarity: 1,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ユイ',
    initialRarity: 1,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'レイ',
    initialRarity: 1,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'シズル',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ミミ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'キョウカ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'アオイ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'イリヤ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'シノブ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ジュン',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'トモ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'サレン',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'クルミ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'カスミ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'マヒル',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'リマ',
    initialRarity: 1,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'シオリ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'アキノ',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'ミフユ',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ルカ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'エリコ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ミサキ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ユキ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ニノン',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'アリサ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ジータ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'アン',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'ノゾミ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['dungeon', 'side'],
  },
  {
    name: 'クウカ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['dungeon'],
  },
  {
    name: 'アカリ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['dungeon'],
  },
  {
    name: 'ミツキ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['dungeon', 'side'],
  },
  {
    name: 'ユカリ',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['dungeon', 'side'],
  },
  {
    name: 'マホ',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['dungeon', 'side'],
  },
  {
    name: 'キャル',
    initialRarity: 1,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['dungeon'],
  },
  {
    name: 'リン',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['dungeon'],
  },
  {
    name: 'ミサト',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['dungeon'],
  },
  {
    name: 'マツリ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['dungeon'],
  },
  {
    name: 'アユミ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['dungeon'],
  },
  {
    name: 'タマキ',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['arena'],
  },
  {
    name: 'ヒヨリ',
    initialRarity: 1,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['arena'],
  },
  {
    name: 'ミソギ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['arena', 'side'],
  },
  {
    name: 'モニカ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['arena'],
  },
  {
    name: 'リノ',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['arena'],
  },
  {
    name: 'アヤネ',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['arena'],
  },
  {
    name: 'ナナカ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['arena'],
  },
  {
    name: 'ミヤコ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['pArena'],
  },
  {
    name: 'カオリ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['pArena', 'side'],
  },
  {
    name: 'アンナ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['pArena'],
  },
  {
    name: 'ハツネ',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['pArena', 'side'],
  },
  {
    name: 'スズナ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['pArena'],
  },
  {
    name: 'ツムギ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['pArena'],
  },
  {
    name: 'マコト',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['clan'],
  },
  {
    name: 'ヨリ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['clan', 'side'],
  },
  {
    name: 'イオ',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['clan'],
  },
  {
    name: 'チカ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['clan'],
  },
  {
    name: 'スズメ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['clan'],
  },
  {
    name: 'クリスティーナ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'ムイミ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'ペコリーヌ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'キャル（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'スズメ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'タマキ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'シノブ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'ミサキ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'チカ（クリスマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'アヤネ（クリスマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'ユイ（ニューイヤー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'ヒヨリ（ニューイヤー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'シズル（バレンタイン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'グレア',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'クウカ（オーエド）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ニノン（オーエド）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'レム',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'エミリア',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'スズナ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'サレン（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'マコト（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'マホ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'コッコロ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['side'],
  },
  {
    name: 'ミフユ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['side'],
  },
  {
    name: 'ミヤコ（ハロウィン）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['side'],
  },
  {
    name: 'クルミ（クリスマス）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['side'],
  },
  {
    name: 'レイ（ニューイヤー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'エリコ（バレンタイン）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'ルゥ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'ラム',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'イオ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'カオリ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'ネネカ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'アオイ（編入生）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'クロエ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ミソギ（ハロウィン）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'キョウカ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'ミミ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ルナ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'カヤ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ノゾミ（クリスマス）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'クリスティーナ（クリスマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'イリヤ（クリスマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['hard'],
  },
  {
    name: 'キャル（ニューイヤー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'スズメ（ニューイヤー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'コッコロ（ニューイヤー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'シオリ（マジカル）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'カスミ（マジカル）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['hard'],
  },
  {
    name: 'ペコリーヌ（プリンセス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'ミオ（デレマス）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ウヅキ（デレマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'リン（デレマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ユニ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['hard'],
  },
  {
    name: 'チエル',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['hard'],
  },
  {
    name: 'リン（レンジャー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'マヒル（レンジャー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'コッコロ（プリンセス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'アユミ（ワンダー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'リノ（ワンダー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'イノリ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ユイ（プリンセス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'アンナ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ルカ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ナナカ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ミサト（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ハツネ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ジュン（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ラビリスタ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'アカリ（エンジェル）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ヨリ（エンジェル）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ツムギ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'マツリ（ハロウィン',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'レイ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'モニカ（マジカル）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'トモ（マジカル）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
];
