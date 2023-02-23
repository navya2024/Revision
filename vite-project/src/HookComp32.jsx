import * as React from 'react';
import HookComp3 from './HookComp3';

const ShowHideUse = ({show}) => (show ? <HookComp3/> : null);

function HookComp32() {
     const [show, setshow] = React.useState(false);
     return (
        <>
        <button onClick={() =>
         { 
            setshow(!show);
        }}
         >
            {show ? "Hide User" : "show User"}
         </button>
         <ShowHideUse show={show} />

        </>
     );
     
}

export default HookComp32;