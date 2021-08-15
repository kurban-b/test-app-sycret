import React, { useEffect, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCertificate, loadCertificates } from "../redux/actionCreators";
import { useHistory } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const certificates = useSelector((state) => state.certificates);
  const [value, setValue] = useState("");
  const history = useHistory();

  useEffect(() => {
    dispatch(loadCertificates());
  }, [dispatch]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    dispatch(addCertificate(certificates.find((el) => el.ID === value)));
    history.push("/contacts");
  };

  return (
    <div>
      <div className={"certificates_wrap"}>
        <select name="list" id="list" value={value} onChange={handleChange}>
          {value === "" && (
            <option value="" selected>
              Выберите сертификат
            </option>
          )}
          {loading
            ? "Загрузка..."
            : certificates.map((el) => {
                return <option value={el.ID}>{el.NAME}</option>;
              })}
        </select>
        {!!value && (
          <div className={"btn_wrap"}>
            <button onClick={handleClick}>Оформить</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Main);
