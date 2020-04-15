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

const Positives = ({ positives }) => {
    var linesToRender=[];
    var alabama=[];
    var meh = positives.map((report)=>{
        console.log(report.state);
        //report.totalTestResults=report.totalTestResults/statePopulations[report.state];
        var date = report.date;
        var found=false;
        for (var i = 0; i < alabama.length; i++) {
            if(alabama[i].date==date){
                alabama[i][report.state]=report.totalTestResults;
                found=true;
            }
        }
        if(!found){
            var guh={};
            guh['date']=report.date;
            guh[report.state]=report.totalTestResults;
            alabama.push(guh);
        }
        
        return report;
    });
    const categories = ["AL", "MD"];
    //needed format: {date:023423, MD:23423, VA:2353, DC:2345234}

//<XAxis dataKey="dateChecked" tickFormatter={dateFormatter} interval="preserveEnd"/>
    
//        linesToRender.push(<Line key='state' dataKey='totalTestResults'/>);
//{categories.map(cat =>
  //  [
    //  <Line type="monotone" key='hash' dataKey={cat} connectNulls={true} />,
    //]
  //)} 

  //{categories.map(cat =>
  //  [
   //     <Line type="monotone" key='hash' dataKey={cat} connectNulls={true} />,
  //  ]
//)} 
console.log(alabama);
  return (
    <div>
      <center><h1>Percent Positives</h1></center>
      <LineChart width={2000} height={300} data={alabama}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="date" interval="preserveEnd"/>
       <YAxis interval="preserveEnd"/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip content={<CustomTooltipContent />} />
       <Legend />
       <Line type="monotone"  dataKey='MD' connectNulls={true} />
       <Line type="monotone" dataKey='VA' connectNulls={true}/>

      </LineChart>


    </div>
  )
};

export default Positives;