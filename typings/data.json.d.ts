interface Character {
  hasUniqueEquipment: boolean;
  initialRarity: 1 | 2 | 3;
  maxRarity: 5 | 6;
  name: string;
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
    uniqueEquipment: UniqueEquipment;
    upgradingRarity: upgradingRarity;
  }

  const data: Data;

  export default data;
}
