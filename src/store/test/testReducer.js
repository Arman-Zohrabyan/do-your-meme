const initialState = {
  test: 123
};

const test = (state = initialState, action) => {
  switch (action.type) {

    case 'TEST': {
      return {
        ...state,
        test: 345
      };
    }

    default:
      return state;
  }
};

export default test;