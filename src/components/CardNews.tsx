import { useEffect } from 'react';
import calcularDiasPassados from '../services/transformDateInDays';
import * as Styled from '../styles/cardNewsStyled';
import { STextDate } from '../styles/styledcomponents';
import { TNews } from '../types/typeApi';
import FavoriteButton from './FavoriteButton';

type TProps = {
  item: TNews;
};

function CardNews({ item }: TProps) {
  useEffect(() => {
  }, []);

  return (
    <Styled.SNewsCard>
      <div>
        <Styled.SNewsTitle>
          {item.titulo}
        </Styled.SNewsTitle>
        <Styled.SIntro>
          {item.introducao}
        </Styled.SIntro>
      </div>
      <Styled.SDivDate>
        <STextDate>
          {`${calcularDiasPassados(item.data_publicacao)} dias atrás` }
        </STextDate>
        <Styled.SLink href={ item.link }>
          Leia mais
        </Styled.SLink>
      </Styled.SDivDate>
      <Styled.SWrapperDiv>
        <FavoriteButton id={ item.id } />
      </Styled.SWrapperDiv>
    </Styled.SNewsCard>
  );
}

export default CardNews;
