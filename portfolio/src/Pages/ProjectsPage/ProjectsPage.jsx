import './ProjectsPage.css';

export default function ProjectsPage(){
    return (
        <main>
            <section id="projects">
          <h2>Projects</h2>
          <article class="project">
            <h3><a href="https://django-cool-app-1-941f9f541496.herokuapp.com/">Forget Me Not</a></h3>
            <p>Refrigerator tracking app that allows you to track items and expiration dates,
               upload receipts and get reminders when they are about to perish or go bad. The 
               app is built using django and  python for the backend, HTML and CSS for the frontend.
               It is currently able to allow users to login to their accounts, input fridge items,
                upload receipts and set up reminders based on the expiration dates of items. The app is
                a work in progress but is still being updated.
            </p>
          </article>
          <article class="project">
            <h3><a  href="https://notes-on-notes-036102fff03f.herokuapp.com/notes">Notes on Notes</a></h3>
            <p >Notes on notes is a sharing app that allows users to upload, search, create, and view notes 
              and share them with other users. The site uses Google Oauth for user login, mongodb for data 
              storage and express js for both the front and backend. It can log users in and store data, allow 
              the upload of images for notes and allow the creation of groups. The app is a work in progress and 
              is still being updated.
            </p>
          </article>
          <article class="project">
            <h3 ><a href="https://reachout-f4d9228bef9f.herokuapp.com/">Reach Out</a></h3>
            <p>Chat app that allows people to join and create a chat room that is tailored around mental health 
              and making connections. This app is built using a MERN stack. MongoDB for the database and storage, 
              express.js for the backend, and node.js and React.js for the frontend.The app is a work in progress
               and is still being updated.
            </p>
          </article>
        </section>
            
        </main>
    )
}