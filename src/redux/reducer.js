const initState = {
  certificates: [],
  loading: false,
  choice: null,
};

export const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case "certificates/load/start":
      return {
        ...state,
        loading: true,
      };
    case "certificates/load/success":
      return {
        ...state,
        loading: false,
        certificates: actions.payload.data,
      };
    case "certificates/add":
      return {
        ...state,
        choice: actions.payload,
      };
    case "certificates/back":
      return {
        ...state,
        choice: null,
      };
    default:
      return state;
  }
};
