import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Image from "react-bootstrap/Image";
import question from "../../images/main/question.svg";

const SpinCard = () => {
  const [isShow, setIsShow] = useState(false);
  const nodeRef = null;
  return (
    //   <Image className="question" src={question} />
    //   <div className="card-title">
    //     <h3>
    //       Уборка после <br /> ремонта
    //     </h3>
    //   </div>
    //   <div className="card-main">
    //     <div className="card-main-line spin-card-line">
    //       <p>Однушка</p>
    //       <p>Требуется осмотр</p>
    //     </div>
    //     <div className="card-main-line spin-card-line">
    //       <p>Двушка</p>
    //       <p>Требуется осмотр</p>
    //     </div>
    //     <div className="card-main-line spin-card-line">
    //       <p>Трешка</p>
    //       <p>Требуется осмотр</p>
    //     </div>
    //   </div>
    <div className="spin-container">
      <CSSTransition in={!isShow} timeout={2000} classNames="front">
        <div className="services-card pos">
          <Image
            className="question"
            src={question}
            onClick={() => setIsShow(!isShow)}
          />
          <div className="card-title">
            <h3>Tекст</h3>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        appear={true}
        in={!isShow}
        timeout={2000}
        classNames="back"
      >
        <div className="services-card pos">
          <Image
            className="question"
            src={question}
            onClick={() => setIsShow(!isShow)}
          />
          <div className="card-title">
            <h3>Уборка после ремонта</h3>
          </div>
          <div className="card-main">
            <div className="card-main-line spin-card-line">
              <h3>Во всей квартире</h3>
              <ul>
                <div className="spin-list">
                  <li>уберем строительные загрязнения</li>
                  <li>устраним пыль и загрязнения со всех поверхностей</li>
                  <li>очистим кондиционер и другую технику</li>
                  <li>помоем входную и межкомнатные двери</li>
                  <li>очистим радиаторы отопления</li>
                  <li>устраним локальные загрязнения</li>
                  <li>помоем пол</li>
                  <li>помоем зеркала</li>
                  <li>уберем пыль внутри шкафов и гардеробной</li>
                </div>
              </ul>
            </div>
            <div className="card-main-line spin-card-line">
              <h3>Кухня</h3>
              <ul>
                <div className="spin-list">
                  <li>уберем строительные загрязнения</li>
                  <li>устраним пыль и загрязнения со всех поверхностей</li>
                  <li>очистим кондиционер и другую технику</li>
                  <li>помоем входную и межкомнатные двери</li>
                  <li>очистим радиаторы отопления</li>
                </div>
              </ul>
            </div>
            <div className="card-main-line spin-card-line">
              <h3>Ванная и туалет</h3>
              <ul>
                <div className="spin-list">
                  <li>уберем строительные загрязнения</li>
                  <li>устраним пыль и загрязнения со всех поверхностей</li>
                  <li>очистим кондиционер и другую технику</li>
                  <li>помоем входную и межкомнатные двери</li>
                  <li>очистим радиаторы отопления</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default SpinCard;
