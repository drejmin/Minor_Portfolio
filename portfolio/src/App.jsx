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
    </main>
  );
}

export default App;
