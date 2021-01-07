import React from 'react';
import ReactApexChart from "react-apexcharts";
import { chartState } from '../stores/ChartData';
import { useRecoilValue} from 'recoil';
import { STATE_HISTORY } from '../stores';

function ApexChart() {

    const [series, setSeries] = React.useState(chartState.series);
    
    let myHistory = useRecoilValue(STATE_HISTORY);

    const changeSeries = () => {
        console.log(myHistory);
        if (myHistory.length > 1) {
            setSeries([{...series[0], data: myHistory}]);
        }
    };

    React.useEffect(changeSeries, [myHistory]);
    
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div id="chart-timeline" style={{width: '60%'}}>
                <ReactApexChart options={chartState.options} series={series} type="area" height={350} />
            </div>
        </div>  
    )
};

export default ApexChart;