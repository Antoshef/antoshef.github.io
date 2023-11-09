import React, { FC, memo } from 'react';
import Section from '../Section/Section';
import HomeBG from '../images/home-background.jpg';
import './Header.scss';

const Header: FC = () => {
  return (
    <Section>
      <header className='header' id='home'>
        <div>
          <img src={HomeBG} alt='home background' />
        </div>
      </header>
    </Section>
  );
};

export default memo(Header);
