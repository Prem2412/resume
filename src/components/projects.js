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
        <span className="experience__proyect">{period}</span>
        <span>FrameWork: {framework}</span>
        <span> Role: {role} </span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
        {link.map((link, i) => (
          <Link link={link} key={i} />
        ))}
      </div>
    </div>
  );
};

const Link = ({ link }) => {
  return (
    <>
      {link.android && (
        <a
          href={link.android}
          target="_blank"
          rel="noreferrer"
          className="social__link"
        >
          <i className={`bx bxl-android social__icon`}></i> {link.android}
        </a>
      )}
      {link.iOS && (
        <a
          href={link.iOS}
          target="_blank"
          rel="noreferrer"
          className="social__link"
        >
          <i className={`bx bxl-apple social__icon`}></i> {link.iOS}
        </a>
      )}
    </>
  );
};
