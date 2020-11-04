import React from 'react';
import cntl from 'cntl';

import CharactersList from 'components/CharactersList';
import ClearStorage from 'components/ClearStorage';
import Tab from 'components/Tab';

const Main: React.FC = () => {
  const [showExcess, setShowExcess] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState('hard');

  const handleChangeShowExcess = React.useCallback(() => {
    setShowExcess((value) => !value);
  }, []);

  return (
    <main className="sm:px-6">
      <div className={ cntl`mt-4` }>
        <div className={ cntl`flex justify-between` }>
          <label className={ cntl`relative pl-4 h-fit` }>
            <input
              type="checkbox"
              className={ cntl`absolute inset-y-0 left-0 m-auto` }
              checked={ showExcess }
              onChange={ handleChangeShowExcess }
            />
            必要数持っているキャラクターも表示
          </label>
          <ClearStorage />
        </div>
        <Tab currentTab={ currentTab } setCurrentTab={ setCurrentTab } />
        <CharactersList currentTab={ currentTab } showExcess={ showExcess } />
      </div>
    </main>
  );
};

export default Main;
