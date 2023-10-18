import { useContext, useEffect, useState } from 'react';
import fetchApi from '../services/fetchApi';
import * as Styled from '../styles/styledcomponents';
import Context from '../context/context';
import Destaques from '../components/Destaques';
import NavBar from '../components/NavBar';
import News from '../components/News';

function Home() {
  const { setData, setDataApi } = useContext(Context);
  const [list, setList] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApi = async () => {
      const response = await fetchApi('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
      setData(response);
      setDataApi(response);
      setLoading(false);
    };
    getApi();
  }, [setData, setDataApi]);

  if (loading) return <p>Loading...</p>;

  return (
    <Styled.SMain>
      <Destaques />
      <NavBar setToggleCard={ setList } toggleCard={ list } />
      <News list={ list } />
    </Styled.SMain>
  );
}

export default Home;
