import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <body>
        <header>
          <h1>My Portfolio</h1>
        </header>
        
        <section id="about">
          <h2>About Me</h2>
          <p>My name is DeAndre Minor and I am a software engineer who is passionate about new technology, furthering education, and building strong relationships with people.
              In my previous career in education, I used universal skills such as planning, to set goals and plan lessons; communication to collaborate with peers, 
              and parents; time management to meet deadlines and finish timelines. I want to bring my abilities to plan, communicate and manage time in order to 
              progress further into software development. I want to help build something that can make people's lives easier, as well as contribute to aid in the world’s 
              education. 
          </p>
          <h2> Languages/Frameworks</h2>
          <p>React, JavaScript, HTML, CSS, Express, NodeJS, MongoDB, PostgreSQL, Django
              <br></br>
              Utilities: Visual Studio Code, Git, GitHub, MongoDB</p>
          <h2> Interests</h2>
          <p>Reading, Coding, Video Games, Pets, Puzzles, Gardening</p>
        </section>
        
        <section id="projects">
          <h2>Projects</h2>
          <article class="project">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
          </article>
          <article class="project">
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
          </article>
        </section>
        
        <section id="contact">
          <h2>Contact</h2>
          <p>You can reach me at <a href="mailto:deandremi@yahoo.com">deandremi@yahoo.com</a></p>
          <p>Check out my Git at <a href="https://github.com/drejmin">GitHub</a></p>
          <p>Search my LinkedIn at <a href="www.linkedin.com/in/deandre-minor92">LinkedIn</a></p>
        </section>

      </body>
            </header>
    </div>
  );
}

export default App;
