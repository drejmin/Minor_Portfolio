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
// import React, {useRef, useEffect} from 'react';

// const SkillsSection = () =>{
//     const sectionRef = useRef(null);}


//     useEffect(() => {
//         const observer = new IntersectionObserver(
//         (entries, observer) => {
//             entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('animate');
//                 observer.unobserve(entry.target); // Optional: Stop observing after animation
//             }
//             });
//         },
//         { threshold: 0.3 } // Trigger when 50% of the item is visible
//         );
    
//         if (sectionRef.current) {
//         observer.observe(sectionRef.current);
//         }
    
//         return () => {
//         if (sectionRef.current) {
//             observer.disconnect();
//         }
//         };
//     }, []);

function App() {
  return (
    <main className="App">
      <>
      <Navbar/>
      <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/AboutPage" element={<AboutPage/>} />
          <Route path="/SkillsPage" element={<SkillsPage/>} />
          <Route path="/ProjectsPage" element={<ProjectsPage/>} />
      </Routes>
      </>
      <section id="ProjectsPage">{<ProjectsPage/>}</section>
      <section id="SkillsPage">{<SkillsPage/>}</section>
      <section id="AboutPage">{<AboutPage/>}</section>
      <section id="contact">
        <h2>Contact</h2>
        <div class ='logos'>
            <a href="https://docs.google.com/document/d/1IG3LCk6lxiGOLJM3HiRph8jTf7U4lWoczZCQMlfMTaE/edit?usp=sharing" target="_blank" rel='noreferrer'><img class = 'logo' src={downloadIcon} alt='download icon'/></a>
            <a href="mailto:deandremi@yahoo.com" target="_blank" rel='noreferrer'><img class = 'logo' src={emailLogo} alt='email icon'/></a>
            <a href="https://github.com/drejmin" target="_blank" rel='noreferrer'><img class = 'logo' src={GitHubLogo} alt='github icon'/></a>
            <a href={"http://www.linkedin.com/in/deandre-minor92"} target="_blank" rel='noreferrer'><img class = 'logo' src={linkedinLogo} alt='linkedin icon'/></a>
        </div>
      </section>
    </main>
  );
}

export default App;
