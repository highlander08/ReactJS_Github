import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

import { Container,Main,LeftSide,RightSide, Repos,CalendarHeading,RepoIcon,Tab } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import { APIUser, APIRepo } from '../../@types';

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
/**hook para pegar o username || pega o que for digitado na barra de endereço e armazena na variavel username*/
  const {username = 'highlander08'} = useParams();
  /**o data recebe um usuario assim quando carregar a pagina profile */
  const [data,setData] = useState<Data>();

  /**dispara a função interna quando o componente aparece na tela */
  useEffect(()=>{
    /**quando o profile aparecer na tela, faça uma busca do usuario e dos seus repositorios atraves da api do github */
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
      /**e depois que todas as promisses forem resolvidas vou pegar as respostas e executar uma função com base nas respostas */
    ]).then(async (responses) => {
      /**pegar as respotas que estao dentro do responses em armazenar nas variaveis dentro do array criado */
      const [userResponse, reposResponse] = responses;
      // console.log([await responses[0].json(), responses[1].json()]);

      /**se userReponse tiver dado error retorne, mas antes atualize o estado com o erro */
      if(userResponse.status === 404){
        setData({error: 'User not found.'})
        return;
      }
      /**espere as resposta em json dentro da variavel user */
      const user = await userResponse.json();
      const repos = await reposResponse.json();

      /**selecionar metades dos repostiros */
      const shuffledRepos = repos.sort(()=> 0.50 - Math.random());
      /**selecionar da metade selecionada a cima apenas 6 repositorios */
      const slicedRepos = shuffledRepos.slice(0,6);
      /**atualizar o data com os dados obtidos */
      setData({
        user,
        repos: slicedRepos,
      })
    });
  },[username]);

  if(data?.error){
  return <h1>{data.error}</h1>
  }
  if(!data?.user || !data?.repos){
    return <h1>Loading...</h1>
  }
  
const TabContent = () => (
  <div className="content">
    <RepoIcon/>
    <span className="label">Repositotios</span>
    <span className="number">{data.user?.public_repos}</span>
  </div>
);

  return(
    <Container>

    <Tab className="desktop">
      <div className="wrapper">
        <span className="offset"/>
         <TabContent/>
      </div>     
     <span className="line"/>
   </Tab>

      <Main>
        <LeftSide>
         
        <ProfileData
        username={data.user.login}
        name={data.user.name}
        avatarUrl={data.user.avatar_url}
        followers={data.user.followers}
        following={data.user.following}
        company={data.user.company}
        location={data.user.location}
        email={data.user.email}
        blog={data.user.blog}
        />
        </LeftSide>
        
        <RightSide>

          <Tab className="mobile">
            <TabContent/>
            <span className="line"/>
          </Tab>

          <Repos>
            <h2>Repositórios Aleatórios</h2>

            <div>
              {data.repos.map((item) => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                />
              ))}
            </div>
          </Repos>
           
          <CalendarHeading>
            Calendario aleatorio, nao representa os dados atuais
          </CalendarHeading>

          <RandomCalendar/>
        </RightSide>
      </Main>
    </Container>
    );
}

export default Profile;