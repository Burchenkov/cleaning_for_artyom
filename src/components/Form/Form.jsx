import React, { useState } from "react";
import { Transition } from "react-transition-group";

import { createUserData } from "../service/createUserData";

const Form = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userFathname, setUserFathname] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [services, setServices] = useState("");

  const clear = () => {
    setUserName("");
    setUserSurname("");
    setUserFathname("");
    setUserTel("");
    setUserEmail("");
    setServices("");
  };

  let handleUploadData = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("Имя", userName);
    data.append("Фамилия", userSurname);
    data.append("Отчество", userFathname);
    data.append("Телефон", userTel);
    data.append("Email", userEmail);
    data.append("Услуга", services);
    createUserData(data).then((value) => {
      setVisible(value);
    });
    clear();
  };

  if (!visible) {
    return (
      <Transition in={!visible} unmountOnExit={true} timeout={5000}>
        {(state) => (
          <form className={`form-${state}`} onSubmit={handleUploadData}>
            <legend>
              <h3>Укажите свои данные и наш специалсит свяжется с вами</h3>
            </legend>
            <input
              name="name"
              value={userName}
              type="text"
              placeholder="Имя"
              maxLength="50"
              autoComplete="off"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              name="surname"
              value={userSurname}
              type="text"
              placeholder="Фамилия"
              maxLength="50"
              autoComplete="off"
              onChange={(e) => {
                setUserSurname(e.target.value);
              }}
            />
            <input
              name="fathname"
              value={userFathname}
              type="text"
              placeholder="Отчество"
              maxLength="50"
              autoComplete="off"
              onChange={(e) => {
                setUserFathname(e.target.value);
              }}
            />
            <input
              name="tel"
              value={userTel}
              type="tel"
              placeholder="Телефон"
              maxLength="50"
              autoComplete="off"
              onChange={(e) => {
                setUserTel(e.target.value);
              }}
            />
            <input
              name="email"
              value={userEmail}
              type="email"
              placeholder="Email"
              maxLength="50"
              autoComplete="off"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <select
              name="servc"
              value={services}
              onChange={(e) => {
                setServices(e.target.value);
              }}
            >
              <option value="" disabled={true} selected={true}>
                Выберите услугу
              </option>
              <option value="После ремонта">После ремонта</option>
              <option value="Генеральная">Генеральная</option>
              <option value="Поддерживающая">Поддерживающая</option>
              <option value="Мытье окон">Мытье окон</option>
              <option value="Допа услуги">Доп услуги</option>
            </select>
            <input className="submit" type="submit" value="Отправить" />
          </form>
        )}
      </Transition>
    );
  } else {
    return (
      <Transition in={visible} timeout={5000}>
        {(state) => (
          <div className={`bye-${state}`}>
            <h3>Ваша заявка успешно отправлена!</h3>
            <h4>Наш специалсит свяжется с вами</h4>
            <button onClick={onClose}>Закрыть</button>
          </div>
        )}
      </Transition>
    );
  }
};

export default Form;
