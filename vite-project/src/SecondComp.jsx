import * as React from "react";
class MyComp2 extends React.Component {
    state = {
        heading : "this is heading",
        context : "Loading...."
    };
     constructor(){
        super();
        setTimeout(() => {
            this.setState({
                heading:"this is new heading",
                context : "Loding done...",
            });
        }, 3000);
     }
     render(){
        const{heading ,context} = this.state;
        return(
            <>
            <h1>{heading}</h1>
            <h2>{context}</h2>
            </>
        );
     }
}

export default MyComp2;