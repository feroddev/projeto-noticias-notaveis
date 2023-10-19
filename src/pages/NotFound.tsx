import { SLink, SNotFound } from '../styles/cardNewsStyled';

function NotFound() {
  return (
    <SNotFound>
      <h1 style={ { fontSize: '4em' } }>Página não encontrada</h1>
      <SLink href="/">
        Voltar
      </SLink>
    </SNotFound>
  );
}

export default NotFound;
