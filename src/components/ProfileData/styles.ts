import styled, {css} from 'styled-components';
import {
RiGroupLine, RiBuilding4Line, RiMapPin2Line, RiMailLine, RiLinksLine
}  from 'react-icons/ri';

export const Container = styled.div``;

export const Flex = styled.div`
display: flex;
align-items: center;

> div {
  margin-left: 24px;
 > h1 {
   font-size:26px;
   line-height:1.25;
   color: var(--gray-dark);
   font-weight: 600;
 }
 > h2 {
   font-size: 20px;
   color: var(--username);
   font-weight: 300px;
 }
}

/**regra de responsividade */
@media(min-width: 768px){
  flex-direction: column; /**deixae os elementos em coluna */
  align-items: flex-start; /**deixar o texto highlander encostado na tela a esqueda */
 > div {
   margin-left: 0;
   margin-top:16px;
 }
}
`;
export const Avatar = styled.img`
width: 16%;
border-radius: 50%;

/**se o tamanho da tela for no minimo 768px deie a largura do avat em 100% */
@media (min-width: 768px){
  width: 100%;
  margin-top: -34px; /**subir mais o avatar */
}
`;
export const Row = styled.ul`
display: flex;
align-items: center;
/**responsividade = quebrar a linha quando a tela diminuir */
flex-wrap: wrap;
margin: 20px 0;

> li{
  display: flex;
  align-items: center;

> span {
  font-size: 14px;
  color: var(--gray);
}
> * {
  margin-right: 5px;
}
> b {
  margin-bottom: -2.5px;
 }
}
`;

export const Column = styled.ul`
li {
  display: flex;
  align-items: center;
  font-size: 14px;
}
li + li {
  margin-top: center;
}
span {
  margin-left: 5px;
/**responsividade nao deixar o texto quebrar de linha */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`;

/**css customizado para passar para todos os icones */
const iconCss = css`
width: 16px;
height: 16px;
fill: var(--icon);
flex-shrink: 0;
`;


export const PeopleIcon = styled(RiGroupLine)`
${iconCss}
`;

export const CompanyIcon = styled(RiBuilding4Line)`
${iconCss}

`;
export const LocationIcon = styled(RiMapPin2Line)`
${iconCss}

`;

export const EmailIcon = styled(RiMailLine)`
${iconCss}

`;
export const BlogIcon = styled(RiLinksLine)`
${iconCss}

`;
