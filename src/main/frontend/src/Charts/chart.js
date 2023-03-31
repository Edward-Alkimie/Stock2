import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { StockBasicContext } from '../APIContext/SearchAPI';
import { UserGraphKeysContext } from '../UserGraphKeys/UserGraphKeysProvider';
import {userGraphs} from "../UserGraphKeys/UserGraphKeysProvider";


export const Charts = ({ myData }) => {
    const {basicInfo} = useContext(StockBasicContext)
    const {userGraph} = useContext(UserGraphKeysContext)



    const userGraphSetting = [
        [
            {
                timeFrame: "annual",
                lineValue: "totalDebtToTotalAsset"
            },
            {
                timeFrame: "annual",
                lineValue: "totalDebtToTotalCapital"
            }
        ],
        [
            {
                timeFrame: "annual",
                lineValue: "eps"
            },
            {
                timeFrame: "annual",
                lineValue: "ebitPerShare"
            }
        ]
    ]

    let xAxisLoopFlag = false;
    // console.log("this is basic info before render" + JSON.stringify(basicInfo.series.annual))
    // console.log("this is userGraph before render" + JSON.stringify(userGraph))

    const stockData = basicInfo.series;
    console.log("this is stock data before render" + JSON.stringify(stockData['annual']['eps']))
    console.log("this is graph data before render " + JSON.stringify(userGraph))




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


