import { React, useState } from "react";
// import Image from "react-bootstrap/Image";
// import question from "../../images/main/question.svg";
import Slider from "../Slider/Slider";
import SpinCard from "../SpinCard/SpinCard";

const Services = () => {
  return (
    <div className="main-services">
      <div className="services-title">
        <h2>Наши услуги</h2>
      </div>
      <div className="services-container">
        <div className="left">
          <div className="services-card">
            <div className="card-title">
              <h3>Уборка офиса</h3>
            </div>
            <Slider type="office" />
          </div>
          <SpinCard />
          <div className="services-card">
            <div className="card-title">
              <h3>
                Генеральная <br /> уборка
              </h3>
            </div>
            <div className="card-main">
              <div className="card-main-line">
                <p>Однушка</p>
                <p>от 4490 руб</p>
              </div>
              <div className="card-main-line">
                <p>Двушка</p>
                <p>от 5490 руб</p>
              </div>
              <div className="card-main-line">
                <p>Трешка</p>
                <p>от 5990 руб</p>
              </div>
            </div>
            <Slider type={"add"} />
          </div>
        </div>
        <div className="right">
          <div className="services-card">
            <div className="card-title">
              <h3>Поддерживающая уборка</h3>
            </div>
            <div className="card-main">
              <div className="card-main-line">
                <p>Однушка</p>
                <p>от 1990 руб</p>
              </div>
              <div className="card-main-line">
                <p>Двушка</p>
                <p>от 2490 руб</p>
              </div>
              <div className="card-main-line">
                <p>Трешка</p>
                <p>от 2990 руб</p>
              </div>
            </div>
          </div>
          <div className="services-card">
            <div className="card-title">
              <h3>Мытье окон</h3>
            </div>
            <Slider type={"add"} />
          </div>
          <div className="services-card">
            <div className="card-title">
              <h3>Доп услуги</h3>
            </div>
            <Slider type={"window"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
