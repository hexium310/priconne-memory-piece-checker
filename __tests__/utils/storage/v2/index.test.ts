import {
  buildData,
  initStorage,
  loadStorage,
  parseStorage,
  saveStorage,
  Characters,
} from 'utils/storage/v2';

const characters: Characters = {
  a: {
    rarity: 5,
    equipment: 5,
    possessionPieces: 5,
  },
};

beforeEach(() => {
  window.localStorage.clear();
});

test('parseStorage() should return storage that became a JavaScript object', () => {
  window.localStorage.setItem('characters', JSON.stringify(characters));
  const parsed = parseStorage();

  expect(parsed).toStrictEqual({ characters });
});

describe('buildData()', () => {
  const oldData = {
    a: 0,
    b: 0,
    c: 0,
  };

  const newData = {
    a: 100,
    d: 100,
  };

  describe('passed object', () => {
    test('and rewrite = true should return merged new data into old data', () => {
      expect(buildData<Record<string, unknown>>(oldData, newData, true)).toStrictEqual({ ...oldData, ...newData });
    });

    test('with rewrite = false should return merged old data into new data', () => {
      expect(buildData<Record<string, unknown>>(oldData, newData, false)).toStrictEqual({ ...newData, ...oldData });
    });
  });

  describe('passed number', () => {
    test('and rewrite = true should return new data', () => {
      expect(buildData(0, 100, true)).toBe(100);
    });

    test('and rewrite = false should return old data', () => {
      expect(buildData(0, 100, false)).toBe(0);
    });
  });
});

describe('initStorage()', () => {
  test('should initialize when storage is empty', () => {
    initStorage();
    expect(loadStorage('characters')).toMatchObject({
      'アカリ': {
        equipment: 0,
        possessionPieces: 0,
        rarity: 0,
      },
      'シノブ': {
        equipment: 0,
        possessionPieces: 0,
        rarity: 0,
      },
    });
    expect(loadStorage('version')).toBe(2.1);
  });

  test('should initialize parts when storage isn\'t empty', () => {
    saveStorage('characters', {
      'アカリ': {
        equipment: 1,
        possessionPieces: 1,
        rarity: 1,
      },
    });
    saveStorage('version', 2);
    initStorage();
    expect(loadStorage('characters')).toMatchObject({
      'アカリ': {
        equipment: 1,
        possessionPieces: 1,
        rarity: 1,
      },
      'シノブ': {
        equipment: 0,
        possessionPieces: 0,
        rarity: 0,
      },
    });
    expect(loadStorage('version')).toBe(2);
  });
});

describe('loadStorage()', () => {

  beforeEach(() => {
    window.localStorage.setItem('characters', JSON.stringify(characters));
    window.localStorage.setItem('version', '2');
  });

  test('should return characters when it is passed \'characters\'', () => {
    expect(loadStorage('characters')).toStrictEqual(characters);
  });

  test('should return 2 when it is passed \'version\'', () => {
    expect(loadStorage('version')).toBe(2);
  });

  test('should return empty object when it is passed invalid key', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(loadStorage('notExistingKey' as any)).toStrictEqual({});
  });
});

describe('saveStorage()', () => {
  test('should save characters to storage when pass \'characters\' to 1st argument', () => {
    saveStorage('characters', characters);

    const gotItemString = window.localStorage.getItem('characters');

    expect(gotItemString).not.toBeNull();
    expect(JSON.parse(gotItemString as string)).toStrictEqual(characters);
  });

  test('should save 2 to storage when pass \'version\' to 1st argument', () => {
    saveStorage('version', 2);

    const gotItemString = window.localStorage.getItem('version');

    expect(gotItemString).not.toBeNull();
    expect(JSON.parse(gotItemString as string)).toBe(2);
  });

  test('must not save when pass invalid key to 1st argument', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    saveStorage('invalidKey' as any, characters);

    const gotItemString = window.localStorage.getItem('invalidKey');

    expect(JSON.parse(gotItemString as string)).toBeNull();
  });
});
