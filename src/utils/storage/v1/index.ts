import max from 'lodash-es/max';

export interface ShowPieceTypes {
  [s: string]: boolean;
}

export interface CharacterState {
  rarity?: string[] | number;
  equipment?: string[] | number;
  possessionPieces?: string[] | number;
}

export type Characters = Record<string, Partial<CharacterState>>

export interface Storage {
  [characterName: string]: CharacterState | ShowPieceTypes;
  showPieceTypes: ShowPieceTypes;
}

export const loadStorage = <T extends object = Storage>(key: string): T[keyof T] => {
  const storage = window.localStorage.getItem(key);
  const data: T[keyof T] = storage === null ? {} : JSON.parse(storage);

  return data;
};

export const saveStorage = <T extends object = Storage, K extends keyof T = keyof T>(
  key: K,
  newData: Partial<T[K]>
): void => {
  const data = loadStorage<T>(key.toString());
  window.localStorage.setItem(key.toString(), JSON.stringify({ ...data, ...newData }));
};

export const restore = (
  key: keyof CharacterState,
  data: CharacterState | ShowPieceTypes
): number => (
  Array.isArray(data[key])
    ? max((data[key] as string[]).map((n) => Number(n))) || 0
    : (data[key] as number) || 0
);
