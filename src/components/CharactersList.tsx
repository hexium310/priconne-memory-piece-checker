import React from 'react';
import cntl from 'cntl';

import { characters, pieceTypes, PieceType } from 'data';
import CharacterCard from 'components/CharacterCard';
import TabPanel from 'components/TabPanel';
import ClearStorage from 'components/ClearStorage';
import Tab from 'components/Tab';
import List from 'components/List';

const CharactersList: React.FunctionComponent = () => {
  const [showExcess, setShowExcess] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState('hard');

  const handleChangeShowExcess = React.useCallback(() => {
    setShowExcess((value) => !value);
  }, []);

  return (
    <div className={ cntl`mt-4` }>
      <div className={ cntl`flex justify-between` }>
        <label className={ cntl`
          relative pl-4
          h-fit
        ` }>
          <input
            type="checkbox"
            className={ cntl`
              absolute
              inset-y-0
              left-0
              m-auto
            ` }
            checked={ showExcess }
            onChange={ handleChangeShowExcess }
          />
          必要数持っているキャラクターも表示
        </label>
        <ClearStorage></ClearStorage>
      </div>
      <Tab currentTab={ currentTab } setCurrentTab={ setCurrentTab } />
      <List>
        {
          Object.entries(pieceTypes)
            .filter(([pieceType]) => pieceType === currentTab || currentTab === 'all')
            .map(([pieceType]) => (
              <TabPanel key={ pieceType } index={ pieceType }>
                {
                  characters
                    .filter((character) => (
                      character.pieceType.includes(currentTab as PieceType) ||
                        currentTab === 'all' &&
                        character.pieceType.includes(pieceType as PieceType)
                    ))
                    .map((character) => (
                      <CharacterCard
                        key={ character.name }
                        character={ character }
                        showExcess={ showExcess }
                      />
                    ))
                }
              </TabPanel>
            ))
        }
      </List>
    </div>
  );
};

export default CharactersList;
