import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { StockBasicContext } from '../APIContext/SearchAPI';
import { apple } from '../APIContext/Apple';



export const Charts = ({ myData }) => {
    const { basicInfo } = useContext(StockBasicContext)

    // in the future it will in a different file
    // const userGraphSetting = {
    //     chartSetting: [
    //         {
    //             graph: [
    //                 {
    //                     timeFrame: "annual",
    //                     lineValue: "totalDebtToTotalAsset"
    //                 },
    //                 {
    //                     timeFrame: "annual",
    //                     lineValue: "totalDebtToTotalCapital"
    //                 }
    //             ]
    //         },
    //         {
    //             graph: [
    //                 {
    //                     timeFrame: "annual",
    //                     lineValue: "eps"
    //                 },
    //                 {
    //                     timeFrame: "annual",
    //                     lineValue: "ebitPerShare"
    //                 }
    //             ]
    //         }
    //     ]
    // }

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
    const stockData = apple['series']
    //
    return (
        <div>
            {userGraphSetting.map((item, index) => (
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
                            <Line name={item2.lineValue} xAxisId={item2.lineValue} type="monotone" data={stockData[item2.timeFrame][item2.lineValue]} dataKey="v" stroke="#800080" activeDot={{ r: 8 }} />
                            <XAxis xAxisId={item2.lineValue} data={stockData[item2.timeFrame][item2]} dataKey="period" reversed="true" hide={xAxisLoopFlag} />
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


