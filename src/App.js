import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import SortingVisualizer from './sortingVisualizer';
import { useState } from 'react';

function App() {

  const[isSorting, setIsSorting] = useState(false);

  return (
    <div className="App">
      < Navbar isSorting ={isSorting}  />
      < SortingVisualizer isSorting ={isSorting} setIsSorting={setIsSorting} />
    </div>
  );
}

export default App;
