import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
/**retirando o padrao da pagina */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  min-height: 100%;
  background: var(--primary);
}
/**aplicar a todos os elemntos incluindo o button input */
*, button, input {
border: 0;
background: none;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
color: var(--black);
transition: color .2s ease-out
}
ul {
  list-style: none;
}
/**pegar todas as cores do tema e ejeta no globalstyles */
:root{
  ${(props) => {
    const theme = props.theme;

    let append = '';
    /**loop entre todos os temas e para cada um dos temas eu recebo o nome e valor da cor*/
    Object.entries(theme).forEach(([prop, value])=>{
      append += `--${prop}: ${value};`;
    })
    
    return append;
  }}
}
`;

