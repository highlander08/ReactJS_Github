import styled from 'styled-components';
import {RiBookMarkLine} from 'react-icons/ri';

export const RepoIcon = styled(RiBookMarkLine)`
 width: 16px;
 height: 16px;
 margin-right: 4px;
`;

export const Tab = styled.div`
background: var(--primary);

.content {
  display: flex;
  align-items: center;
  width: min-content; /**consumir o maior espaço possivel */

  padding: 14px 16px;

  border-bottom: 2px solid var(--orange);

  .label {
    font-size: 14px; 
    padding: 0 7px;
    font-weight: 600;
  }
  .number {
    font-size: 12px;
    background: var(--ticker);
    padding: 2px 6px;
    border-radius: 24px;
  }
}
.line {
  display: flex;
  width: 200vw;
  border-bottom: 1px solid var(--border);
  margin-left: -50vw; 
}
/**centralizar tab de repositorios no meio da tela */
&.mobile {
  margin-top: var(--verticalPadding);
  .content{
  margin: 0 auto; /**centralizar na horizontal */
 }

 /**se estiver no desktop aplica essas regras no mobile */
 @media (min-width: 768px){
   display: none;
 }
}
&.desktop {
  display: none;

  @media(min-width: 768px){
    /** o nome repositorios aparece so uma vez, tanto em omobile quanto em desktop */
     display: unset;
     .wrapper {
       display: flex;
       margin: 0 auto; /**centralizar em uma tela limita de 1280px */
       max-width: 1280px;
     }
    .offset {
      /**jogar 25% para a direita */
      width: 25%;
      margin-right: var(--horizontalPadding); /**chuta 16px */
    }

  }
}
`;

export const Container = styled.div`
  /**nao deixar a div grudada na tela */
  --horizontalPadding: 16px;
  --verticalPadding: 24px;
  padding:  var(--verticalPadding) var(--horizontalPadding) ;
  overflow: hidden; /**impedir do item sair pra fora da tela */
`;

export const Main = styled.div`
/**colocar os elementos em colunas */
display:flex;
flex-direction: column;

margin: 0 auto; /**deixar a div main centralizada */
max-width: 1280px; /**deixar a div main centralizada */
/**quando tiver no desktop os componentes estarao em linhas */
@media(min-width: 768px){
flex-direction: row;
}

`;
export const LeftSide = styled.div`
/**afastar a imagem do repositorio */
padding: 0 var(--horizontalPadding);
/**no desktop o compnente vai ocupar 25% da tela */
@media(min-width: 768px){
width: 25%
}

`;
export const RightSide = styled.div`
/**afastar a imagem do repositorio */
padding: 0 var(--horizontalPadding);
/**no desktop o compnente vai ocupar 75% da tela */
@media(min-width: 768px){
width: 75%
}
`;
export const  Repos = styled.div`
  margin-top: var(--verticalPadding);

  > h2{
    font-size: 16px;
    font-weight: normal;
  }
  > div {
    margin-top: 8px;

    display: grid; /**layout baseado em grade, com linhas e colunas*/
    grid-gap: 16px; /**espaço entre as grades da coluna */

    grid-auto-columns: 1fr; /**apenas uma coluna */

    /**quando tiver no computador exexute essas regras */
    @media (min-width: 768px){
      grid-template-columns: 1fr 1fr; /**dividir grades em duas colunas */
    grid-auto-rows: minmax(min-content, max-content); /**igualar o lados mesmo se os tamanhos das descriçoes forem diferentes */

    }
  }
`;

export const CalendarHeading = styled.span`
/**desse jeito o elemnto pode receber margen */
font-size: 16px;
margin: 36px 0 9px;
display: inline-flex
`;





