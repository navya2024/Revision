import * as React from "react";

class MergeComp extends React.Component {
    state = {
            first : "loading",
            second : "loading",
            third : "loading",
            fourth : "loading",
            finish : "loading",
            a : "20%",
            b : "60%",
            c : "90%",
            d : "10%",
            e : "80%",
    };
    constructor(){
        super();
        setTimeout(() => {
            this.setState((state) => ({
                ...state,
                first: state.a,
            }));
        }, 3000);
        setTimeout(() => {
            this.setState((state) => ({
                ...state,
                second: state.b,
            }));
        }, 6000);
        setTimeout(() => {
            this.setState((state) => ({
                ...state,
                third: state.c,
            }));
        }, 2000);
        setTimeout(() => {
            this.setState((state) => ({
                ...state,
                fourth: state.d,
            }));
        }, 7000);
        setTimeout(() => {
            this.setState((state) => ({
                ...state,
                finish: state.e,
            }));
        }, 1000);
    }
    render()
    {
        var arr2 = ["a","b", "c", "d", "e"]
        return(
            <ul>
                {Object.keys(this.state).filter((key) => !arr2.includes(key))
                .map((i) => (
                    <li key={i}>
                        <strong>{i}</strong>:{this.state[i]}
                    </li>
                ))}
            </ul>
        );
    }
}

export default MergeComp;