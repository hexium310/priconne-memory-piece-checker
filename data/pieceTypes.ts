export type PieceType = 'hard' | 'side' | 'dungeon' | 'arena' | 'pArena' | 'clan' | 'master' | 'none';

export type PieceTypes = {
  [type in PieceType]: string;
}

export const pieceTypes: PieceTypes = {
  hard: 'ハードクエスト',
  side: 'サイドストーリー',
  dungeon: 'ダンジョンコイン',
  arena: 'アリーナコイン',
  pArena: 'プリンセスアリーナコイン',
  clan: 'クランコイン',
  master: 'マスターコイン',
  none: '女神の秘石',
};
