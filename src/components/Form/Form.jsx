import React, { useState, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { createUserData } from "../service/createUserData";

const Form = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userFathname, setUserFathname] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [services, setServices] = useState("");
  const helloRef = useRef(null);
  const goodbyeRef = useRef(null);
  const nodeRef = visible ? helloRef : goodbyeRef;

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

  return (
    <>
      <SwitchTransition mode="out-in">
        <CSSTransition
          nodeRef={nodeRef}
          key={visible ? "form-move" : "exit-move"}
          in={visible}
          timeout={2000}
          classNames="form"
        >
          {!visible ? (
            <form
              ref={nodeRef}
              onSubmit={handleUploadData}
              className="form-move"
            >
              <legend>
                <h3>Укажите свои данные и наш специалсит свяжется с вами</h3>
              </legend>
              <input
                required={true}
                name="surname"
                value={userSurname}
                type="text"
                placeholder="Фамилия"
                maxlength="50"
                autoComplete="off"
                onChange={(e) => {
                  setUserSurname(e.target.value);
                }}
              />
              <input
                required={true}
                name="name"
                value={userName}
                type="text"
                placeholder="Имя"
                maxlength="50"
                autoComplete="off"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <input
                required={true}
                name="fathname"
                value={userFathname}
                type="text"
                placeholder="Отчество"
                maxlength="50"
                autoComplete="off"
                onChange={(e) => {
                  setUserFathname(e.target.value);
                }}
              />
              <input
                required={true}
                name="tel"
                value={userTel}
                type="tel"
                placeholder="Телефон"
                maxlength="50"
                autoComplete="off"
                onChange={(e) => {
                  setUserTel(e.target.value);
                }}
              />
              <input
                required={true}
                name="email"
                value={userEmail}
                type="email"
                placeholder="Email"
                maxlength="50"
                autoComplete="off"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <select
                required={true}
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
          ) : (
            <div className="exit-move" ref={nodeRef}>
              <h3>Ваша заявка успешно отправлена!</h3>
              <h6>Наш специалсит свяжется с вами</h6>
              <button className="exit-btn" onClick={onClose}>
                Закрыть
              </button>
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default Form;
