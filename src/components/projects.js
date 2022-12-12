import React from "react";
import { Description } from "./description";

export const Projects = ({ projects }) => {
  return (
    <section className="projects-experience section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="experience__container bd-grid">
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

const Project = ({
  name,
  company,
  period,
  description,
  role,
  framework,
  link,
}) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">{name}</h3>
        <span className="experience__project">{period}</span>
        <span className="experience__project">FrameWork: {framework}</span>
        <span className="experience__project"> Role: {role} </span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
      </div>
    </div>
  );
};
