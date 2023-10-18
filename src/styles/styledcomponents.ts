import styled from 'styled-components';

export const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.headerBg};
  width: 1024px;
`;

export const SText = styled.h1`
  color: ${(props) => props.theme.colors.headerText};
  font-family: 'Roboto Slab', sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
`;

export const SLogo = styled.img`
  width: 180px;
  padding: 20px;
  margin-right: 30px;
`;

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1024px;
  margin: auto;
`;

export const SButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: transparent;
  margin-right: 50px;
`;

export const SMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  width: 1024px;
  margin: 0 auto 50px auto;
`;

export const SFooter = styled.footer`
  display: flex;
  background-color: ${(props) => props.theme.colors.destaque};
  color: #fff;
  height: 50px;
  position: fixed;
  align-items: center;
  bottom: 0;
  width: 100vw;
  justify-content: center;
`;

export const SDestaque = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 1024px;
  margin: auto;
  height: 600px;
`;

export const SImageDiv = styled.div`
  width: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const SImageDestaque = styled.div`
  background-image: ${(props) => `url(${props.itemProp})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 550px;
  height: 400px;
  object-fit: cover;
  transition: 0.3s;
`;

export const STextTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  font-size: 1.3em;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const STextDate = styled.p`
  font-size: 0.8em;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.subText};
`;

export const STextDestaque = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 25px;
`;

export const STextIntro = styled.p`
  font-weight: 400;
  font-size: 0.9em;
`;

export const STextSubTitle = styled.h2`
  color: ${(props) => props.theme.colors.destaque};
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 2px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const SButtonLink = styled.a`
  color: ${(props) => props.theme.colors.destaque};
  text-decoration: none;
  font-size: 1em;
  font-weight: 700;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin: 15px 0;
  width: 200px;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.destaque};
  &:hover {
    background-color: ${(props) => props.theme.colors.destaque};
    color: ${(props) => props.theme.colors.background};
    transition: 0.3s;
  }
`;

export const SDivRoot = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  overflow-x: hidden;
`;

export const SWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 0 10px;
  border: 1px solid ${(props) => props.theme.colors.text};
  width: 100%;
  margin-bottom: 50px;
`;

export const SListNews = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  list-style: none;
`;

export const SItemNews = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;  
  border-radius: 5px;
  cursor: pointer;
`;

export const SFavoriteButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
`;

export const SFavoriteImagem = styled.img`
  width: 25px;
  height: 25px;
`;

export const SInput = styled.input`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  margin-right: 10px;
`;

export const SButtonSearch = styled.button`
  height: 30px;
  padding: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.destaque};
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.destaque};
  &:hover {
    background-color: ${(props) => props.theme.colors.destaque};
    color: ${(props) => props.theme.colors.background};
  }
`;

export const SWrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 114px;
  background-color: ${(props) => props.theme.colors.headerBg};
`;

export const SButtonToggle = styled.button`
  border: none;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  height: 40px;
  width: 40px;
  text-align: center;
`;
