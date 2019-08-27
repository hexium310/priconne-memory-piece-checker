interface Character {
  hasUniqueEquipment: boolean;
  initialRarity: 1 | 2 | 3;
  maxRarity: 5 | 6;
  name: string;
  pieceType: 'hard' | 'dungeon' | 'arena' | 'pArena' | 'clan' | 'master' | 'none';
}

interface UniqueEquipment {
  [level: string]: number;
}

interface UpgradingRarities {
  [rarity: string]: number;
}

declare module '*data/data.json' {
  interface Data {
    characters: Character[];
    pieceTypes: {
      [type in Character['pieceType']]: string;
    };
    uniqueEquipment: UniqueEquipment;
    upgradingRarity: upgradingRarity;
  }

  const data: Data;

  export default data;
}
