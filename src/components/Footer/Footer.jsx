import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="rights">
            <p>©2024 Все права защищены.</p>
          </div>
          <div className="footer-about">
            <h6>О нас</h6>
            <a href="#preview">
              <p>Наши приемущества</p>
            </a>
            <a href="#header">
              <p>
                <span className="color">Cвязаться с нами</span>
              </p>
            </a>
          </div>
          <div className="footer-services">
            <h6>Услуги</h6>
            <p>Уборка офиса</p>
            <p>Уборка после ремонта</p>
            <p>Генеральная уборка</p>
            <p>Поддерживающая уборка</p>
            <p>Мытье окон</p>
            <p>Доп услуги</p>
          </div>
          <div className="footer-contacts">
            <h6>Контакты</h6>
            <p>
              <span className="color">ООО "Статус"</span>
            </p>
            <p>Адрес: г.Рязань, ул.Зубковой, д.30</p>
            <p>Пн-Вс: 9.00-21.00, без выходных</p>
            <p>
              E-mail: <span className="color">OOOStatus62@mail.ru</span>
            </p>
            <p>
              Тел: <span className="weight">+7 (915) 593-77-07</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
