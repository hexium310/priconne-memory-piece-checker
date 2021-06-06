import ReactDOM from 'react-dom';
import './index.css';

import { parseStorage, initStorage, STORAGE_VERSION } from 'utils/storage/v2';
import { migrateStorage, OldStorage } from 'utils/storage/v2/migration';
import { App } from 'components/App';

const storage = parseStorage<OldStorage>();
if (storage.version !== STORAGE_VERSION) {
  migrateStorage();
}

initStorage();

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
