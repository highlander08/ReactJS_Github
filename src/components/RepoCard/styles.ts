import styled, {css} from 'styled-components';
import {RiBookMarkLine, RiStarLine} from 'react-icons/ri';
import {AiOutlineFork} from 'react-icons/ai';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;/**espaçamento entre os intens o repositorios */
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;
`;


export const Topside = styled.div`
> header {
  display: flex;
  align-items: center;

  > a{
    margin-left: 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--link);

    text-decoration: none;

    &:focus,
    &:hover{
      text-decoration: underline;
    }
  }
}
> p{
    margin: 8px 0 16px;
    font-size: 12px;
    color: var(--gray);
    letter-spacing: 0.1px; /**espaçamento das letras */
  }

`;

export const Botside = styled.div`
 > ul {
   display: flex;
   align-items: center;

   > li {
     display: flex;
     align-items: center;
     margin-right: 16px;

     > span {
       margin-left: 5px;
       font-size: 12px;
       color: var(--gray);
     }
   }
 }

 .language {
   width: 12px;
   height: 12px;
   border-radius: 50%;
   flex-shrink: 0;

   &.other {
     background: var(--other-language);
   }
   
   &.javascript {
     background: var(--javascript);
   }
   
   &.typescript {
     background: var(--typescript);
   }
 }

`;
/**padronizar o estilo dos icones da pagina */
const iconCSS = css`

`;

export const RepoIcon = styled(RiBookMarkLine)`${iconCSS}`;

export const StarIcon = styled(RiStarLine)`${iconCSS}`;

export const ForkIcon = styled(AiOutlineFork)`${iconCSS}`;
