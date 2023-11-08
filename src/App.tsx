import './App.scss';
import './variables.scss';
import React, { useCallback, useState } from 'react';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Sidebar from './Sidebar/Sidebar';
import { joinStrings } from './utils/utils';
import MeImage from './images/yellow-shirt.jpg';
import ArrowRightIcon from './images/double arrows right.png';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const openSidebar = useCallback(() => setIsSidebarOpen(true), []);

  const closeImage = useCallback(() => {
    setIsExpanded(false);
    openSidebar();
  }, []);

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
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
