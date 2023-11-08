import React, { memo } from 'react';
import Section from '../Section/Section';
import './About.scss';

const About = () => {
  return (
    <Section>
      <div id='about' className='about'>
        <h2>Who I am.</h2>
        <p>
          From the perspectives of those who know me best, I embody persistence
          and passion, particularly when it comes to achieving my goals.
        </p>
        <p>
          My foray into Software Development began unexpectedly during my tenure
          at Ayali Group. Tasked with designing commercial brochures, I
          leveraged HTML, CSS, and Photoshop, ultimately distributing these
          digital materials through automated email systems.
        </p>
        <p>
          Progressing in my career, I embraced the role of Product Manager at
          Satecma, a burgeoning startup at the time. I proposed, spearheaded,
          and executed the development of a comprehensive, fully responsive
          website to meet their diverse needs. Despite the project&apos;s
          complexity and content-heavy nature, I delivered the finished website
          - available at www.Satecma.bg - within a three-month timeframe.
        </p>
        <p>
          Eager to deepen my expertise, I immersed myself in JavaScript,
          starting with the fundamentals and simple algorithms, before
          progressing to intricate web page creation using HTML & CSS, enriched
          with animations and transitions. However, my skills and passion
          culminated when I delved into React, which opened up a new world of
          possibilities through its dynamic functionalities.
        </p>
        <p>
          Today, I stand as an accomplished Front-End Developer, specializing in
          functional programming. My toolkit includes advanced proficiency in
          JavaScript, React, TypeScript, Redux, Redux-Toolkit, SASS, MUI, and
          comprehensive testing with Jest and Cypress E2E.
        </p>
        <p>
          Recently, my skill set expanded to include working with Adobe
          Experience Manager (AEM), allowing me to gain valuable insights into
          content management systems and digital marketing platforms. This
          expertise complements my front-end development skills.
        </p>
        <p>
          In addition to my focus on front-end technologies, I&apos;m ardently
          broadening my horizons in the realm of data science. Having completed
          formal training in Data Science with Python, I&apos;ve acquired
          hands-on experience in constructing machine learning models, which
          unlocked new perspectives on data-driven decision-making and
          artificial intelligence.
        </p>
      </div>
    </Section>
  );
};

export default memo(About);
