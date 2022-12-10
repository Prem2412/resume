import React from "react";

export const Academic = ({ academic }) => {
  return (
    <section className="academic-experience section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education__container bd-grid">
        {academic.map((academic, i) => (
          <Academics key={i} {...academic} />
        ))}
      </div>
    </section>
  );
};

const Academics = ({ career, date, institution, percent }) => {
  return (
    <div className="education__content">
      <div className="education__time">
        <span className="education__rounder"></span>
        <span className="education__line"></span>
      </div>
      <div className="education__data bd-grid">
        <h3 className="education__title">{career}</h3>
        <span className="education__year">{date}</span>
        <span className="education__studies">{institution}</span>
        <span className="education__year">{percent}</span>
      </div>
    </div>
  );
};
