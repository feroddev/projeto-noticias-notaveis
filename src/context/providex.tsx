import { useState } from 'react';
import Context from './context';
import { TNews } from '../types/typeApi';

type UserProviderProps = {
  children: React.ReactNode;
};

function ContextProvider({ children }: UserProviderProps) {
  const [data, setData] = useState<TNews[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [dataApi, setDataApi] = useState<TNews[]>([]);

  return (
    <Context.Provider
      value={ {
        data,
        setData,
        darkMode,
        setDarkMode,
        setDataApi,
        dataApi,
      } }
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
