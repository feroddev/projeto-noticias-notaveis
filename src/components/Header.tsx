import { useContext } from 'react';
import { SButton, SHeader, SLogo, SText } from '../styles/styledcomponents';
import Context from '../context/context';

function Header() {
  const { darkMode, setDarkMode } = useContext(Context);
  const handleClick = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  return (
    <SHeader>
      <SText>
        <SLogo src="logo.png" alt="logo" />
        Notícias Notáveis
      </SText>
      <SButton
        onClick={ handleClick }
      >
        <img
          src={ `${darkMode ? 'light' : 'dark'}Theme.svg` }
          alt="icon theme"
          style={ { width: '30px' } }
        />
      </SButton>
    </SHeader>
  );
}

export default Header;
