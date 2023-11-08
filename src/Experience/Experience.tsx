import React, { FC, memo } from 'react';
import Section from '../Section/Section';
import SingleExperience from './SingleExperience';

const Experience: FC = () => {
  return (
    <Section>
      <div id='experience' className='Experience'>
        <h2>Experience</h2>
        <SingleExperience name='Eyas Gaming' />
        <SingleExperience name='Anvilo' />
        <SingleExperience name='Mentor Mate' />
      </div>
    </Section>
  );
};

export default memo(Experience);
