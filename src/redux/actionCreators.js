export const loadCertificates = (ApiKey) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: "certificates/load/start" });
      const res = await fetch(
        `https://sycret.ru/service/api/api?ApiKey=011ba11bdcad4fa396660c2ec447ef14&MethodName=OSGetGoodList`
      );
      const json = await res.json();
      dispatch({
        type: 'certificates/load/success',
        payload: json
      })
    } catch (e) {
      console.error(`Error: ${e}`)
    }
  };
};

export const addCertificate = (certificate) => {
  return {
    type: 'certificates/add',
    payload: certificate
  }
}

export const toBack = () => {
  return {
    type: 'certificates/back'
  }
}
