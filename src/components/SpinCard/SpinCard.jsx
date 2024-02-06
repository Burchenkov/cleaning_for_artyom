import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Image from "react-bootstrap/Image";
import question from "../../images/main/question.svg";

const SpinCard = (props) => {
  const [isShow, setIsShow] = useState(false);
  if (props.compare) {
    return (
      <div className="spin-container">
        <CSSTransition in={!isShow} timeout={1500} classNames="front">
          <div className="services-card">
            <Image
              className="question"
              src={question}
              onClick={() => setIsShow(!isShow)}
            />
            <div className="card-title">
              <h3>
                Уборка после <br /> ремонта
              </h3>
            </div>
            <div className="card-main">
              <div className="card-main-line">
                <p>Однушка</p>
                <p>Требуется осмотр</p>
              </div>
              <div className="card-main-line">
                <p>Двушка</p>
                <p>Требуется осмотр</p>
              </div>
              <div className="card-main-line">
                <p>Трешка</p>
                <p>Требуется осмотр </p>
              </div>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          appear={true}
          in={!isShow}
          timeout={1500}
          classNames="back"
        >
          <div className="services-card pos">
            <Image
              className="question spin-question"
              src={question}
              onClick={() => setIsShow(!isShow)}
            />
            <div className="card-title card-spin-title">
              <h3>Уборка после ремонта</h3>
            </div>
            <div className="card-main">
              <div className="card-main-line spin-card-line">
                <h3 className="spin-title">Во всей квартире</h3>
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
                <h3 className="spin-title">Кухня</h3>
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
                <h3 className="spin-title">Ванная и туалет</h3>
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
              <p className="add-inf">*мытье окон в стоимость не входит</p>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  } else if (props.general) {
    return (
      <div className="spin-container">
        <CSSTransition in={!isShow} timeout={1500} classNames="front">
          <div className="services-card">
            <Image
              className="question"
              src={question}
              onClick={() => setIsShow(!isShow)}
            />
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
          </div>
        </CSSTransition>
        <CSSTransition
          appear={true}
          in={!isShow}
          timeout={1500}
          classNames="back"
        >
          <div className="services-card pos">
            <Image
              className="question spin-question"
              src={question}
              onClick={() => setIsShow(!isShow)}
            />
            <div className="card-title card-spin-title">
              <h3>Генеральная уборка</h3>
            </div>
            <div className="card-main">
              <div className="card-main-line spin-card-line">
                <h3 className="spin-title">Во всей квартире</h3>
                <ul>
                  <div className="spin-list">
                    <li>протрем пыль в труднодоступных местах</li>
                    <li>помоем полы</li>
                    <li>пропылесосим ковер</li>
                    <li>помоем зеркала</li>
                    <li>помоем мусорные корзины</li>
                    <li>помоем входную и межкомнатные двери</li>
                  </div>
                </ul>
              </div>
              <div className="card-main-line spin-card-line">
                <h3 className="spin-title">Кухня</h3>
                <ul>
                  <div className="spin-list">
                    <li>помоем посуду в раковине</li>
                    <li>помоем столешницу</li>
                    <li>помоем обеденный стол</li>
                    <li>помоем плиту</li>
                    <li>
                      помоем фасады кухонного гарнитура и фартука от жировой
                      пленки
                    </li>
                    <li>устраним ржавчину, водный камень, известковый налет</li>
                    <li>помоем вытяжку</li>
                  </div>
                </ul>
              </div>
              <div className="card-main-line spin-card-line">
                <h3 className="spin-title">Ванная и туалет</h3>
                <ul>
                  <div className="spin-list">
                    <li>помоем ванную или душевую</li>
                    <li>помоем раковину</li>
                    <li>помоем унитаз</li>
                    <li>помоем смесители</li>
                    <li>помоем биде</li>
                    <li>помоем плитку в зоне ванной</li>
                    <li>устраним ржавчину, водный камень, известковый налет</li>
                    <li>помоем кафельную плитку и отчистим межплиточные швы</li>
                  </div>
                </ul>
              </div>
              <p className="add-inf">*мытье окон в стоимость не входит</p>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  } else {
    return (
      <div className="spin-container">
        <CSSTransition in={!isShow} timeout={1500} classNames="front">
          <div className="services-card">
            <Image
              className="question"
              src={question}
              onClick={() => setIsShow(!isShow)}
            />
            <div className="card-title">
              <h3>
                Поддерживающая <br /> уборка
              </h3>
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
                <p>от 2 990 руб</p>
              </div>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          appear={true}
          in={!isShow}
          timeout={1500}
          classNames="back"
        >
          <div className="services-card pos">
            <Image
              className="question"
              src={question}
              onClick={() => setIsShow(!isShow)}
            />
            <div className="card-title card-spin-title">
              <h3>Поддерживающая уборка</h3>
            </div>
            <div className="card-main">
              <div className="card-main-line spin-card-line">
                <h3 className="spin-title">Во всей квартире</h3>
                <ul>
                  <div className="spin-list">
                    <li>протрем пыль</li>
                    <li>пропылесосим ковер</li>
                    <li>помоем полы</li>
                    <li>помоем зеркала</li>
                  </div>
                </ul>
              </div>
              <div className="card-main-line spin-card-line">
                <h3 className="spin-title">Кухня</h3>
                <ul>
                  <div className="spin-list">
                    <li>помоем посуду в раковине</li>
                    <li>помоем столешницу</li>
                    <li>помоем обеденный стол</li>
                    <li>помоем плиту</li>
                    <li>помоем фартук</li>
                  </div>
                </ul>
              </div>
              <div className="card-main-line spin-card-line">
                <h3 className="spin-title">Ванная и туалет</h3>
                <ul>
                  <div className="spin-list">
                    <li>помоем ванную или душевую</li>
                    <li>помоем раковину</li>
                    <li>помоем унитаз</li>
                    <li>помоем смесители</li>
                    <li>помоем биде</li>
                    <li>помоем плитку в зоне ванной</li>
                  </div>
                </ul>
              </div>
              <p className="add-inf">*мытье окон в стоимость не входит</p>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
};

export default SpinCard;
