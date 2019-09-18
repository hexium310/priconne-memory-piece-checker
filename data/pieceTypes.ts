import { Character } from './character';

export type PieceTypes = {
  [type in Character['pieceType']]: string;
}

export const pieceTypes: PieceTypes = {
  "hard": "ハードクエスト",
  "dungeon": "ダンジョンコイン",
  "arena": "アリーナコイン",
  "pArena": "プリンセスアリーナコイン",
  "clan": "クランコイン",
  "master": "マスターコイン",
  "none": "女神の秘石",
};
