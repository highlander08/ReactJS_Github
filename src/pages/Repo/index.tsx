import React from 'react';
import { Link } from 'react-router-dom';

import { Container,Breadcrumb,RepoIcon,Stars,ForkIcon,LinkButton,GithubIcon,StarIcon} from './styles';

const Repo: React.FC = () => {
  return (
   <Container>
     <Breadcrumb>
       <RepoIcon/>
       <Link className={'username'} to={'highlander08'}>
         highlander08
       </Link>
       <span>/</span>

       <Link className={'reponame'} to={'/highlander08/github1'}>
         github1
       </Link>
     </Breadcrumb>

     <p>Contains all of my Youtube lessons code.</p>

     <Stars>
       <li>
         <StarIcon/>
         <b>9</b>
         <span>stars</span>
       </li>
       <li>
         <ForkIcon/>
         <b>0</b>
         <span>forks</span>
       </li>
     </Stars>

     <LinkButton href={'https://github.com/highlander08/github1'}>
       <GithubIcon/>
       <span>View on Github</span>
     </LinkButton>
   </Container>
    );
}

export default Repo;