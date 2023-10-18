import { createContext } from 'react';
import { TNews } from '../types/typeApi';

type ContextType = {
  data: TNews[];
  setData: (data: TNews[]) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  dataApi: TNews[];
  setDataApi: (dataApi: TNews[]) => void;
};

const Context = createContext({} as ContextType);

export default Context;
