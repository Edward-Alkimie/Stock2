import React, { useContext, useState, useRef, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { StockBasicContext } from '../APIContext/SearchAPI';

import { apple } from '../APIContext/Apple'

const userSetting = [
  {
    line1: "annual.totalDebtToTotalAsset",
    line2: "annual.totalDebtToTotalCapital",
  }

]


export const SimpleChart = () => {
  const { basicInfo } = useContext(StockBasicContext)
  // const { basicInfo } = apple
  // let fcfPerShareTTM = useRef(null)
  const [fcfPerShareTTM, setFcfPerShareTTM] = useState(null)
  const totalDebtToTotalAsset = basicInfo.series.annual.totalDebtToTotalAsset
  const totalDebtToTotalCapital = basicInfo.series.annual.totalDebtToTotalCapital

  const netMargin = basicInfo.series.annual.netMargin
  const grossMargin = basicInfo.series.annual.grossMargin


  const salesPerShare = basicInfo.series.quarterly.salesPerShare


  // if(basicInfo && basicInfo.series && basicInfo.series.quarterly && basicInfo.series.quarterly.fcfPerShareTTM) {
  //   fcfPerShareTTM = basicInfo.series.quarterly.fcfPerShareTTM} 

  useEffect(() => {
    if (basicInfo && basicInfo.series && basicInfo.series.quarterly && basicInfo.series.quarterly.fcfPerShareTTM) {
      setFcfPerShareTTM(basicInfo.series.quarterly.fcfPerShareTTM)
    }
  })


  // console.log(typeof(totalDebtToTotalAsset))



  return (
    <>
      <LineChart
        width={1200}
        height={600}
        margin={{
          top: 5,
          right: 30,
          left: 30,
          bottom: 5,
        }}>
        <Line name="totalDebtToTotalCapital" xAxisId={"totalDebtToTotalCapital"} type="monotone" data={totalDebtToTotalCapital} dataKey="v" stroke="#800080" activeDot={{ r: 8 }} />
        <Line name="totalDebtToTotalAsset" xAxisId={"totalDebtToTotalAsset"} type="monotone" data={totalDebtToTotalAsset} dataKey="v" stroke="#8884d8" />

        <CartesianGrid stroke="#ccc" />
        <XAxis xAxisId={"totalDebtToTotalAsset"} data={totalDebtToTotalCapital} dataKey="period" reversed="true" />
        <XAxis xAxisId={"totalDebtToTotalCapital"} data={totalDebtToTotalAsset} dataKey="period" reversed="true" hide={true} />
        <YAxis orientation='right' />
        <Tooltip />
        <Legend />
      </LineChart>

      <LineChart

        width={1200}
        height={600}
        margin={{
          top: 5,
          right: 30,
          left: 30,
          bottom: 5,
        }}>
        <Line name="netMargin" xAxisId={"netMargin"} type="monotone" data={netMargin} dataKey="v" stroke="#800080" activeDot={{ r: 8 }} />
        <Line name="grossMargin" xAxisId={"grossMargin"} type="monotone" data={grossMargin} dataKey="v" stroke="#8884d8" />


        <CartesianGrid stroke="#ccc" />
        <XAxis xAxisId={"netMargin"} data={netMargin} dataKey="period" reversed="true" />
        <XAxis xAxisId={"grossMargin"} data={grossMargin} dataKey="period" reversed="true" hide="true" />
        <YAxis orientation='right' />
        <Tooltip />
        <Legend />
      </LineChart>

      {<LineChart
        width={1200}
        height={600}
        margin={{
          top: 5,
          right: 30,
          left: 30,
          bottom: 5,
        }}>
        {/* <Line name = "fcfPerShareTTM" xAxisId= {"fcfPerShareTTM"} type="monotone" data= {fcfPerShareTTM} dataKey="v" stroke="#800080" activeDot={{r: 8}} /> */}
        <Line name="salesPerShare" xAxisId="salesPerShare" type="monotone" data={salesPerShare} dataKey="v" stroke="#8884d8" activeDot={{ r: 8 }} />

        {/* <XAxis xAxisId ={"fcfPerShareTTM"} dataKey= "period" reversed="true" hide ="true"/> */}
        <XAxis xAxisId="salesPerShare" dataKey="period" reversed="true" />

        <YAxis orientation='right' />
        <Tooltip />
        <Legend />
      </LineChart>}

    </>
  );

}

