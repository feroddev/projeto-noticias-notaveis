import { useContext, useEffect, useState } from 'react';
import Context from '../context/context';
import { TNews } from '../types/typeApi';
import CardNews from './CardNews';
import * as Styled from '../styles/styledcomponents';
import * as StyledNews from '../styles/cardNewsStyled';
import ListNews from './ListNews';

function News({ list }: { list: boolean }) {
  const { data } = useContext(Context);
  const [tamanhoMaximo, setTamanhoMaximo] = useState<number>(9);

  useEffect(() => {
  }, [tamanhoMaximo]);

  const handleClick = () => {
    setTamanhoMaximo(tamanhoMaximo + 9);
  };

  return (
    <StyledNews.SNewsDiv>
      { data.length === 0
      && <Styled.STextTitle>Não encontrado nenhuma noticia</Styled.STextTitle>}
      {!list && data.slice(0, tamanhoMaximo).map((item: TNews) => (
        <CardNews item={ item } key={ item.id } />
      ))}
      {list && data.slice(0, tamanhoMaximo).map((item: TNews) => (
        <ListNews item={ item } key={ item.id } />
      ))}
      <Styled.SWrapper>
        {tamanhoMaximo <= data.length && data.length !== 0 && (
          <StyledNews.SButtonMore onClick={ handleClick }>
            Mais noticias...
          </StyledNews.SButtonMore>
        )}
      </Styled.SWrapper>
    </StyledNews.SNewsDiv>
  );
}

export default News;
