import React, { useState } from 'react';
import './NavBar.css';

const NavItem = ({ href, title }) => (
  <li className='choice'>
    <a className='choice' href={href}>{title}</a>
  </li>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "#home", title: "Home" },
    { href: "#ProjectsPage", title: "Projects" },
    { href: "#SkillsPage", title: "Skills" },
    { href: "#AboutPage", title: "About" }
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
          <NavItem key={index} href={item.href} title={item.title} />
        ))}
      </ul>
    </nav>
  );
}
