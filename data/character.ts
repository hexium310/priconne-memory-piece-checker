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
    pieceType: ['hard', 'side'],
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
    pieceType: ['hard', 'side'],
  },
  {
    name: 'ミミ',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'キョウカ',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'アオイ',
    initialRarity: 1,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'イリヤ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
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
    pieceType: ['hard', 'side'],
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
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'カスミ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'マヒル',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
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
    pieceType: ['hard', 'side'],
  },
  {
    name: 'エリコ',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'ミサキ',
    initialRarity: 1,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
  },
  {
    name: 'ユキ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
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
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ジータ',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'アン',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ノゾミ',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['dungeon', 'side'],
  },
  {
    name: 'クウカ',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['dungeon', 'side'],
  },
  {
    name: 'アカリ',
    initialRarity: 2,
    maxRarity: 6,
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
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['dungeon'],
  },
  {
    name: 'ミサト',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['dungeon'],
  },
  {
    name: 'マツリ',
    initialRarity: 2,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['dungeon', 'side'],
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
    pieceType: ['arena', 'side'],
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
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['arena', 'side'],
  },
  {
    name: 'モニカ',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['arena', 'side'],
  },
  {
    name: 'リノ',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['arena', 'side'],
  },
  {
    name: 'アヤネ',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['arena', 'side'],
  },
  {
    name: 'ナナカ',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['arena'],
  },
  {
    name: 'ミヤコ',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['pArena'],
  },
  {
    name: 'カオリ',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['pArena', 'side'],
  },
  {
    name: 'アンナ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['pArena', 'side'],
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
    maxRarity: 6,
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
    pieceType: ['clan', 'side'],
  },
  {
    name: 'ヨリ',
    initialRarity: 1,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['clan', 'side'],
  },
  {
    name: 'イオ',
    initialRarity: 3,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['clan', 'side'],
  },
  {
    name: 'チカ',
    initialRarity: 2,
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['clan'],
  },
  {
    name: 'スズメ',
    initialRarity: 1,
    maxRarity: 6,
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
    maxRarity: 6,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'キャル（サマー）',
    initialRarity: 3,
    maxRarity: 6,
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
    maxRarity: 6,
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
    pieceType: ['side'],
  },
  {
    name: 'エリコ（バレンタイン）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['side'],
  },
  {
    name: 'ルゥ',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['side'],
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
    pieceType: ['side'],
  },
  {
    name: 'カオリ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['side'],
  },
  {
    name: 'ネネカ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'アオイ（編入生）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard', 'side'],
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
    pieceType: ['side'],
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
    pieceType: ['hard', 'side'],
  },
  {
    name: 'ノゾミ（クリスマス）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['side'],
  },
  {
    name: 'クリスティーナ（クリスマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'イリヤ（クリスマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'キャル（ニューイヤー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'スズメ（ニューイヤー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['side'],
  },
  {
    name: 'コッコロ（ニューイヤー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'シオリ（マジカル）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['side'],
  },
  {
    name: 'カスミ（マジカル）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ペコリーヌ（プリンセス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'ミオ（デレマス）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'ウヅキ（デレマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'リン（デレマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'ユニ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'チエル',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'リン（レンジャー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['hard'],
  },
  {
    name: 'マヒル（レンジャー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['hard'],
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
    pieceType: ['side'],
  },
  {
    name: 'リノ（ワンダー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['hard'],
  },
  {
    name: 'イノリ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['hard'],
  },
  {
    name: 'ユイ（プリンセス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'アンナ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['side'],
  },
  {
    name: 'ルカ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'ナナカ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ミサト（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['side'],
  },
  {
    name: 'ハツネ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'ジュン（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
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
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ヨリ（エンジェル）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'ツムギ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
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
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'モニカ（マジカル）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'トモ（マジカル）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'アキノ（クリスマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'ユカリ（クリスマス）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'サレン（クリスマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['clan'],
  },
  {
    name: 'ムイミ（ニューイヤー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'ヒヨリ（プリンセス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'ペコリーヌ（ニューイヤー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'ネネカ（ニューイヤー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'コッコロ（儀装束）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'ユイ（儀装束）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'シェフィ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'カスミ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'キャル（プリンセス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'リマ（シンデレラ）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'マコト（プリンセス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'マホ（シンデレラ）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['hard'],
  },
  {
    name: 'チエル（聖学祭）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'クロエ（聖学祭）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'イノリ（タイムトラベル）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'カヤ（タイムトラベル）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'アオイ（作業服）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'タマキ（作業服）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'ミフユ（作業服）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'レイ（プリンセス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'エリコ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['master'],
  },
  {
    name: 'シズル（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'ツムギ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'ノゾミ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'チカ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'ハツネ＆シオリ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'ミツキ（オーエド）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ユキ（オーエド）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'クレジッタ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'カオリ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ニノン（ハロウィン）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'マツリ（ハロウィン）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['none'],
  },
  {
    name: 'スズナ（ハロウィン）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'カリン',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'ホマレ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'ホマレ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'イオ（ノワール）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'クウカ（ノワール）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ミヤコ（クリスマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'マヒル（クリスマス）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'リノ（クリスマス）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ミソギ＆ミミ＆キョウカ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'ルカ（ニューイヤー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: '3シェフィ（ニューイヤー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'イリヤ（ニューイヤー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ぺコリーヌ（オーバーロード）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ラビリスタ（オーバーロード）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ユニ（聖学祭）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ランファ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'キャル（オーバーロード）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'クルミ（ステージ）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'マコト（シンデレラ）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: true,
    pieceType: ['pArena'],
  },
  {
    name: 'ミサキ（ステージ）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'アユミ（怪盗）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'イノリ（怪盗）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'アキノ＆サレン',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['master'],
  },
  {
    name: 'シノブ（パイレーツ）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'アンナ（パイレーツ）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'アオイ（キャンプ）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ユカリ（キャンプ）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ヴァンピィ',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ヒヨリ（サマー）',
    initialRarity: 1,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'レイ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ユイ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
  {
    name: 'ミミ（サマー）',
    initialRarity: 3,
    maxRarity: 5,
    hasUniqueEquipment: false,
    pieceType: ['none'],
  },
];
