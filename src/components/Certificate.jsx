import React from 'react'
import { useDispatch } from 'react-redux'
import { addCertificate } from '../redux/actionCreators'
import { useHistory } from "react-router-dom";

function Certificate ({certificate}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(addCertificate(certificate));
    history.push("/contacts")
  }

  return (
    <div className={`certificate s${certificate.PRIMARYKEY}`}>
      <h3>{certificate.NAME}</h3>
      <div className={'btn_wrap'}>
        <button onClick={handleClick}>
          Оформить
        </button>
      </div>
    </div>
  )
}

export default Certificate;