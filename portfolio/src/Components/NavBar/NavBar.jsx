import React, { useState } from 'react';
import './NavBar.css';

const NavItem = ({ onNavigate, sectionId, title }) => (
  <li className='choice' onClick={()=> onNavigate(sectionId)}>
    <a className='choice'>{title}</a>
  </li>
);

export default function NavBar({onNavigate}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { sectionId: "HomePage", title: "Home" },
    { sectionId: "ProjectsPage", title: "Projects" },
    { sectionId: "SkillsPage", title: "Skills" },
    { sectionId: "AboutPage", title: "About" }
  ];

  return (
    <nav className="navbar">
      <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={isOpen ? 'nav-list active' : 'nav-list'}>
        {navItems.map((item, index) => (
          <NavItem key={index} onNavigate={onNavigate} sectionId={item.sectionId} title={item.title} />
        ))}
      </ul>
    </nav>
  );
}
