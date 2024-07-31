import React, { useState } from "react";
import "./style.css";

const ReactHoverEffect = () => {
  const [playpenStyle, setPlaypenStyle] = useState({
    background: "rgba(86, 128, 255, 1.00)",
  });

  const handlePlaypenMouseMove = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    const xy = `${x}px ${y}px`;
    const gradientSize = 100;

    const bgWebKit = `-webkit-gradient(radial, ${xy}, 0, ${xy}, ${gradientSize}, from(rgba(86, 128, 255, 1.00)), to(rgba(255, 255, 255, 0.0))), ${playpenStyle.background}`;
    const bgMoz = `-moz-radial-gradient(${x}px ${y}px 45deg, circle, rgba(86, 128, 255, 1.00) 0%, ${playpenStyle.background} ${gradientSize}px)`;

    setPlaypenStyle({
      background: `${bgWebKit}, ${bgMoz}`,
    });
  };

  const handlePlaypenMouseLeave = () => {
    setPlaypenStyle({
      background: "rgba(86, 128, 255, 1.00)",
    });
  };

  const [navLinkStyle, setNavLinkStyle] = useState({
    background: "rgba(86, 128, 255, 1.00)",
  });

  const handleNavLinkMouseMove = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    const xy = `${x}px ${y}px`;
    const gradientSize = 100;

    const bgWebKit = `-webkit-gradient(radial, ${xy}, 0, ${xy}, 100, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0.0))), ${navLinkStyle.background}`;
    const bgMoz = `-moz-radial-gradient(${x}px ${y}px 45deg, circle, rgba(255, 255, 255, 0.8) 0%, ${navLinkStyle.background} ${gradientSize}px)`;

    setNavLinkStyle({
      background: `${bgWebKit}, ${bgMoz}`,
    });
  };

  const handleNavLinkMouseLeave = () => {
    setNavLinkStyle({
      background: "rgba(86, 128, 255, 1.00)",
    });
  };

  return (
    <div>
      {/* Playpen */}
      <div
        id="playpen"
        style={playpenStyle}
        onMouseMove={handlePlaypenMouseMove}
        onMouseLeave={handlePlaypenMouseLeave}
      >
        {/* Content inside playpen */}
      </div>

      {/* Navigation */}
      <ul className="nav">
        <li className="active">
          <a href="#">Active Link</a>
        </li>
        <li>
          <a
            href="#"
            style={navLinkStyle}
            onMouseMove={handleNavLinkMouseMove}
            onMouseLeave={handleNavLinkMouseLeave}
          >
            Hover Link
          </a>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </div>
  );
};

export default ReactHoverEffect;
