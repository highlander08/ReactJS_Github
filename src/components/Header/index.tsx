import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

import { Container,GithubLogo,SearchForm } from './styles';

import { ThemeName } from '../../styles/themes';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({themeName, setThemeName}) => {
  const [search, setSearch] = useState('');
  /**navegar o usuario ate a pagina correta */
  const navigate = useNavigate();

/**função que quando clica o enter leva o usuario para o github desejado/digitado */
function handleSubmit(event: React.FormEvent){
/**evitar que recargue */
event.preventDefault();
/**chama a função e passa a rota que eu quero jogar o usuario  */
/**toLowercase deixas as letras minuscula e o trim tira os espaços */
navigate('/' + search.toLowerCase().trim());
}

function toggleTheme(){
  setThemeName(themeName === 'light' ? 'dark' : 'light');
}


  return (
    <Container>
      <GithubLogo onClick={toggleTheme}/>
      <SearchForm onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Entre usando o nome do respositório" 
        value={search}
        /**pego o que a pessoa digitou e preencho o estado com o que a pessoas digitou no input */
        onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
    );
};

export default Header;