import React from "react";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";

const About = () => {
  return (
    <Row id="about" className="main-about">
      <Column>
        <Row className="row-cols-md-1 about-container justify-content-center">
          <Column xs={10}>
            <h2 className="about-title ms-me">
              О нашей <br /> компании
            </h2>
          </Column>
          <Column xs={10} md={5}>
            <p className="about-title-text txt-1">
              Мы - команда профессионалов, специализирующихся на качественных
              клининговых услугах для дома и офиса. Мы обеспечиваем чистоту и
              уют, разгружая вас от забот о порядке в вашем пространстве.
            </p>
          </Column>
          <Column xs={10} md={5} className="offset-md-1">
            <p className="about-title-text txt-2">
              Мы предоставляем широкий спектр услуг: Уборка домов и квартир:
              опытные клинеры, экологически чистые средства. Офисная уборка:
              профессионально и с индивидуальным графиком. Коммерческая уборка:
              обслуживание магазинов, ресторанов, салонов, с акцентом на
              визуальное впечатление и чистоту.
            </p>
          </Column>
          <Column xs={10} md={5}>
            <p className="about-title-text txt-3">
              Мы гордимся своими высокими стандартами и стремимся к постоянному
              совершенствованию наших услуг. Все наши сотрудники проходят
              обязательное обучение и имеют богатый опыт в сфере клининга. Мы
              стремимся к установлению долгосрочных отношений с каждым клиентом
              и гарантируем индивидуальный подход к каждому заказу.
            </p>
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default About;
