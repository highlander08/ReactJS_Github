import 'react-calendar-heatmap/dist/styles.css';

import React, {useState}from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
/**aplicar temas em sua aplicação */

import GlobalStyles  from './styles/GlobalStyles';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';
import Footer from './components/Footer';

import { ThemeName, themes } from './styles/themes';

function App() {
/**posição 0 e 1 do estado com paramentro de tipagem criado em styles com o nome themes */
const [themeName, setThemeName] = useState<ThemeName>('light');
/**tema atual é uma referencia do nome do tema agora detro do objeto de themes acessar a chave que corresponde ao light ou dark*/
const currentTheme = themes[themeName];
  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName}/>
        

        <Routes>
          <Route path="/" element={<Profile/>} />
          <Route path="/:username" element={<Profile/>} />
          <Route path="/:username/:reponame" element={<Repo/>} />
        </Routes>

        <Footer/>

        <GlobalStyles/>
      </BrowserRouter>
    </ThemeProvider>
    );
  }
  
  export default App;
  