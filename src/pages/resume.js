import React, { useState, useEffect } from "react";

import { Profile } from "../components/profile";
import { Academic } from "../components/academic";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Works } from "../components/works";
import { SocialMedia } from "../components/socialMedia";
import { AboutMe } from "../components/aboutMe";
import { Menu } from "../components/menu";
import { SEO } from "../components/seo";

import { Data as dataSchema } from "../schemas/data";
import { Menu as menuSchema } from "../schemas/menu";

export const Resume = () => {
  const query = "(min-width: 968px)";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches]);

  const { profile, aboutMe, skills, socialMedia, experience } = dataSchema;
  return (
    <>
      <SEO {...profile} {...aboutMe} />
      {!matches && <Menu {...menuSchema} />}
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Profile {...profile} {...socialMedia} isMobileView={!matches} />
            <AboutMe {...aboutMe} />
            <Skills {...skills} />
            <SocialMedia {...socialMedia} />
          </div>
          <div className="resume__right">
            <Works {...experience} />
            <Academic {...experience} />
            <Projects {...experience} />
          </div>
        </div>
      </main>
    </>
  );
};
