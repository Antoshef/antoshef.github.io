import React, { FC, memo, useCallback } from 'react';
import './Navigation.scss';

type Props = {
  closeSidebar: () => void;
};

const Navigation: FC<Props> = ({ closeSidebar }) => {
  const closeSidebarAndScroll = useCallback(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 600) return;
    closeSidebar();
  }, []);

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li onClick={closeSidebarAndScroll} className='navigation__item'>
          <a href='#home' className='navigation__link'>
            Home
          </a>
        </li>
        <li onClick={closeSidebarAndScroll} className='navigation__item'>
          <a href='#about' className='navigation__link'>
            About
          </a>
        </li>
        <li onClick={closeSidebarAndScroll} className='navigation__item'>
          <a href='#projects' className='navigation__link'>
            Projects
          </a>
        </li>
        <li onClick={closeSidebarAndScroll} className='navigation__item'>
          <a href='#experience' className='navigation__link'>
            Experience
          </a>
        </li>
        <li onClick={closeSidebarAndScroll} className='navigation__item'>
          <a href='#skills' className='navigation__link'>
            Skills
          </a>
        </li>
        <li onClick={closeSidebarAndScroll} className='navigation__item'>
          <a href='#contact' className='navigation__link'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Navigation);
