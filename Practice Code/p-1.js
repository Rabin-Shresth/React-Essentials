import logo from './logo.svg';
import './App.css';
// import { useReducer } from 'react';
// import { useState, useEffect } from 'react';


// const [city1,city2]=[
//   'pokhara',
//   'chitwan',
//   'damauli'
// ]

// console.log(city1);
// console.log(city2);  // destructuring


// calling the key

function App() {
  // const [emotion, setEmotion]=useState("happy");
  
  // useEffect(()=>{
  //   console.log(`It's ${emotion} right now`);
  // },[emotion]);
  const [checked, setChecked]= useReducer((checked) => !checked,false)
  return (
    <div className="App">
      {/* <h1>Hello from {library}</h1> */}
      {/* <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        sad
      </button>
      <button onClick={() => setEmotion("rocking")}>
        rocking
      </button> */}
      <input type='checkbox' value={checked} onChange={setChecked}/>
      <label>
        {checked ? "checked":"not checked"}
      </label>

    </div>
  );
}

export default App;
