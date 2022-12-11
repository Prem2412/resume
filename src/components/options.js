import React, { useState, useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { ParticlesParams } from "../schemas/particles";
import { loadFull } from "tsparticles";

export const Options = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  var { lsTheme, lsIcon, lsSnow } = "";
  try {
    lsTheme = localStorage.getItem("theme");
    lsIcon = localStorage.getItem("icon");
    lsSnow = JSON.parse(localStorage.getItem("snow"));
  } catch (e) {
    console.error(`All Cookies blocked - Error: ${e.message}`);
  }

  const [theme, setTheme] = useState(lsTheme || "light");
  const [icon, setIcon] = useState(lsIcon || "bx-moon");
  const [snow, setSnow] = useState(lsSnow);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("icon", icon);
    localStorage.setItem("snow", snow);
    document.body.classList[theme === "dark" ? "add" : "remove"]("dark-theme");
  }, [theme, snow, icon]);

  const SnowEffect = () =>
    snow &&
    theme === "dark" && (
      <Particles
        id="tsparticles"
        options={ParticlesParams.options}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    );

  const _enableSnow = () => setSnow(!snow);
  const _toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    icon === "bx-sun" ? setIcon("bx-moon") : setIcon("bx-sun");
  };

  return (
    <div className="home__options" id="resume__options">
      {theme === "dark" && (
        <i
          className="bx bx-cog enable-snow"
          title="Activate Snow"
          id="snow-button"
          onClick={_enableSnow}
        />
      )}
      <SnowEffect />
      <i
        className={`bx ${icon} change-theme`}
        title="Toggle Theme"
        id="theme-button"
        onClick={_toggleTheme}
      />
    </div>
  );
};
