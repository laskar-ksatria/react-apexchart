export  const chartState = {
    series: [{
      name: 'Value',
      data: [

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
      }
    },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
      },
      colors: ['blue'],
      title: {
        text: 'Index Stock ',
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
          text: 'Price'
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeFormatter: {
            year: 'yyyy',
            month: 'MMM \'yy',
            day: 'dd MMM',
            hour: 'HH:mm'
          }
        }
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

// export  const chartState = {
//   series: [{
//     name: 'Value',
//     data: [
//       {
//           x: new Date('2018-02-03').getTime(),
//           y: 0
//         },{
//       x: new Date('2018-02-12').getTime(),
//       y: 76
//     }, {
//       x: new Date('2018-02-15').getTime(),
//       y: 60
//     },
//     {
//       x: new Date('2018-02-17').getTime(),
//       y: 45
//     },
//     {
//       x: new Date('2018-02-25').getTime(),
//       y: 90
//     },
//     {
//       x: new Date('2018-02-26').getTime(),
//       y: 92
//     },
//     {
//       x: new Date('2018-02-28').getTime(),
//       y: 83
//     },
//     {
//       x: new Date('2018-03-01').getTime(),
//       y: 120
//     },
//     {
//       x: new Date('2018-03-01').getTime(),
//       y: 90
//     },
//     {
//       x: new Date('2018-03-02').getTime(),
//       y: 110
//     },
//     {
//       x: new Date('2018-03-05').getTime(),
//       y: 130
//     },
//     {
//       x: new Date('2018-03-05').getTime(),
//       y: 131
//     },
//   ]
//   }],
//   options: {
//     chart: {
//       type: 'area',
//       stacked: false,
//       height: 350,
//       zoom: {
//         type: 'x',
//         enabled: true,
//         autoScaleYaxis: true
//       },
//       toolbar: {
//         autoSelected: 'zoom'
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     markers: {
//       size: 0,
//     },
//     colors: ['blue'],
//     title: {
//       text: 'Index Stock ',
//       align: 'left'
//     },
//     fill: {
//       type: 'gradient',
//       gradient: {
//         shadeIntensity: 1,
//         inverseColors: false,
//         opacityFrom: 0.5,
//         opacityTo: 0,
//         stops: [0, 90, 100]
//       },
//     },
//     yaxis: {
//       labels: {
//         formatter: function (val) {
//           return (val).toFixed(2);
//         },
//       },
//       title: {
//         text: 'Price'
//       },
//     },
//     xaxis: {
//       type: 'datetime',
//     },
//     tooltip: {
//       shared: false,
//       y: {
//         formatter: function (val) {
//           return (val).toFixed(2)
//         }
//       }
//     }
//   },
// };