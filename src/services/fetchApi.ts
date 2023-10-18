import { TItem, TNews } from '../types/typeApi';

const fetchApi = async (url: string) => {
  const response = await fetch(url);
  const preData = await response.json();
  const data: TNews[] = preData.items.map((item: TItem) => ({
    id: item.id,
    tipo: item.tipo,
    titulo: item.titulo,
    introducao: item.introducao,
    data_publicacao: item.data_publicacao,
    editorias: item.editorias,
    imagem: `https://agenciadenoticias.ibge.gov.br/${JSON.parse(item.imagens).image_fulltext}`,
    thumb: `https://agenciadenoticias.ibge.gov.br/${JSON.parse(item.imagens).image_intro}`,
    destaque: item.destaque,
    link: item.link,
  }));
  return data;
};

export default fetchApi;
