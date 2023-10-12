import './App.css';

const tahoe_peaks = [
  {name: "Freel", elevation: "10331"},
  {name: "Monment", elevation: "10341"},
  {name: "Pyradmi", elevation: "10361"},
  {name: "Freeler", elevation: "10531"},
]

function List({data, renderItem, renderEmpty}){
  return !data.length ? renderEmpty : <ul>
    {data.map((item)=> (
      <li key={item.name}>{renderItem(item)}</li>
    ))}
  </ul>
}

function App() {
  return(
    <div>
      <List data={tahoe_peaks} renderEmpty={<p>The list is empty</p>} renderItem={item => <>{item.name}-{item.elevation}</> }/>
    </div>
  );
}

export default App;
