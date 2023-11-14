import React, { useEffect, useRef, useState } from 'react';
import './SkillsPage.css';

const skills = [
    { name: "JavaScript", progress: 60 },
    { name: "HTML", progress: 58 },
    { name: "Python", progress: 55 },
    { name: "CSS", progress: 47 },
    { name: "VSCode", progress: 80 },
    { name: "React", progress: 65 },
    { name: "GIT", progress: 80 },
    { name: "SQL", progress: 58 },
    { name: "Express", progress: 52 },
    { name: "MongoDB", progress: 58 },
    { name: "EJS", progress: 58 },
    { name: "Django", progress: 65 },
    { name: "Microsoft Suite", progress: 83 },
    { name: "Google Suite", progress: 92 },
    { name: "RESTful Routing", progress: 60 },
    { name: "NodeJS", progress: 52 },
    { name: "GIT Version Control", progress: 70 },
  ];

const Skill = React.forwardRef(({ name, progress, isVisible }, ref) => (
  <div ref={ref} className={`skills__skill ${isVisible ? 'animate' : ''}`}>
    {name} <progress className='progress' value={isVisible ? progress : 0} max="100"></progress>
  </div>
));

export default function SkillsPage() {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const skillsRef = useRef(skills.map(() => React.createRef()));

  useEffect(() => {
    const currentSkillsRef = skillsRef.current; // Local variable referencing skillsRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleSkills(prevVisibleSkills => new Set(prevVisibleSkills.add(index)));
          }
        });
      },
      { threshold: 0.5 }
    );

    currentSkillsRef.forEach((ref, index) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup function using the local variable
    return () => {
      currentSkillsRef.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <main>
      <div className="content-skills">
        <header className="content-title">Skills</header>
        <div className="skills">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              ref={skillsRef.current[index]}
              name={skill.name}
              progress={skill.progress}
              isVisible={visibleSkills.has(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
