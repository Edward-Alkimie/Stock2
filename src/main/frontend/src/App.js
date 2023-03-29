import SearchBar from './SearchBar/SearchBar'
import { SimpleChart } from './Charts/SimpleChart';
import './App.css';
import { StockBasicContext } from './APIContext/SearchAPI';
import {useState} from 'react';
import {Charts} from './Charts/chart'

function App() {
  const [basicInfo, setBasicInfo] = useState(null);
  return (
    <div className="App">
      <StockBasicContext.Provider value = {{basicInfo, setBasicInfo}}>
      <SearchBar/>

      <Charts/>

      {/* {basicInfo && <SimpleChart/>} */}
      </StockBasicContext.Provider>
    </div>
  );
}

export default App;
