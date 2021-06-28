// **  Initial State
const initialState = [];

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CLIENT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default clientsReducer;
