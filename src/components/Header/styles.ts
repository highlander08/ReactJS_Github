import styled from 'styled-components';
import {FaGithub} from 'react-icons/fa';

export const Container = styled.div`
display: flex; /**deixar os elementos em linhas */
align-items: center; /**centralizar os elementos */
background: var(--header);
padding: 11px 16px; /**espaçamento em cima e em baixo de 11px */
`;

export const GithubLogo = styled(FaGithub)`
fill: var(--logo);
width:32px;
height:32px;
flex-shrink: 0; /**nao amassar a logo ao diminurir a tela */

cursor: pointer;
&:hover {
  opacity: 0.8;
}
`;

export const SearchForm = styled.form`
padding-left: 16px; /**chute de espaço para a direita */
width: 100%; /**ocupar 100% da div */

input {
  background: var(--search);
  outline: 0; /**tirar linhas brancas envolta do input */
  border-radius: 6px;
  padding: 7px 12px; /**deixar o input maior */
  width:100%;
  
  &:focus {
    width: 318px; /**input selecionado a largura do input aumenta */
  }
  transition: width .2s ease-out, color .2s ease-out /** tipo de animação e dentro do input */
}
`; 

