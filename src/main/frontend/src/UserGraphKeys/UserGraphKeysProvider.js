import React, { createContext, useEffect } from 'react';

export const UserGraphKeysContext = createContext(null);


export function userGraphs(setUserGraph) {
    const api = `http://localhost:8080/graph`
    console.log("Search check " + api)
    fetch(api)
        .then(response => response.json())
        .then((data) => {
            // console.log("this is function for UserGraph " + JSON.stringify(data))
            setUserGraph(data)
        })
        .catch(error => console.log(error))
}

