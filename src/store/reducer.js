import {ActionType} from './action';

const initialState = {
  creditData: {
    price: 1000000,
    downPayment: 10,
    time: 12
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PRICE:
      return {
        ...state,
        creditData: {
          ...state.creditData,
          price: Number(action.payload)
        }
    };
    case ActionType.SET_DOWNPAYMENT:
      return {
        ...state,
        creditData: {
          ...state.creditData,
          downPayment: Number(action.payload)
        }
    };
    case ActionType.SET_TIME:
      return {
        ...state,
        creditData: {
          ...state.creditData,
          time: Number(action.payload)
        }
    };
    default:
      return state;
  }
};


export {reducer};