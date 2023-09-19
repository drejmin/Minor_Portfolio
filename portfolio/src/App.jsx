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

      <header >

      <body>
        
        
        
        
        <section id="contact">
          <h2>Contact</h2>
          <p>You can reach me at <a href="mailto:deandremi@yahoo.com">deandremi@yahoo.com</a></p>
          <p>Check out my Git at <a href="https://github.com/drejmin">GitHub</a></p>
          <p>Search my LinkedIn at <a href="www.linkedin.com/in/deandre-minor92">LinkedIn</a></p>
        </section>

      </body>
            </header>
    </main>
  );
}

export default App;
