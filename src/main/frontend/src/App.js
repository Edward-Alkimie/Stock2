import SearchBar from './SearchBar/SearchBar'
// import { SimpleChart } from './Charts/SimpleChart';
import './App.css';
import {Basic, StockBasicContext} from './APIContext/SearchAPI';
import {UserGraphKeysContext, userGraphs} from './UserGraphKeys/UserGraphKeysProvider';
import {useEffect, useState} from 'react';
import { Charts } from './Charts/chart'

function App() {
  const [basicInfo, setBasicInfo] = useState(null);
  const [userGraph, setUserGraph] = useState(null);

  useEffect(() =>{
      // Basic("aapl", setBasicInfo)
      userGraphs(setUserGraph)
  },[])
    // userGraphs(setUserGraph)
  return (
    <div className="App">
      <>
      hello1</>
       <StockBasicContext.Provider value={{ basicInfo, setBasicInfo }}>
         <UserGraphKeysContext.Provider value={{ userGraph, setUserGraph }}>
          {/* <div>hello</div> */}
          <SearchBar />
             {basicInfo && <Charts />}
          {/* {basicInfo && <SimpleChart/>} */}
         </UserGraphKeysContext.Provider>
       </StockBasicContext.Provider>
    </div>
  );
}

export default App;
