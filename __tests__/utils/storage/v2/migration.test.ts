import {
  convertToNumber,
  complementCharacterProperties,
  deleteFlattenedCharacters,
  migrateStorage,
} from 'utils/storage/v2/migration';
import {
  saveStorage as saveStorageV1,
  Characters as CharactersV1,
  Storage as StorageV1,
} from 'utils/storage/v1';
import {
  isStorageTopKey,
  parseStorage,
  saveStorage,
  Characters,
  Storage,
} from 'utils/storage/v2';

describe('convertToNumber()', () => {
  test('should return 0 when function receives `[]`', () => {
    expect(convertToNumber([])).toBe(0);
  });

  test('shoule return 0 when function receives `undefined`', () => {
    expect(convertToNumber(undefined)).toBe(0);
  });

  test('shoule return 5 when function receives `5`', () => {
    expect(convertToNumber(5)).toBe(5);
  });

  test('shoule return 5 when function receives `[\'1\', \'2\', \'3\', \'4\', \'5\']`', () => {
    expect(convertToNumber(['1', '2', '3', '4', '5'])).toBe(5);
  });
});

test('complementCharacterProperties() should return characters object with complemented properties', () => {
  const imperfect: CharactersV1 = {
    a: {},
  };

  const perfect: Characters = {
    a: {
      rarity: 0,
      equipment: 0,
      possessionPieces: 0,
    },
  };

  const complementedCharacters = complementCharacterProperties(imperfect);

  expect(complementedCharacters).toStrictEqual(perfect);
});

describe('using storage:', () => {
  const characters = {
    'ペコリーヌ': {
      rarity: 5,
      equipment: 5,
      possessionPieces: 5,
    },
  };

  const showPieceTypes = {
    hard: true,
    dungeon: true,
    arena: true,
    pArena: true,
    clan: true,
    master: true,
    none: true,
  };

  const storageV1: StorageV1 = {
    ...characters,
    showPieceTypes,
  };

  beforeEach(() => {
    window.localStorage.clear();
  });

  test('deleteFlattenedCharacters() should delete only flattened characters', () => {
    for (const [key, value] of Object.entries(storageV1)) {
      saveStorageV1(key, value);
    }
    deleteFlattenedCharacters(Object.keys(characters));

    expect(parseStorage()).toStrictEqual({ showPieceTypes });
  });

  describe('migration', () => {
    const storageV2: Storage = {
      characters,
      showPieceTypes,
      version: 2,
    };

    test('from storage that has flattened character properties', () => {
      for (const [key, value] of Object.entries(storageV1)) {
        saveStorageV1(key, value);
      }
      migrateStorage();

      expect(parseStorage()).toStrictEqual(storageV2);
    });

    test('from storage that has `characters` property', () => {
      for (const [key, value] of Object.entries(storageV2)) {
        isStorageTopKey(key) && saveStorage(key, value);
      }
      migrateStorage();

      expect(parseStorage()).toStrictEqual(storageV2);
    });
  });
});
