import React, { FC, memo } from 'react';
import Section from '../Section/Section';
import SingleProject from './SingleProject';
import MerkurLogo from '../images/logos/merkur.png';
import TalkrouteLogo from '../images/logos/talk.png';
import KomtalkLogo from '../images/logos/komtalk.png';
import LanceLogo from '../images/logos/lance logo.png';
import './Projects.scss';

const Projects: FC = () => {
  return (
    <Section>
      <div id='projects' className='projects'>
        <h2>Projects</h2>
        <div className='projects__body'>
          <SingleProject
            title='Merkur Slots'
            description='A web application that allows users to play slot games.'
            image={MerkurLogo}
            link='https://www.merkurslots.com'
          />
          <SingleProject
            title='Talkroute'
            description='A web application that allows users to play slot games.'
            image={TalkrouteLogo}
            link='https://talkroute.com/'
          />
          <SingleProject
            title='Komtalk'
            description='A web application that allows users to play slot games.'
            image={KomtalkLogo}
            link='https://komtalk.com/'
          />
          <SingleProject
            title='Lance'
            description='A web application that allows users to play slot games.'
            image={LanceLogo}
            link='https://www.lance.com.br/'
          />
        </div>
      </div>
    </Section>
  );
};

export default memo(Projects);
