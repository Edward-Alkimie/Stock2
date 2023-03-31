import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { UserGraphContext } from '../UserGraph/UserGraphContext';
import {SearchContext} from "../Search/SearchContext";

export const Charts = ({ myData }) => {
    const {basicInfo} = useContext(SearchContext)
    const {userGraph} = useContext(UserGraphContext)
    let xAxisLoopFlag = false;
    const stockData = basicInfo.series;

    // data check
    // console.log("this is stock data before render" + JSON.stringify(stockData['annual']['eps']))
    // console.log("this is graph data before render " + JSON.stringify(userGraph))

    return (
        <div>
            {userGraph.map((item, index) => (
                <LineChart
                    width={1200}
                    height={600}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 30,
                        bottom: 5,
                    }}>
                    <CartesianGrid stroke="#ccc" />
                    <YAxis orientation='right' />
                    <Tooltip />
                    {xAxisLoopFlag = false}
                    {item.map((item2, index2) => (
                        <>
                            <Line name={item2.value} xAxisId={item2.value} type="monotone" data={stockData[item2.timeFrame][item2.value]} dataKey="v" stroke="#800080" activeDot={{ r: 8 }} />
                            <XAxis xAxisId={item2.value} data={stockData[item2.timeFrame][item2.value]} dataKey="period" reversed="true" hide={xAxisLoopFlag} />
                            {xAxisLoopFlag = true}
                        </>
                    ))}
                    <Legend />
                </LineChart>
            )
            )}
        </div>


    )
}


