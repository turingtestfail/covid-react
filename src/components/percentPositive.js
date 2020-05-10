import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import moment from 'moment';
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';
import { Multiselect } from 'multiselect-react-dropdown';

const dateFormatter = (item) => {
    var partial = item.toString();
    var datestr = partial.slice(0, 4) + "-" +  partial.slice(4,6)+"-"+partial.slice(6);
    console.log(datestr);
    return moment(datestr).format("MMMM Do");
};

const CustomTooltipContent = props => {
    if (!props.active) {
      return null
    }
    const newPayload = [
      {
        name: 'Total Test Results',
        value: props.payload[0].payload.totalTestResults,
        // you can also add "unit" here if you need it
      },
      {
        name: 'State',
        value: props.payload[0].payload.state,
        // you can also add "unit" here if you need it
      },
      ...props.payload,
    ];
    return <DefaultTooltipContent {...props} payload={newPayload} />;
  };

const Positives = ({ positives,stateAbbrev,options,handler }) => {
    var linesToRender=[];
    var alabama=[];
    var meh = positives.map((report)=>{
        console.log(report.state);
        //report.totalTestResults=report.totalTestResults/statePopulations[report.state];
        var date = report.date;
        var found=false;
        for (var i = 0; i < alabama.length; i++) {
            if(alabama[i].date==date){
                alabama[i][report.state]=report.positive/report.totalTestResults*100;
                found=true;
            }
        }
        if(!found){
            var guh={};
            guh['date']=report.date;
            guh[report.state]=report.positive/report.totalTestResults*100;
            alabama.push(guh);
        }
        
        return report;
    });

console.log(alabama);
  return (
    
    <div>
      <center><h1>Percent Positives</h1></center>
      <LineChart width={2000} height={300} data={alabama}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="date" interval="preserveEnd" tickFormatter={dateFormatter} reversed={true}/>
       <YAxis interval="preserveEnd"/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip labelFormatter={dateFormatter}/>
       <Legend />
       {stateAbbrev.map((cat,i)=>
            <Line type="monotone" key={i} dataKey={cat} connectNulls={false} stroke={'#'+Math.floor(Math.random()*16777215).toString(16)} />
        )} 

      </LineChart>
      <Multiselect
          options={options} // Options to display in the dropdown
          selectedValues={stateAbbrev} // Preselected value to persist in dropdown
          isObject={false}
          showCheckbox={true}
          onSelect={handler}
          onRemove={handler}
        />

    </div>
  )
};

export default Positives;