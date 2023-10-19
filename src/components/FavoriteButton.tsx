import { useContext, useEffect, useState } from 'react';
import Context from '../context/context';
import { verificaFavorito } from '../services/verifyFavorite';
import { SFavoriteButton, SFavoriteImagem } from '../styles/styledcomponents';

type TProps = {
  id: number;
};

function FavoriteButton({ id }: TProps) {
  const { darkMode } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState<boolean>(
    JSON.parse(localStorage.getItem('favorites') as string || '[]').includes(id),
  );

  useEffect(() => {
    setIsFavorite(verificaFavorito(id));
  }, [id, isFavorite]);

  const handleFavorite = (idCurrent: number) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') as string || '[]');
    if (favorites.includes(idCurrent)) {
      const newFavorites = favorites.filter((idFav: number) => idFav !== idCurrent);
      setIsFavorite(false);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      localStorage.setItem('favorites', JSON.stringify([...favorites, idCurrent]));
      setIsFavorite(true);
    }
  };

  return (
    <SFavoriteButton
      type="button"
      onClick={ () => handleFavorite(id) }
    >
      <SFavoriteImagem
        src={ isFavorite
          ? `${darkMode ? 'dark' : 'light'}IconHeart.svg`
          : `${darkMode ? 'dark' : 'light'}IconHeartVoid.svg` }
        alt="icone de favorito"
      />
    </SFavoriteButton>
  );
}

export default FavoriteButton;
