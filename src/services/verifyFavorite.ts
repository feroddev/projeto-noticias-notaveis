export const verificaFavorito = (id: number) => {
  const favoritos = JSON.parse(localStorage.getItem('favorites') || '[]');
  const favorito = favoritos.find((idLocalStorage: number) => idLocalStorage === id);
  return favorito;
};
