import React, { FC, memo } from 'react';
import AEMLogo from '../images/skills/aem-logo.png';
import ReactLogo from '../images/skills/React-Symbol.png';
import TypeScriptLogo from '../images/skills/typescript.png';
import JavaScriptLogo from '../images/skills/javascript-logo.png';
import ReduxLogo from '../images/skills/Redux.png';
import CypressLogo from '../images/skills/cypress-logo.png';
import SQLLogo from '../images/skills/sql-database.png';
import DataScienceLogo from '../images/skills/data-science-logo.png';
import './Skills.scss';

const Skills: FC = () => {
  return (
    <div className='skills'>
      <h2>Skills</h2>
      <div className='skills__list'>
        <div className='skills__list-item'>
          <img src={AEMLogo} alt='Adobe Experience Manager logo' />
        </div>
        <div className='skills__list-item'>
          <img src={ReactLogo} alt='React logo' />
        </div>
        <div className='skills__list-item'>
          <img src={TypeScriptLogo} alt='Type Script logo' />
        </div>
        <div className='skills__list-item'>
          <img src={JavaScriptLogo} alt='Java Script logo' />
        </div>
        <div className='skills__list-item'>
          <img src={ReduxLogo} alt='Redux logo' />
        </div>
        <div className='skills__list-item'>
          <img src={CypressLogo} alt='Cypress logo' />
        </div>
        <div className='skills__list-item'>
          <img src={SQLLogo} alt='SQL logo' />
        </div>
        <div className='skills__list-item'>
          <img src={DataScienceLogo} alt='Data Science logo' />
        </div>
      </div>
    </div>
  );
};
export default memo(Skills);
