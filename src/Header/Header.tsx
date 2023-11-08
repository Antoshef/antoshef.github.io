import React, { FC, memo } from 'react';
import Section from '../Section/Section';

const Header: FC = () => {
  return (
    <Section>
      <header id='home'>
        <h1>Header</h1>
      </header>
    </Section>
  );
};

export default memo(Header);
