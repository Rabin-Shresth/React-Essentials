// hooks

import './App.css';
import { useRef } from 'react';

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();
  // preventing the page from refreshing
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title},${color}`);
    txtTitle.current.value="";
    hexColor.current.value=""; 
  };
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input ref={txtTitle}  type='text' placeholder='color name'/>
        <input ref={hexColor} type='color'/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
