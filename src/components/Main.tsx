import { useCallback, useState, FC } from 'react';
import cntl from 'cntl';

import ClearStorage from 'components/ClearStorage';
import Content from 'components/Content';

const Main: FC = () => {
  const [showExcess, setShowExcess] = useState(true);

  const handleChangeShowExcess = useCallback(() => {
    setShowExcess((value) => !value);
  }, []);

  return (
    <main className="sm:px-6">
      <div className={ cntl`mt-4` }>
        <div className={ cntl`flex justify-between` }>
          <label className={ cntl`relative pl-4 h-[fit-content]` }>
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
        <Content showExcess={ showExcess } />
      </div>
    </main>
  );
};

export default Main;
