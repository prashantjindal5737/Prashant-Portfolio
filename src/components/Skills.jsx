import React from 'react';
const Skills = () => {
  const skills = ["MongoDB","Express.js","React.js","Node.js","Python","Django","Docker","Kubernetes","AWS","NumPy","Pandas","Seaborn","Matplotlib","SQL","OOP","DSA","HTML","CSS","JavaScript"];
  return (
    <section id="skills">
      <h2 className="neon-title">Skills</h2>
      <div className="card-container">
        {skills.map(s => <div className="card" key={s}>{s}</div>)}
      </div>
    </section>
  );
};
export default Skills;
