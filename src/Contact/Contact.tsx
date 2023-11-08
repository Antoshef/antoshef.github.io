import React, { FC, memo } from 'react';
import Section from '../Section/Section';
import LinkedInLogo from '../images/logos/LinkedIn-logo.png';
import './Contact.scss';

const Contact: FC = () => {
  return (
    <Section>
      <div id='contact' className='contact'>
        <h2>Contact</h2>
        <div className='contact__list'>
          <p>Don&apos;t hesitate to reach me out on</p>
          <div className='contact__image'>
            <a href='https://www.linkedin.com/in/anton-stanev-a5438718b/' target='blank'>
              <img src={LinkedInLogo} alt='LinkedIn logo' />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default memo(Contact);
