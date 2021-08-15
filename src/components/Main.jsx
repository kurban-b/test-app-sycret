import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCertificates } from "../redux/actionCreators";
import Certificate from "./Certificate";


function Main() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const certificates = useSelector((state) => state.certificates);

  useEffect(() => {
    dispatch(loadCertificates());
  }, [dispatch]);

  return (
    <div>
      <h2 className={'main_title'}>Выберите сертификат</h2>
      <div className={"certificates_wrap"}>
        {loading
          ? "Загрузка..."
          : certificates.map((el) => {
              return <Certificate key={el.ID} certificate={el} />;
            })}
      </div>
    </div>
  );
}

export default memo(Main);
