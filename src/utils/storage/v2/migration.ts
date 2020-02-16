import max from 'lodash-es/max';

import {
  Storage as StorageV1,
  Characters as CharactersV1,
} from 'utils/storage/v1';
import {
  parseStorage,
  saveStorage,
  Storage,
  Characters,
  ShowPieceTypes,
} from 'utils/storage/v2';

export type OldStorage = Storage | StorageV1

export const isStorageV2 = (storage: OldStorage): storage is Storage => storage.version === 2;

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

export const deleteFlattenedCharacters = (names: string[]): void => {
  for (const name of names) {
    window.localStorage.removeItem(name);
  }
};

export const migrateStorage = (): void => {
  const oldStorage = parseStorage<OldStorage>();

  if (!isStorageV2(oldStorage)) {
    const { showPieceTypes, ...characters } = oldStorage;
    const complementedCharacters = complementCharacterProperties(characters);

    deleteFlattenedCharacters(Object.keys(complementedCharacters));
    saveStorage('showPieceTypes', showPieceTypes as ShowPieceTypes);
    saveStorage('characters', complementedCharacters);
    saveStorage('version', 2);
  }
};
