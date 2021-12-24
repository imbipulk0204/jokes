export const initialState = {
  user: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER":
      return {
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
