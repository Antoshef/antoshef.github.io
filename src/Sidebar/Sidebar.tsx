import React, { FC, memo, useCallback } from 'react';
import Navigation from '../Navigation/Navigation';
import './Sidebar.scss';
import { joinStrings } from '../utils/utils';
import ArrowRightIcon from '../images/double arrows right.png';
import CloseIcon from '../images/close-icon-blue-red.png';
import MeImage from '../images/yellow-shirt.jpg';

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
  setIsExpanded: (isExpanded: boolean) => void;
};

/**
 *  Sidebar component
 */
const Sidebar: FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  setIsExpanded,
}) => {
  const openSidebar = useCallback(() => setIsSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  const openImage = useCallback(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 600) return;
    setIsExpanded(true);
    closeSidebar();
  }, []);

  return (
    <aside
      className={joinStrings(['wrapper', isSidebarOpen && 'wrapper--open'])}
    >
      {isSidebarOpen && (
        <div
          className={joinStrings(['sidebar', isSidebarOpen && 'sidebar--open'])}
        >
          <div className='sidebar__close-btn-wrapper'>
            <button className='sidebar__close-btn' onClick={closeSidebar}>
              <img src={CloseIcon} alt='Close sidebar' />
            </button>
          </div>
          <div className='sidebar__header'>
            <div className='sidebar__header-image' onClick={openImage}>
              <img src={MeImage} alt='Anton Stanev' />
            </div>
            <h2>Anton Stanev</h2>
            <p>Senior Frontend Developer</p>
          </div>
          <Navigation closeSidebar={closeSidebar} />
        </div>
      )}
      {!isSidebarOpen && (
        <div className='sidebar__open-btn' onClick={openSidebar}>
          <img src={ArrowRightIcon} alt='Open sidebar' />
        </div>
      )}
    </aside>
  );
};

export default memo(Sidebar);
