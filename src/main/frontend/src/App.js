import SearchBar from './Search/SearchBar'
import './App.css';

import {userGraphs} from './UserGraph/UserGraphKeysProvider';
import {UserGraphContext} from './UserGraph/UserGraphContext'
import React, {useEffect, useState} from 'react';
import { Charts } from './Charts/chart'
import {SearchContext} from "./Search/SearchContext";

function App() {
  const [basicInfo, setBasicInfo] = useState(null);
  const [userGraph, setUserGraph] = useState(null);

  useEffect(() =>{
      userGraphs(setUserGraph)
  },[])


  return (
    <div className="App">
      <>
      hello1</>
       <SearchContext.Provider value={{ basicInfo, setBasicInfo }}>
         <UserGraphContext.Provider value={{ userGraph, setUserGraph }}>
          <SearchBar />
             {basicInfo && <Charts />}

         </UserGraphContext.Provider>
       </SearchContext.Provider>
    </div>
  );
}

export default App;
