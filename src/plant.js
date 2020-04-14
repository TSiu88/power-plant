// Plant Function Factory
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

export const current = changeState("water")(0);
export const blueFood = changeState("soil")(5);
export const hydrate = changeState("water")(2);
export const giveLight = changeState("light")(3);

export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const plant1 = {soil: 0, water: 0, light: 0};
const plant2 = {};
export const lily = storeState(plant1);
export const rose = storeState(plant2);

export const counterFunction = () => {
  let counter = 2;
  return () => {
    counter ++;
    return counter;
  }
}
export const incrementer = counterFunction();