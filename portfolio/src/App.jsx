import './App.css';
import {Routes , Route} from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import SkillsPage from './Pages/SkillsPage/SkillsPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';

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
                <div>
                    <a href="https://docs.google.com/document/d/1IG3LCk6lxiGOLJM3HiRph8jTf7U4lWoczZCQMlfMTaE/edit?usp=sharing" ><img class = 'logo' src={"portfolio/src/Components/Images/download icon.png"} alt='download icon'/></a>
                    <a href="mailto:deandremi@yahoo.com" ><img class = 'logo' src={"portfolio/src/Components/Images/email icon.png"} alt='email icon'/></a>
                    <a href="https://github.com/drejmin"><img class = 'logo' src={"portfolio/src/Components/Images/GitHub-Logo.png"} alt='github icon'/></a>
                    <a href="www.linkedin.com/in/deandre-minor92"><img class = 'logo' src={"portfolio/src/Components/Images/linkedin logo.png"} alt='linkedin icon'/></a>
                </div>
                </section>
    </main>
  );
}

export default App;
