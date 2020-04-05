import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import moment from 'moment';
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';


const dateFormatter = (item) => moment(item);

const CustomTooltipContent = props => {
    if (!props.active) {
      return null
    }
    const newPayload = [
      {
        name: 'State',
        value: props.payload[0].payload.state,
        // you can also add "unit" here if you need it
      },
      ...props.payload,
    ];
    return <DefaultTooltipContent {...props} payload={newPayload} />;
  };

const Deaths = ({ deaths }) => {

    deaths.map((report)=>{
        console.log(report.state);
        console.log(report.totalTestResults);
        //report.totalTestResults=report.totalTestResults/statePopulations[report.state];
        return report;
    });
//<XAxis dataKey="dateChecked" tickFormatter={dateFormatter} interval="preserveEnd"/>

  return (
    <div>
      <center><h1>Latest State Covid Testing Figures</h1></center>
      <LineChart width={2000} height={300} data={deaths}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="state" interval="preserveEnd"/>
       <YAxis interval="preserveEnd"/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip content={<CustomTooltipContent />} />
       <Legend />
        <Line key='state' dataKey='totalTestResults'/>
      </LineChart>


    </div>
  )
};

export default Deaths;