import * as React from 'react';

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id:1, name:"RKU"})
        },3000);
    });

}

function HookComp2() {
    const [id,setId]= React.useState("loading.......");
    const [name, setName] = React.useState("loading.........");

    React.useEffect(() => {
        fetchUser().then((user) => {
            setId(user.id);
            setName(user.name);
        });
    });

    return (
        <>
        <p>{id}</p>
        <p>{name}</p>
        </>
    )
}

export default HookComp2;