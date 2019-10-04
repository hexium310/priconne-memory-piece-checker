import {
  loadStorage,
  parseStorage,
  saveStorage,
  Characters,
  ShowPieceTypes,
} from 'utils/storage/v2';

const characters: Characters = {
  a: {
    rarity: 5,
    equipment: 5,
    possessionPieces: 5,
  },
};

const showPieceTypes: ShowPieceTypes = {
  arena: true,
  clan: true,
  dungeon: true,
  hard: true,
  master: true,
  none: true,
  pArena: true,
};

beforeEach(() => {
  window.localStorage.clear();
});

test('parseStorage() should return storage that became a JavaScript object', () => {
  window.localStorage.setItem('characters', JSON.stringify(characters));
  const parsed = parseStorage();

  expect(parsed).toStrictEqual({ characters });
});

describe('loadStorage()', () => {

  beforeEach(() => {
    window.localStorage.setItem('characters', JSON.stringify(characters));
  });

  test('should return object when pass existing key', () => {
    expect(loadStorage('characters')).toStrictEqual(characters);
  });

  test('should return empty object when pass not existing key', () => {
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

  test('should save showPieceTypes to storage when pass \'showPieceTypes\' to 1st argument', () => {
    saveStorage('showPieceTypes', showPieceTypes);

    const gotItemString = window.localStorage.getItem('showPieceTypes');

    expect(gotItemString).not.toBeNull();
    expect(JSON.parse(gotItemString as string)).toStrictEqual(showPieceTypes);
  });

  test('must not save when pass invalid key to 1st argument', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    saveStorage('invalidKey' as any, characters);

    const gotItemString = window.localStorage.getItem('invalidKey');

    expect(JSON.parse(gotItemString as string)).toBeNull();
  });
});
