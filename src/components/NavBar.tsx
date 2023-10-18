import { useContext, useState } from 'react';
import * as Styled from '../styles/styledcomponents';
import Context from '../context/context';

const maisRecentes = 'mais recentes';
const release = 'Release';
const noticia = 'Notícia';
const favoritas = 'favoritas';

type TActive = 'mais recentes' | 'Release' | 'Notícia' | 'favoritas';
type TProps = {
  toggleCard: boolean;
  setToggleCard: (bool: boolean) => void
};

function NavBar({ toggleCard, setToggleCard }: TProps) {
  const { setData, dataApi, darkMode } = useContext(Context);
  const [active, setActive] = useState<TActive>(maisRecentes);
  const [formInput, setFormInput] = useState<string>('');

  const handleClick = async (type: TActive) => {
    if (type === maisRecentes) {
      setData(dataApi.slice(0, 9));
      setActive(maisRecentes);
    } else if (type === favoritas) {
      const favorites = JSON.parse(localStorage.getItem('favorites') as string || '[]');
      setData(dataApi.filter((item) => favorites.includes(item.id)));
      setActive(favoritas);
    } else {
      setData(dataApi.filter((item) => item.tipo === type));
      setActive(type);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = dataApi.filter((item) => item
      .titulo.toLowerCase().includes(formInput.toLowerCase()));
    setData(search);
  };

  return (
    <Styled.SWrapperRow>
      <Styled.SListNews>
        <div
          style={ { display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between' } }
        >
          <Styled.SItemNews
            className={ (active === maisRecentes ? 'activeBar' : '') }
            onClick={ () => handleClick(maisRecentes) }
          >
            Mais Recentes
          </Styled.SItemNews>
          <Styled.SItemNews
            className={ (active === release ? 'activeBar' : '') }
            onClick={ () => handleClick(release) }
          >
            Release
          </Styled.SItemNews>
          <Styled.SItemNews
            className={ (active === noticia ? 'activeBar' : '') }
            onClick={ () => handleClick(noticia) }
          >
            Notícia
          </Styled.SItemNews>
          <Styled.SItemNews
            className={ (active === favoritas ? 'activeBar' : '') }
            onClick={ () => handleClick(favoritas) }
          >
            Favoritas
          </Styled.SItemNews>
          <form onSubmit={ handleSubmit }>
            <Styled.SInput
              type="text"
              placeholder="Pesquise por uma notícia"
              onChange={ (e) => setFormInput(e.target.value) }
            />
            <Styled.SButtonSearch
              type="submit"
              onClick={ () => handleClick(formInput as TActive) }
            >
              Buscar
            </Styled.SButtonSearch>
          </form>
        </div>
        <Styled.SButtonToggle
          onClick={ () => setToggleCard(!toggleCard) }
        >
          <img
            src={ `${darkMode ? 'dark' : 'light'}${toggleCard ? 'List' : 'Table'}.svg` }
            alt="icon toggle"
            style={ { width: '30px', marginTop: '5px' } }
          />
        </Styled.SButtonToggle>
      </Styled.SListNews>
    </Styled.SWrapperRow>
  );
}

export default NavBar;
