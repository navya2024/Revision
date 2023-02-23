import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MyContainerComp from './ContainerComp1';
import FunctComp1 from './FunctComp1';
import HookComp1 from './HookComp1';
import HookComp2 from './HookComp2';
import HookComp3 from './HookComp3';
import HookComp32 from './HookComp32';
import HookComp43 from './HookComp43';
import Hookcomp5 from './HookComp5';
import HookComp6 from './HookComp6';
import './index.css'
import MyClassList from './PropClassList';
import MyCustButton from './PropComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <MyContainerComp/>
  <HookComp1/>
  <HookComp2/>
  <HookComp3/> */}
  {/* <HookComp32/>
  <HookComp43/>
  <Hookcomp5/> */}
  <HookComp6/>
  </>
)

//Pure props
// function render({first,second}) {
//   root.render(
//     <main>
//       <FunctComp1 arg1={first.dis} arg2={first.text}/>
//       <FunctComp1 arg1={second.dis} arg2={second.text}/>
//       <FunctComp1/>
//     </main>
//   )
// }

// render({
//   first: {
//     text : "Button2",
//     dis: true,
//   },
//   second: {
//     text : "Buuton3",
//     dis: false,
//   },

// });

//First Prop
  // <App/>,
// const AppState = {
//   dis : true,
//   text: "Button1",
//   items: ["a","b","c", "d", "e"]
// }

// function render(props)
// {
//   root.render(
//     <main>
//       <MyCustButton dis={props.dis} text={props.text}/>
//       <MyClassList items={props.items}/>
//     </main>
//   )
// }

// render(AppState);
// setTimeout(() => {
//   AppState.dis = true;
//   AppState.text = "New Text"
//   AppState.items.push("Bhavya");
//   render(AppState);
// },4000);