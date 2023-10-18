import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useContext, useEffect } from 'react';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Context from './context/context';

function App() {
  const { darkMode, setDarkMode } = useContext(Context);

  useEffect(() => {
    const getDarkMode = JSON.parse(localStorage.getItem('darkMode') as string);
    setDarkMode(getDarkMode);
  }, [setDarkMode]);

  return (
    <ThemeProvider theme={ darkMode ? dark : light }>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
