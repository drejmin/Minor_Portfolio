import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar(){
  return (
    <nav class= "navbar">
      <ul>
        <li class = 'choice'><Link class = 'choice' to="/HomePage">Home</Link></li>
        <li class = 'choice'><Link class = 'choice' to="/ProjectsPage">Projects</Link></li>
        <li class = 'choice'><Link class = 'choice' to="/SkillsPage">Skills</Link></li>
        <li class = 'choice'><Link class = 'choice' to="/AboutPage">About</Link></li>
      </ul>
    </nav>
  );
}
