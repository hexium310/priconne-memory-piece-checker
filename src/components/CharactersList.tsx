import React from 'react';
import cntl from 'cntl';

import { characters, pieceTypes, PieceType } from 'data';
import CharacterCard from 'components/CharacterCard';
import TabPanel from 'components/TabPanel';
import Row from 'components/Row';
import { TabContext } from 'components/Content';

type CharactersListProps = {
  showExcess: boolean;
};

const CharactersList: React.FC<CharactersListProps> = ({ showExcess }) => {
  const { state: { currentTab } } = React.useContext(TabContext);

  return (
    <div className={ cntl`grid pt-4 grid-rows-1` }>
      <Row className={ cntl`sticky top-12 z-50` }>
        <p>名前</p>
        <p>キャラクターの状態</p>
        <div className={ cntl`divide-black divide-dashed divide-y` }>
          <p>所持数</p><p>必要数</p>
        </div>
        <p>不足数</p>
      </Row>
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
    </div>
  );
};

export default CharactersList;
