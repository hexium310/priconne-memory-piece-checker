import max from 'lodash-es/max';

interface ShowPieceTypes {
  [s: string]: boolean;
}

interface CharacterState {
  rarity: string[] | number;
  equipment: string[] | number;
  possessionPieces: string[] | number;
}

interface Storage {
  [characterName: string]: CharacterState | ShowPieceTypes;
  showPieceTypes: ShowPieceTypes;
}

export const loadStorage = <T extends object = Storage>(key: string): T[keyof T] => {
  const storage = window.localStorage.getItem(key);
  const data: T[keyof T] = storage === null ? {} : JSON.parse(storage);

  return data;
};

export const saveStorage = <T extends object = Storage>(
  key: string,
  newData: Partial<T>
): void => {
  const data = loadStorage<T>(key);
  window.localStorage.setItem(key, JSON.stringify({ ...data, ...newData }));
};

export const restore = (
  key: keyof CharacterState,
  data: CharacterState | ShowPieceTypes
): number => (
  Array.isArray(data[key])
    ? max((data[key] as string[]).map((n) => Number(n))) || 0
    : (data[key] as number) || 0
);
