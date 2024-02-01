import React from "react";
import Image from "react-bootstrap/Image";
import logo from "../../images/header/logo.svg";

const Logo = () => {
  return (
    <>
      <a href="/">
        <Image className="logo" src={logo} />
      </a>
      <div className="subtitle">
        <p>
          <span className="darkblue">П</span>орядок в доме
        </p>
        <p>
          <span className="lightblue">П</span>орядок в голове
        </p>
      </div>
    </>
  );
};

export default Logo;
