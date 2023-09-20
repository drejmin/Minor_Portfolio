import './App.css';
import {Routes , Route} from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import SkillsPage from './Pages/SkillsPage/SkillsPage';
import AboutPage from './Pages/AboutPage/AboutPage';

function App() {
  return (
    <main className="App">
      <>
      <Navbar/>
      <Routes>
          <Route path="/AboutPage" element={<AboutPage/>} />
          <Route path="/SkillsPage" element={<SkillsPage/>} />
          <Route path="/ProjectsPage" element={<ProjectsPage/>} />
      </Routes>
      </>

      <header className="App-header">
          <h1>Hey, I'm DeAndre! Welcome to my Portfolio!</h1>
      </header>

      <body>
        <section id="contact">
          <h2>Contact</h2>
          <div>
            <a href="mailto:deandremi@yahoo.com" ><img src="portfolio/src/Components/Images/Email-Logo-No-Background.jpg" alt='email icon'/></a>
            <a href="https://github.com/drejmin"><img src="portfolio/src/Components/Images/GitHub-Logo.png" alt='github icon'/></a>
            <a href="www.linkedin.com/in/deandre-minor92"><img src="portfolio/src/Components/Images/linkedin-png-linkedin-icon-1600.png" alt='linkedin icon'/></a>
          </div>
        </section>
      </body>
      
    </main>
  );
}

export default App;
