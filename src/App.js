
import './App.css';
import { useState } from 'react';

function App() {
  let time=new Date().toLocaleTimeString();
  const[ctime,setCtime]=useState(time);

  const UpdateTime=()=>{ 
    let time=new Date().toLocaleTimeString();
    setCtime(time);
   };


  setInterval(UpdateTime,1000)
  return (
    <div className="App">
      {/* <h1>Digital Clock</h1> */}
      <h1>{ctime}</h1>
    </div>
  );
}

export default App;
