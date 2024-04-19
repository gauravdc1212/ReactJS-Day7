import './App.css'
import Languages from './component/Languages';
import Message from './component/Message';
import Counter from './component/Counter';
import ChangeName from './component/ChangeName';
import React, { useState } from 'react'
import ControlledName from './component/ControlledName';
import ControlledInfo from './component/ControlledInfo';
import MyCounter from './component/MyCounter';
import MyCard from './component/MyCard';
import { Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Navbar from './component/Navbar';
import Errorpage from './component/Errorpage';
import About from './component/About';
import Product from './component/Product';
import Product1 from './component/Product1';
import Product2 from './component/Product2';
import Product3 from './component/Product3';
import Student from './component/Student';


function App() {
  // Lifting of State - when state remove from child component and manage by parent component 
  //Central management control tool = Redux
  // const [name, setName] = useState("JAI SHREE RAM");
  // const [name, setName] = useState("KIET");


  return (
    <>
      {/* <Message/>
      <Languages/> */}
      {/* <ChangeName name={name} onUpdate={()=>setName("HAR HAR MAHADEV")}/> */}
      {/* <ControlledName name={name} onUpdate={()=>setName("MCA")}/> */}
      {/* <ControlledInfo/> */}
      {/* <Counter/> */}
      {/* <MyCounter/> */}
      {/* <MyCard/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/card' element={<MyCard/>}/>
        <Route path='/counter' element={<MyCounter/>}/>
        <Route path='/lang' element={<Languages/>}/>
        <Route path='/about' element={<About/>}/>
       
        <Route path='/student' element={<Student/>}>
        <Route path='/student/:name' element={<Student/>}/>
        </Route>


        <Route path='/product' element={<Product/>}>
        <Route path='product1' element={<Product1/>}/>
        <Route path='product2' element={<Product2/>}/>
        <Route path='product3' element={<Product3/>}/>
        </Route>

        <Route path='/*' element={<Errorpage/>}/>

      
      </Routes>
    </>
  );
}

export default App
