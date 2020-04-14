// Plant Function Factory
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

export const blueFood = changeState("soil")(5);
export const hydrate = changeState("water")(2);
export const giveLight = changeState("light")(3);

export const storeState = (initialState) => {
  let currentState = (initialState || {});
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateChanger = storeState();