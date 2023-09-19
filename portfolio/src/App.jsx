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
            <h3>Forget Me Not</h3>
            <p>Refrigerator tracking app that allows you to track items and expiration dates,
               upload receipts and get reminders when they are about to perish or go bad. The 
               app is built using django and  python for the backend, HTML and CSS for the frontend.
               It is currently able to allow users to login to their accounts, input fridge items,
                upload receipts and set up reminders based on the expiration dates of items. The app is
                a work in progress but is still being updated.
            </p>
            <a href="https://django-cool-app-1-941f9f541496.herokuapp.com/">Forget Me Not</a>
          </article>
          <article class="project">
            <h3>Notes on Notes</h3>
            <p>Notes on notes is a sharing app that allows users to upload, search, create, and view notes 
              and share them with other users. The site uses Google Oauth for user login, mongodb for data 
              storage and express js for both the front and backend. It can log users in and store data, allow 
              the upload of images for notes and allow the creation of groups. The app is a work in progress and 
              is still being updated.
            </p>
            <a href="https://notes-on-notes-036102fff03f.herokuapp.com/notes">Notes on Notes</a>
          </article>
          <article class="project">
            <h3>Reach Out</h3>
            <p>Chat app that allows people to join and create a chat room that is tailored around mental health 
              and making connections. This app is built using a MERN stack. MongoDB for the database and storage, 
              express.js for the backend, and node.js and React.js for the frontend.The app is a work in progress
               and is still being updated.
            </p>
            <a href="https://notes-on-notes-036102fff03f.herokuapp.com/notes">Notes on Notes</a>
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
