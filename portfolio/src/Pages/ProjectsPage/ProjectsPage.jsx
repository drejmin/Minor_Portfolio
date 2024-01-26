import './ProjectsPage.css';
import React from 'react';
import ProjectCard from './ProjectCard';


export default function ProjectsPage(){
    return (
        <main>
            <section className="projects" id='projects'>
                <header className='content-title'>Projects</header>

                    <div className='projects-container'>
                        <ProjectCard
                        title="Forget Me Not"
                        description="This is a refrigerator tracking app that allows you to track items and expiration dates,
                        upload receipts and get reminders when they are about to perish or go bad. The 
                        app is built using django and  python for the backend, HTML and CSS for the frontend.
                        It is currently able to allow users to login to their accounts, input fridge items,
                            upload receipts and set up reminders based on the expiration dates of items. The app is
                            a work in progress but is still being updated."
                        imageUrl="https://via.placeholder.com/300" // Replace with your actual image URL
                        demoUrl="https://django-cool-app-1-941f9f541496.herokuapp.com/"
                        sourceUrl="https://github.com/drejmin/Fridge-Item-Tracker.git"
                        />
                        <ProjectCard
                        title="Notes on Notes"
                        description="Notes on notes is a sharing app that allows users to upload, search, create, and view notes 
                        and share them with other users. The site uses Google Oauth for user login, mongodb for data 
                        storage and express js for both the front and backend. It can log users in and store data, allow 
                        the upload of images for notes and allow the creation of groups. The app is a work in progress and 
                        is still being updated."
                        imageUrl="https://camo.githubusercontent.com/a8bbbba035b72c43edc0a01f470ab38b036bb21ed3293adaea888b24b95df551/68747470733a2f2f692e696d6775722e636f6d2f6b5173534e774c2e706e67" // Replace with your actual image URL
                        demoUrl="https://notes-on-notes-036102fff03f.herokuapp.com/notes"
                        sourceUrl="https://github.com/drejmin/project-2.git"
                        />
                        <ProjectCard
                        title="Reach OUt"
                        description="Chat app that allows people to join and create a chat room that is tailored around mental health 
                        and making connections. This app is built using a MERN stack. MongoDB for the database and storage, 
                        express.js for the backend, and node.js and React.js for the frontend.The app is a work in progress
                        and is still being updated."
                        imageUrl="https://via.placeholder.com/300"
                        demoUrl="https://reachout-f4d9228bef9f.herokuapp.com/"
                        sourceUrl="https://github.com/drejmin/ReachOut.git"
                        />
                        {/* 
                        <ProjectCard
                        title=""
                        description=""
                        imageUrl=""
                        demoUrl=""
                        sourceUrl="" 
                        />
                        */}
                    
            
                    </div>
            
        </section>
            
        </main>
    )
}