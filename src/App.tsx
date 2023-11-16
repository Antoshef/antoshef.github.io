import './App.scss';
import './variables.scss';
import React, { useCallback, useMemo, useState } from 'react';
import About from './About/About';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Sidebar from './Sidebar/Sidebar';
import { joinStrings } from './utils/utils';
import MeImage from './images/yellow-shirt.jpg';
import ArrowRightIcon from './images/double-arrows-right.png';
import Header from './Header/Header';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const openSidebar = useCallback(() => setIsSidebarOpen(true), []);

  const isMobile = useMemo(() => {
    return window.innerWidth <= 599;
  }, []);

  const closeImage = useCallback(() => {
    setIsExpanded(false);
    openSidebar();
  }, [openSidebar]);

  return (
    <div className='app'>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setIsExpanded={setIsExpanded}
      />
      <main
        className={joinStrings([
          'app__body',
          isSidebarOpen && 'app__body--sidebar-open',
        ])}
      >
        <button
          onClick={openSidebar}
          className={joinStrings([
            'app__open-sidebar-btn',
            isSidebarOpen && 'app__open-sidebar-btn--hidden',
          ])}
        >
          <img src={ArrowRightIcon} alt='Open sidebar' />
        </button>
        <div
          className={
            isExpanded ? 'app__body-overlay' : 'app__body-overlay--hidden'
          }
          onClick={closeImage}
        ></div>
        <div
          className={isExpanded ? 'app__body-image' : 'app__body-image--hidden'}
          onClick={closeImage}
        >
          <img src={MeImage} alt='Anton Stanev' />
        </div>
        <Header />
        {!isMobile && <About />}
        <Skills />
        <Experience />
        {isMobile && <About />}
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
