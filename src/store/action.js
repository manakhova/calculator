export const ActionType = {
    SET_PRICE: `setPrice`,
    SET_TIME: `setTime`,
    SET_DOWNPAYMENT: `setDownPayment`
  };
  
  
export const ActionCreator = {
  setPrice: (price) => ({
    type: ActionType.SET_PRICE,
    payload: price
  }),
  setTime: (time) => ({
    type: ActionType.SET_TIME,
    payload: time
  }),
  setDownpayment: (downPayment) => ({
    type: ActionType.SET_DOWNPAYMENT,
    payload: downPayment
  })
};