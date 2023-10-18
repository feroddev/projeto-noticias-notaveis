import { useContext, useEffect, useState } from 'react';
import { TNews } from '../types/typeApi';
import * as Styled from '../styles/styledcomponents';
import calcularDiasPassados from '../services/transformDateInDays';
import FavoriteButton from './FavoriteButton';
import Context from '../context/context';

function Destaques() {
  const { dataApi } = useContext(Context);
  const [destaque, setDestaque] = useState<TNews[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDestaque(dataApi.filter((item: TNews) => item.destaque).slice(10, 21));
    setLoading(false);
  }, [dataApi]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 10) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  if (loading) return <p>Loading...</p>;

  return (
    <Styled.SDestaque>
      <Styled.SImageDiv>
        <Styled.SImageDestaque
          itemProp={ destaque ? destaque[index].thumb : 'none' }
        />
      </Styled.SImageDiv>
      <Styled.STextDestaque>
        <Styled.STextSubTitle>
          Noticias em destaque
          <FavoriteButton id={ destaque[index].id } />
        </Styled.STextSubTitle>
        <Styled.STextTitle>{ destaque[index].titulo }</Styled.STextTitle>
        <Styled.STextIntro>{ destaque[index].introducao }</Styled.STextIntro>
        <Styled.STextDate>
          {`${calcularDiasPassados(destaque[index].data_publicacao)} dias atrás` }
        </Styled.STextDate>
        <Styled.SButtonLink href={ destaque[index].link }>
          Leia mais
        </Styled.SButtonLink>
      </Styled.STextDestaque>
    </Styled.SDestaque>
  );
}

export default Destaques;
