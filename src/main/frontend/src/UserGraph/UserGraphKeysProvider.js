import React, { createContext, useEffect } from 'react';



export function userGraphs(setUserGraph) {
    const api = `http://localhost:8080/graph`
    console.log("Search check " + api)
    fetch(api)
        .then(response => response.json())
        .then((data) => {
            setUserGraph(data)
        })
        .catch(error => console.log(error))
}

