import './SkillsPage.css';

export default function SkillsPage(){
    return (
        <main>
            <div class="content-skills">
                    <header class="content-title">My Skills</header>
                    <div class="skills">
                        <div class="skills__skill">JavaScript <progress class = 'progress'id="progressBar" value="60" max="100"></progress></div>
                        <div class="skills__skill">HTML <progress class = 'progress'id="progressBar" value="58" max="100"></progress></div>
                        <div class="skills__skill">Python <progress class = 'progress'id="progressBar" value="55" max="100"></progress></div>
                        <div class="skills__skill">CSS <progress class = 'progress'id="progressBar" value="47" max="100"></progress></div>
                        <div class="skills__skill">VSCode <progress class = 'progress'id="progressBar" value="80" max="100"></progress></div>
                        <div class="skills__skill">React <progress class = 'progress'id="progressBar" value="65" max="100"></progress></div>
                        <div class="skills__skill">GIT <progress class = 'progress'id="progressBar" value="80" max="100"></progress></div>
                        <div class="skills__skill">Express <progress class = 'progress'id="progressBar" value="65" max="100"></progress></div>
                        <div class="skills__skill">SQL <progress class = 'progress'id="progressBar" value="45" max="100"></progress></div>
                        <div class="skills__skill">MongoDB <progress class = 'progress'id="progressBar" value="65" max="100"></progress></div>
                        <div class="skills__skill">EJS <progress class = 'progress'id="progressBar" value="47" max="100"></progress></div>
                        <div class="skills__skill">Django <progress class = 'progress'id="progressBar" value="65" max="100"></progress></div>
                        <div class="skills__skill">Microsoft Suite <progress class = 'progress'id="progressBar" value="83" max="100"></progress></div>
                        <div class="skills__skill">Google Suite <progress class = 'progress'id="progressBar" value="92" max="100"></progress></div>
                        <div class="skills__skill">RESTful Routing <progress class = 'progress'id="progressBar" value="56" max="100"></progress></div>
                        <div class="skills__skill">JSX <progress class = 'progress'id="progressBar" value="60" max="100"></progress></div>
                        <div class="skills__skill">NodeJS <progress class = 'progress'id="progressBar" value="49" max="100"></progress></div>
                        <div class="skills__skill">GIT Version Control <progress class = 'progress'id="progressBar" value="70" max="100"></progress></div>
                    </div>
            </div>


        </main>
    )
}