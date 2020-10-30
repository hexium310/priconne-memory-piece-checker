import React from 'react';
import cntl from 'cntl';

import { rarities, uniqueEquipments, Character, Rarities, UniqueEquipments } from 'data';
import { saveStorage, loadStorage, CharacterState as CharacterStateType } from 'utils/storage/v2';
import CharacterState from 'components/CharacterState';

interface CharacterCardProps {
  character: Character;
  showExcess: boolean;
}

const calculateRequired = (
  target: Rarities | UniqueEquipments,
  condition: (key: string) => boolean
): number => Object.keys(target).filter(condition).reduce((sum, key) => sum + target[key], 0);

const handleFocusPossessionPieces = (
  event: React.FocusEvent<HTMLInputElement>
): void => {
  event.target.select();
};

const CharacterCard = React.memo<CharacterCardProps>(({
  character: {
    initialRarity,
    maxRarity,
    name: characterName,
    hasUniqueEquipment,
  },
  showExcess,
}) => {
  const [rarity, setRarity] = React.useState(0);
  const [equipmentLevel, setEquipmentLevel] = React.useState(0);
  const [possessionPieces, setPossessionPieces] = React.useState(0);

  const isInRarityRange = (rarity: number): boolean => rarity > initialRarity && rarity <= maxRarity;

  const requiredRarityPieces = calculateRequired(rarities, (v) => Number(v) > rarity && isInRarityRange(Number(v)));
  const requiredEquipmentPieces = calculateRequired(uniqueEquipments, (v) => Number(v) > equipmentLevel);
  const requiredPieces = requiredRarityPieces + requiredEquipmentPieces;
  const deficiency = requiredPieces - possessionPieces;
  const showCharacter = deficiency > 0 || showExcess;

  React.useEffect(() => {
    const data = loadStorage('characters')[characterName];

    setRarity(data.rarity || 0);
    setEquipmentLevel(data.equipment || 0);
    setPossessionPieces(data.possessionPieces || 0);
  }, []);

  const storeState = React.useCallback((
    key: string,
    value: number,
    setState: React.Dispatch<React.SetStateAction<number>>
  ): void => {
    const oldData = loadStorage('characters')[characterName];
    const newData: CharacterStateType = { ...oldData, [key]: value };

    saveStorage('characters', { [characterName]: newData });
    setState(value);
  }, []);

  const handleChangeRarity = React.useCallback((
    event: React.ChangeEvent<HTMLInputElement> & React.MouseEvent<HTMLInputElement>,
  ) => storeState('rarity', Number(event.target.value), setRarity), []);

  const handleChangeEquopmentLevel = React.useCallback((
    event: React.ChangeEvent<HTMLInputElement> & React.MouseEvent<HTMLInputElement>,
  ) => storeState('equipment', Number(event.target.value), setEquipmentLevel), []);

  const handleChangePossessionPieces = React.useCallback((
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => storeState('possessionPieces', Number(event.target.value), setPossessionPieces), []);

  const Character = React.useMemo(() => {
    return showCharacter ? (
      <div className={ cntl`
        bg-white
        border
        border-solid
        box-border
        centering-height-full
        col-span-12
        divide-x
        grid
        grid-cols-12
        items-center
        mt-2
        rounded
        shadow
        text-center
      ` }>
        <div className={ cntl`col-start-1 col-end-1` }>
          <p>{ characterName }</p>
        </div>
        <div className={ cntl`col-start-2 col-end-11` }>
          <div className={ cntl`divide-y` }>
            <CharacterState
              title="才能開花"
              characterName={ characterName }
              valuePrefix="☆"
              data={ Object.entries(rarities).filter(([rarity]) => isInRarityRange(Number(rarity))) }
              state={ rarity }
              handleChange={ handleChangeRarity }
              displayCondition
            />
            <CharacterState
              title="専用装備"
              characterName={ characterName }
              valuePrefix="Lv. "
              data={ Object.entries(uniqueEquipments) }
              state={ equipmentLevel }
              handleChange={ handleChangeEquopmentLevel }
              displayCondition={ hasUniqueEquipment }
            />
          </div>
        </div>
        <div className={ cntl`col-start-11 col-end-11` }>
          <div className={ cntl`divide-black divide-dashed divide-y` }>
            <input
              className={ cntl`
                focus:placeholder-transparent
                spin-none
                text-center
                text-xl
                w-full
              ` }
              type="number"
              min="0"
              placeholder={ possessionPieces.toString() }
              value={ possessionPieces || '' }
              onChange={ handleChangePossessionPieces }
              onFocus={ handleFocusPossessionPieces }
            />
            <p className={ cntl`text-xl` }>{ requiredPieces }</p>
          </div>
        </div>
        <div className={ cntl`col-start-12 col-end-12` }>
          <p className={ cntl`
            text-xl
            ${ deficiency > 0 ? 'text-red-600' : 'text-primary'}
          ` }>
            { deficiency }
          </p>
        </div>
      </div>
    ) : null;
  }, [
    rarity,
    equipmentLevel,
    deficiency,
    requiredPieces,
    possessionPieces,
    showCharacter,
  ]);

  return Character;
}, (prevProps, nextProps) => {
  return prevProps.showExcess === nextProps.showExcess;
});
CharacterCard.displayName = 'CharacterCard';

export default CharacterCard;
