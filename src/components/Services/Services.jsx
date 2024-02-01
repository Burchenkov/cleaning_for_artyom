import { React } from "react";
import Slider from "../Slider/Slider";
import SpinCard from "../SpinCard/SpinCard";

const Services = (props) => {
  return (
    <div id="services" className="main-services">
      <div className="services-title">
        <h2>
          Наши <br /> услуги
        </h2>
      </div>
      <div className="services-container">
        <div className="left">
          <div className="services-card">
            <div className="card-title">
              <h3>Уборка офиса</h3>
            </div>
            <Slider type="office" />
          </div>
          <SpinCard general={true} />
          <div className="services-card">
            <div className="card-title">
              <h3>Мытье окон</h3>
            </div>
            <Slider type={"add"} />
          </div>
        </div>
        <div className="right">
          <SpinCard compare={true} />
          <SpinCard />
          <div className="services-card">
            <div className="card-title">
              <h3>Доп услуги</h3>
            </div>
            <Slider type={"window"} />
          </div>
        </div>
        {/* <div className="services-bck"></div> */}
      </div>
    </div>
  );
};

export default Services;
