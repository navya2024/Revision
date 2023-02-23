import * as React from 'react';

export default function HookComp1() {
    const [name,setName] = React.useState("Bhavya");
    const [company,setCompany] = React.useState("RKU");

    return(
        <>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <p>{name}</p>
        <input value={company} onChange={(e) => setCompany(e.target.value)}/>
        <p>{company}</p>
        </>
    )
}