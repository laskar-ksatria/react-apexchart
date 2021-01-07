import React from 'react';


class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'XYZ MOTORS',
          data: [{
            x: new Date('2018-02-12').getTime(),
            y: 76
          }, {
            x: new Date('2018-02-15').getTime(),
            y: 60
          },
          {
            x: new Date('2018-02-17').getTime(),
            y: 45
          },
          {
            x: new Date('2018-02-25').getTime(),
            y: 90
          },
          {
            x: new Date('2018-02-26').getTime(),
            y: 92
          },
          {
            x: new Date('2018-02-28').getTime(),
            y: 83
          },
          {
            x: new Date('2018-03-01').getTime(),
            y: 120
          },
          {
            x: new Date('2018-03-01').getTime(),
            y: 90
          },
          {
            x: new Date('2018-03-02').getTime(),
            y: 110
          },
          {
            x: new Date('2018-03-05').getTime(),
            y: 130
          },
          {
            x: new Date('2018-03-05').getTime(),
            y: 131
          }
        ]
        }],
        options: {
          chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
          },
          title: {
            text: 'Stock Price Movement',
            align: 'left'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100]
            },
          },
          yaxis: {
            labels: {
              formatter: function (val) {
                return (val).toFixed(2);
              },
            },
            title: {
              text: 'index'
            },
          },
          xaxis: {
            type: 'datetime',
          },
          tooltip: {
            shared: false,
            y: {
              formatter: function (val) {
                return (val).toFixed(2)
              }
            }
          }
        },
      };
    }

  

    render() {
      return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div id="chart" style={{width: '70%'}}>
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
        </div>  
    )
    }
}
export default ApexChart