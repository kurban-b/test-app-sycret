import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputMask from "react-input-mask";
import { toBack } from "../redux/actionCreators";
import { useHistory } from "react-router-dom";

function Contacts() {
  const dispatch = useDispatch();
  const certificate = useSelector((state) => state.choice);
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    error: false,
    modal: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleBack = () => {
    setValues({ ...values, error: false, modal: false});
    dispatch(toBack());
    history.push("/");
  };

  const handlePayment = () => {
    if (values.name === "" || values.phone === "" || values.email === "") {
      setValues({ ...values, error: true });
      return;
    } else if (values.phone.indexOf("_") !== -1) {
      setValues({ ...values, error: true });
      return;
    } else if (values.email.indexOf("@") === -1) {
      setValues({ ...values, error: true });
      return;
    }
    setValues({ ...values, error: false, modal: true});
  };

  return (
    <div>
      <h2 className={"main_title"}>Контакты для оплаты</h2>
      <div className={"contacts"}>
        <h4>Вы выбрали: {certificate.NAME}</h4>
        <input
          type="text"
          value={values["name"]}
          placeholder={"Имя"}
          onChange={handleChange("name")}
        />
        <br />
        <InputMask
          mask="+7(999)999-99-99"
          alwaysShowMask={true}
          value={values["phone"]}
          onChange={handleChange("phone")}
        />
        <br />
        <input
          type="text"
          placeholder={"Эл почта"}
          value={values["email"]}
          onChange={handleChange("email")}
        />
        <div>
          <button onClick={handleBack}>Назад</button>
          <button onClick={handlePayment} className={"btn_fetch"}>
            Оплатить
          </button>
        </div>
        <div className={"error"}>
          {values.error && "Заполните све поля валидно!"}
        </div>
      </div>
      {values.modal && (
        <div className={"modal"}>
          <h3>Успешно оплачено!!!</h3>
          <div>
            <button onClick={handleBack}>назад</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contacts;
