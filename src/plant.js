// export class Plant{

// Plant Function Factory
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// feed(5)(plant)

export const blueFood = changeState("soil")(5);

// blueFood(plant)

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateChanger = storeState();


// $(document).ready(function() {

//   // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
//   $('#feed').click(function() {
//     console.log("#feed clicked.");
//     const newState = stateChanger(blueFood);
//     $('#soil-value').text(newState.soil);
//   });
// });

// }