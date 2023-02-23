import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyCompo from './FirstComp'
import MyComp2 from './SecondComp'
import MergeComp from './MergeState'
import FunctComp1 from './FunctComp1'
import MyCustButton from './PropComp'
import MyClassList from './PropClassList'

function App() {

  return (
    <div >
      <MyCompo/>
      <MyComp2/>
      <MergeComp/>
      <FunctComp1/>
      {/* <MyCustButton dis={false} text={"hello"}/>
      <MyClassList items={["a","b","c","d"]}/> */}
    </div>
  )
}

export default App;
