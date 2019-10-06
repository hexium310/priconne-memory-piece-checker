import React from 'react';
import ReactDOM from 'react-dom';

import { parseStorage, initStorage } from 'utils/storage/v2';
import { migrateStorage, isStorageV2, OldStorage } from 'utils/storage/v2/migration';
import { App } from 'components/App';

const storage = parseStorage<OldStorage>();
if (!isStorageV2(storage)) {
  migrateStorage();
}

initStorage();

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
