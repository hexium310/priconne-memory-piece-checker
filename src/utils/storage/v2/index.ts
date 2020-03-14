import { characters } from 'data';

export type CharacterState = {
  rarity: number;
  equipment: number;
  possessionPieces: number;
}

export type Characters = Record<string, CharacterState>;

export type Storage = {
  characters: Characters;
  version: number;
}

export const STORAGE_VERSION = 2.1;

export const isStorageTopKey = (key: string): key is keyof Storage => (
  key === 'characters' || key === 'version'
);

const validateJSON = (value: string): boolean => {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
};

export const parseStorage = <T>(): T => (
  Object.fromEntries(Object.entries(window.localStorage).filter(([, value]) => validateJSON(value)).map(([key, value]) => [key, JSON.parse(value)]))
);

export const loadStorage = <T extends Storage, K extends keyof T & string>(
  key: K
): T[K] => {
  const item = window.localStorage.getItem(key);
  const data: T[K] = item === null ? {} : JSON.parse(item);

  return data;
};

export const buildData = <T>(oldData: T, newData: T, rewrite: boolean): T => {
  if (typeof newData === 'number') {
    return rewrite || typeof oldData !== 'number' ? newData : oldData;
  } else {
    return rewrite ? { ...oldData, ...newData } : { ...newData, ...oldData };
  }
};

export const saveStorage = <T extends Storage, K extends keyof T & string>(
  key: K,
  newData: T[K],
  rewrite = true
): void => {
  if (isStorageTopKey(key)) {
    const oldData = loadStorage<T, K>(key);
    const data = buildData<T[K]>(oldData, newData, rewrite);

    window.localStorage.setItem(key, JSON.stringify(data));
  }
};

export const initStorage = (): void => {
  const charactersItem: Characters = Object.fromEntries(characters.map((value) => [
    value.name,
    {
      rarity: 0,
      equipment: 0,
      possessionPieces: 0,
    },
  ]));

  saveStorage('characters', charactersItem, false);
  saveStorage('version', STORAGE_VERSION, false);
};
