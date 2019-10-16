import mapValues from 'lodash-es/mapValues';

import { characters, pieceTypes, PieceTypes } from 'data';

export type ShowPieceTypes = Record<keyof PieceTypes, boolean>

export type CharacterState = {
  rarity: number;
  equipment: number;
  possessionPieces: number;
}

export type Characters = Record<string, CharacterState>;

export type Storage = {
  characters: Characters;
  showPieceTypes: ShowPieceTypes;
  version: 2;
}

export const parseStorage = <T>(): T => (
  Object.fromEntries(Object.entries(window.localStorage).map(([key, value]) => [key, JSON.parse(value)]))
);

export const isStorageTopKey = (key: string): key is keyof Storage => (
  key === 'characters' || key === 'showPieceTypes' || key === 'version'
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
  const showPieceTypesItem = mapValues(pieceTypes, () => true);
  const versionItem = 2;

  saveStorage('characters', charactersItem, false);
  saveStorage('showPieceTypes', showPieceTypesItem, false);
  saveStorage('version', versionItem, false);
};
