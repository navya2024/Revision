import * as React from "react";

const intialState = {
  options: [
    { id: 1, name: "first", value: 10 },
    { id: 2, name: "second", value: 20 },
    { id: 3, name: "third", value: 30 },
    { id: 4, name: "fourth", value: 40 },
  ],
  quantity: 1,
  selected: 1,
};

// to enable and disable the button based on the increment and decrement of the value
//it will does that job
function reduceButtonState(state) {
  return {
    ...state,
    decrementDisabled: state.quantity === 0,
    incrementDisabled: state.quantity === 10,
  };
}

//this function will update the total.
// \quantity will be multiplied by indiviual rates
//every time there is change in quantity this function should be called
function reduceTotal(state) {
  const option = state.options.find((option) => option.id === state.selected);
  return { ...state, total: state.quantity * option.value };
}

function reducer(state, action) {
  let newState;
  switch (action.type) {
    //this case will initialize the state variables.
    case "init":
      newState = reduceTotal(state);
      return reduceButtonState(newState);

    //this case will decrement the quantity and update the total state varialbles.
    // this case will update 3 state variables. (quantity, total, decrement button)
    case "decrementQuantity":
      newState = { ...state, quantity: state.quantity - 1 };
      newState = reduceTotal(newState);
      return reduceButtonState(newState);

    //this case will increment the quantity and update the total state varialbles.
    // this case will update 3 state variables. (quantity, total, decrement button)
    case "incrementQuantity":
      newState = { ...state, quantity: state.quantity + 1 };
      newState = reduceTotal(newState);
      return reduceButtonState(newState);
    //this case will update the index of the selected item as well as
    //it will also update total.
    //this case deals with 2 variables.
    case "selectItem":
      newState = { ...state, selected: Number(action.id) };
      return reduceTotal(newState);
    default:
      throw new Error(`${action.type} is not a supported action type`);
  }
}

export default function HookComp6() {
  const [
    {
      options,
      selected,
      quantity,
      total,
      decrementDisabled,
      incrementDisabled,
    },
    dispatch,
  ] = React.useReducer(reducer, intialState);
  React.useEffect(() => {
    dispatch({ type: "init" });
  }, []);
  return (
    <>
      <button
        disabled={decrementDisabled}
        onClick={() => dispatch({ type: "decrementQuantity" })}
      >
        -
      </button>
      <button
        disabled={incrementDisabled}
        onClick={() => dispatch({ type: "incrementQuantity" })}
      >
        +
      </button>
      <input value={quantity} readOnly />
      <br />
      <select
        value={selected}
        onChange={(e) => dispatch({ type: "selectItem", id: e.target.value })}
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}-{o.value}
          </option>
        ))}
      </select>
      {total}
    </>
  );
}
