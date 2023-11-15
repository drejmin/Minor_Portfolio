import './App.css';
// import {Routes , Route} from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import SkillsPage from './Pages/SkillsPage/SkillsPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';
import downloadIcon from './Components/Images/downloadLogo.png';
import emailLogo from './Components/Images/emailLogo.png';
import GitHubLogo from './Components/Images/GitHubLogo.png';
import linkedinLogo from './Components/Images/linkedinLogo.png';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  return (
    <main className="App">
      <Navbar onNavigate={(sectionId) => scrollToSection(sectionId)} />
      <section className="App-header"          id="HomePage">{<HomePage/>}</section>
      <section className="full-height-section" id="ProjectsPage">{<ProjectsPage/>}</section>
      <section className="full-height-section" id="SkillsPage">{<SkillsPage/>}</section>
      <section className="full-height-section" id="AboutPage">{<AboutPage/>}</section>
      <section id="contact">
        <h2>Contact</h2>
        <div className ='logos'>
            <a href="https://docs.google.com/document/d/1IG3LCk6lxiGOLJM3HiRph8jTf7U4lWoczZCQMlfMTaE/edit?usp=sharing" target="_blank" rel='noreferrer'><img class = 'logo' src={downloadIcon} alt='download icon'/></a>
            <a href="mailto:deandremi@yahoo.com" target="_blank" rel='noreferrer'><img class = 'logo' src={emailLogo} alt='email icon'/></a>
            <a href="https://github.com/drejmin" target="_blank" rel='noreferrer'><img class = 'logo' src={GitHubLogo} alt='github icon'/></a>
            <a href={"http://www.linkedin.com/in/deandre-minor92"} target="_blank" rel='noreferrer'><img class = 'logo' src={linkedinLogo} alt='linkedin icon'/></a>
        </div>
      </section>
      <button id="contactButton" onClick={(sectionId) => scrollToSection('contact')}>Contact</button>
    </main>
  );
}
export default App;
