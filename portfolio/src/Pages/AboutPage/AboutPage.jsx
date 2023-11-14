import './AboutPage.css';

export default function AboutPage (){
    return(
        <main>
            <header className ='content-title'>About Me</header>
            <section className = 'aboutMe'>
                <p>
                    Hey welcome to my page I'm glad that you stopped by! 
                </p>
                <p>
                    My name is DeAndre Minor and I am a software engineer. 
                    Recently I decided to start anew in the tech industry since I am 
                    very passionate about all the new technology that has come out and want 
                    to be a part of that world.
                </p>
                <p>
                    Personally I love to learn new things and build strong relationships with 
                    people and/or animals dogs especially. In my previous career in education, 
                    I was greatful enough to learn and use universal skills such as  
                    <strong> planning</strong>, to set goals and plan lessons, <strong> communication </strong> 
                    to collaborate with peers, students and parents as well as <strong>time management </strong> 
                    to meet deadlines and finish timelines. 
                </p>
                <p>
                    I want to bring my abilities to <strong>plan</strong>,  
                    <strong> communicate</strong> and <strong>manage time</strong> further as I delve into my career as a software engineer.
                </p>
                <p>
                    I want to assist in building things that can make people's lives easier, as well as something that will aid in the world’s 
                    education. 
                </p>
                <p>
                    Outside of coding you can find me with my other hobbies such as:
                </p>
                <ul className='list'>
                    <li>Time with Family</li>
                    <li>Watching Movies</li>
                    <li>Playing Sports or Exercising</li>
                    <li>Reading</li>
                    <li>Video Games</li>
                    <li>Playing with my pups</li>
                    <li>Solving Puzzles</li>
                    <li>Gardening</li>
                </ul>
            </section>
        </main>
    )
}