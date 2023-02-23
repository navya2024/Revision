import * as React from 'react';
import {Promise} from 'bluebird';
Promise.config({cancellation:true});

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id:1, name:"RKU"})
        },3000);
    });

}

function HookComp3() {
    const [id,setId]= React.useState("loading.......");
    const [name, setName] = React.useState("loading.........");

    React.useEffect(() => {
       const Promise =  fetchUser().then((user) => {
            setId(user.id);
            setName(user.name);
        });
        return ( () => {
            Promise.cancel();
        }
        );
    });

    return (
        <>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        </>
    )

    
}

export default HookComp3;