import * as React from 'react';
function Reducer(state, action)
{
    switch(action.type)
    {
        case "dispatchName":
            return {...state, name: action.value};
        case "dispatchAge":
            return { ...state, age: action.value};
            default:
                throw new error(`${action.type} is not a valid action`);

    }
}

function Hookcomp5()
{
    const[{name,age}, dispatch] = React.useReducer(Reducer, {
        name: "",
        age:"",
    });
    return <> 
    <input placeholder='Name' value={name} ondispatch={(e) => dispatch({type:"dispatchName", value:e.target.value })} />
   
   <p>{name}</p>
   <input placeholder='Age' value={age} ondispatch={(e) => dispatch({type:"dispatchAge", value:e.target.value })} />
   
   <p>{age}</p>
   </>;
}
export default Hookcomp5;