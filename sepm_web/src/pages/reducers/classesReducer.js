// classReducer.js
const initialState = {
    classes: [],
    years: [],
  };
  
  const classesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CLASSES':
        return {
          ...state,
          classes: action.payload.classes,
          years: action.payload.years
        };
      default:
        return state;
    }
  };
  
  export default classesReducer;
  