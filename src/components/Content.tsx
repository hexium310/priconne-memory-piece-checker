import { useReducer, FC, Dispatch, createContext, Reducer } from 'react';
import CharactersList from 'components/CharactersList';
import Tab from 'components/Tab';

type RowProps = {
  showExcess: boolean;
};

type State = {
  currentTab: string;
};

type Action = {
  type: 'CHANGE_TAB';
  payload: string;
};

type Context = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const TabContext = createContext({} as Context);

const initialState: State = {
  currentTab: 'hard',
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch(action.type) {
    case 'CHANGE_TAB':
      return {
        ...state,
        currentTab: action.payload,
      };
    default:
      return state;
  }
};

const Row: FC<RowProps> = ({ showExcess }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TabContext.Provider value={ { state, dispatch } }>
      <Tab />
      <CharactersList showExcess={ showExcess } />
    </TabContext.Provider>
  );
};

export default Row;
