import React, { FC, memo } from 'react';
import Section from '../Section/Section';
import Me from '../images/me-title.png';
import './Header.scss';

const Header: FC = () => {
  return (
    <Section>
      <header className='header' id='home'>
        <div>
          <img src={Me} alt='home background' />
        </div>
      </header>
    </Section>
  );
};

export default memo(Header);
