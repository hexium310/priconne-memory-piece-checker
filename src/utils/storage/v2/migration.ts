import max from 'lodash-es/max';

import {
  Storage as StorageV1,
  Characters as CharactersV1,
} from 'utils/storage/v1';
import {
  parseStorage,
  saveStorage,
  STORAGE_VERSION,
  Storage,
  Characters,
} from 'utils/storage/v2';

export type OldStorage = Storage | StorageV1

export const isLatestStorage = (storage: OldStorage): storage is Storage => storage.version === STORAGE_VERSION;

export const convertToNumber = (value: number | string[] | undefined): number => {
  if (value === undefined) {
    return 0;
  }

  return Array.isArray(value)
    ? max((value).map((n) => Number(n))) || 0
    : value;
};

export const complementCharacterProperties = (characters: CharactersV1): Characters => {
  const complemented = Object.fromEntries(Object.entries(characters).map(([key, value]) => {
    const { rarity = 0, equipment = 0, possessionPieces = 0 } = Object.fromEntries(Object.entries(value).map(([k, v]) => [k, convertToNumber(v)]));

    return [key, { rarity, equipment, possessionPieces }];
  }));

  return complemented;
};

export const removeItems = (names: string[]): void => {
  for (const name of names) {
    window.localStorage.removeItem(name);
  }
};

export const migrateStorage = (): void => {
  const oldStorage = parseStorage<OldStorage>();

  if (!isLatestStorage(oldStorage)) {
    const { showPieceTypes, ...characters } = oldStorage;
    const complementedCharacters = complementCharacterProperties(characters);

    removeItems([...Object.keys(complementedCharacters), 'showPieceTypes']);
    saveStorage('characters', complementedCharacters);
    saveStorage('version', STORAGE_VERSION);
  }
};
