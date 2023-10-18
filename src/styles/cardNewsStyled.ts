import styled from 'styled-components';

export const SNewsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;
  width: 320px;
  height: 290px;
  border: 1px solid ${(props) => props.theme.colors.text};
  margin: 10px;
`;

export const SNewsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 1024px;
  margin-bottom: 70px;
`;

export const SButtonMore = styled.button`
  color: ${(props) => props.theme.colors.destaque};
  text-decoration: none;
  font-size: 1em;
  font-weight: 500;
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

export const SNewsTitle = styled.h3`
  font-size: 1em;
  font-weight: 700;
  margin-bottom: 2px;
  width: 100%;
  height: 3em;
  overflow: hidden;
`;

export const SIntro = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
  font-size: 0.7em;
  height: 7.6em;
  font-weight: 400;
  margin-bottom: 2px;
  width: 100%;
`;

export const SDivDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SLink = styled.a`
  color: ${(props) => props.theme.colors.destaque};
  text-decoration: none;
  font-size: 0.8em;
  font-weight: 500;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  margin: 10px 0;
  width: 100px;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.destaque};
  &:hover {
    background-color: ${(props) => props.theme.colors.destaque};
    color: ${(props) => props.theme.colors.background};
    transition: 0.3s;
  }
`;

export const SWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const SNewsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  width: 1024px;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.colors.text};
`;

export const SNewsListImage = styled.div`
  background-image: ${(props) => `url(${props.itemProp})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 200px;
  object-fit: cover;
`;

export const SNewsListInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 25px;
  width: 400px;
  height: 320px;
`;

export const SNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  width: 100vw;
  height: calc(100vh - 114px);
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;
