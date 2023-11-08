import React, { FC, memo } from 'react';
import './Section.scss';

interface Props {
  children?: React.ReactNode;
}

const Section: FC<Props> = ({ children }) => {
  return <section className='section'>{children}</section>;
};

export default memo(Section);
