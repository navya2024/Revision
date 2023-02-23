import * as React from 'react';
class MyCompo extends React.Component{
    xyz = {
        first : false,
        second : true
    }

    render(){
        const {first,second} = this.xyz;
        return(
            <>
            <button disabled={first}  >First</button>
            <button disabled={second}  >Second</button>
            </>
        )
    }
}

export default MyCompo;
