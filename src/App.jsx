import './App.css'
import Languages from './component/Languages';
import Message from './component/Message';
import Counter from './component/Counter';
import ChangeName from './component/ChangeName';
import React, { useState } from 'react'
import ControlledName from './component/ControlledName';
import ControlledInfo from './component/ControlledInfo';


function App() {
  // Lifting of State
  // const [name, setName] = useState("JAI SHREE RAM");
  const [name, setName] = useState("KIET");


  return (
    <>
      {/* <Message/>
      <Languages/> */}
      <Counter/>
      {/* <ChangeName name={name} onUpdate={()=>setName("HAR HAR MAHADEV")}/> */}
      {/* <ControlledName name={name} onUpdate={()=>setName("MCA")}/> */}
      {/* <ControlledInfo/> */}
    </>
  );
}

export default App
