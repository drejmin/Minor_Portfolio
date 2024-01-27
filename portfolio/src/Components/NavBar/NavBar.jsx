import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavItem = ({ onNavigate, sectionId, title }) => (
  <li className='choice' onClick={() => onNavigate(sectionId)}>
    {title}
  </li>
);

const NavBar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const adjustBodyPadding = () => {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = `${navbarHeight}px`;
    };

    adjustBodyPadding(); // Adjust padding on mount

    const handleResize = () => adjustBodyPadding();
    window.addEventListener('resize', handleResize); // Adjust padding on resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  const navItems = [
    { sectionId: 'HomePage', title: 'Home' },
    { sectionId: 'ProjectsPage', title: 'Projects' },
    { sectionId: 'SkillsPage', title: 'Skills' },
    { sectionId: 'AboutPage', title: 'About' },
  ];

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
        {navItems.map((item, index) => (
          <NavItem key={index} onNavigate={onNavigate} sectionId={item.sectionId} title={item.title} />
          
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
