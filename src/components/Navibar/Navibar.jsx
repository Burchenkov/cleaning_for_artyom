import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import services from "../../images/header/services.svg";
import contacts from "../../images/header/contacts.svg";
import about from "../../images/header/information.svg";

const Navibar = () => {
  return (
    <Navbar className="navibar justify-content-around align-items-start">
      <a href="#services">
        <Nav className="services">
          <Image
            className="services-img navibar-img"
            src={services}
            alt="todo-list"
          />
          <h2 className="services-text navibar-text">УСЛУГИ</h2>
          <div className="figure-services-r navibar-figure"></div>
          <div className="figure-services-o navibar-figure"></div>
          <div className="figure-services-bck navibar-figure"></div>
        </Nav>
      </a>
      <a href="#footer">
        <Nav className=" contacts">
          <Image
            className="contacts-img navibar-img"
            src={contacts}
            alt="phone-mail"
          />
          <h2 className="contacts-text navibar-text">КОНТАКТЫ</h2>
          <div className="figure-contacts-p navibar-figure"></div>
          <div className="figure-contacts-b navibar-figure"></div>
          <div className="figure-contacts-bck navibar-figure"></div>
        </Nav>
      </a>
      <a href="#about">
        <Nav className="about">
          <Image
            className="about-img navibar-img"
            src={about}
            alt="information"
          />
          <h2 className="about-text navibar-text">О НАС</h2>
          <div className="figure-about-m navibar-figure"></div>
          <div className="figure-about-g navibar-figure"></div>
          <div className="figure-about-bck navibar-figure"></div>
        </Nav>
      </a>
    </Navbar>
  );
};

export default Navibar;
