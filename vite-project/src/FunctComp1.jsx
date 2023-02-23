import * as React from "react";

const FunctComp1 = ({arg1, arg2}) => (
    <div>
        <button disabled={arg1}>{arg2}</button>
    </div>
)

FunctComp1.defaultProps = {
    arg1 : false,
    arg2 : "Cutom Text",
}

export default FunctComp1;

// export default ({arg1,arg2}) => (
//     <>
//     <button disabled={arg1}>{arg2}</button>
//     {/* <button aria-label="This is a button">Button Text</button>
//     <p>This is my functional component </p> */}
//     </>
// )