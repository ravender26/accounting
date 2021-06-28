// ** Initial State
const initialState = [];

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default projectsReducer;
