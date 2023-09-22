import './App.css';
import {Routes , Route} from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import SkillsPage from './Pages/SkillsPage/SkillsPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';
import downloadIcon from './Components/Images/downloadLogo.png';
import emailLogo from './Components/Images/emailLogo.png';
import GitHubLogo from './Components/Images/GitHubLogo.png';
import linkedinLogo from './Components/Images/linkedinLogo.png';

function App() {
  return (
    <main className="App">
      <>
      <Navbar/>
      <Routes>
          <Route path="/HomePage" element={<HomePage/>} />
          <Route path="/AboutPage" element={<AboutPage/>} />
          <Route path="/SkillsPage" element={<SkillsPage/>} />
          <Route path="/ProjectsPage" element={<ProjectsPage/>} />
      </Routes>
      </>
      <section id="contact">
        <h2>Contact</h2>
        <div class ='logos'>
            <a href="https://docs.google.com/document/d/1IG3LCk6lxiGOLJM3HiRph8jTf7U4lWoczZCQMlfMTaE/edit?usp=sharing" ><img class = 'logo' src={downloadIcon} alt='download icon'/></a>
            <a href="mailto:deandremi@yahoo.com" ><img class = 'logo' src={emailLogo} alt='email icon'/></a>
            <a href="https://github.com/drejmin"><img class = 'logo' src={GitHubLogo} alt='github icon'/></a>
            <a href="www.linkedin.com/in/deandre-minor92"><img class = 'logo' src={linkedinLogo} alt='linkedin icon'/></a>
        </div>
      </section>
    </main>
  );
}

export default App;
