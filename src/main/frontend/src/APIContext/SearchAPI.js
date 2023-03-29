
import React, { createContext, useEffect } from 'react';

export const StockBasicContext = createContext(null);


export function Basic(symbol, setBasicInfo) {
    const api = `http://localhost:8080/stockf/basic?symbol=${symbol}&metric=all`
    console.log("Search check " + api)
        fetch(api)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setBasicInfo(data)
            })
            .catch(error => console.log(error))
}


