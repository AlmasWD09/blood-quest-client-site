import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const AreaChart = () => {
    const [state, setState] = useState({
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          options: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },

            responsive: [
                {
                    // Small devices (≤480px)
                    breakpoint: 400,
                    options: {
                        chart: {
                            width: 300,
                            height: 300,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
                {
                    // Mobile devices (481px - 768px)
                    breakpoint: 768,
                    options: {
                        chart: {
                            width: 300,
                            height: 350,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
                {
                    // Large devices (≥769px)
                    breakpoint: 1024,
                    options: {
                        chart: {
                            width: 400,
                            height: 300,
                        },
                        legend: {
                            position: 'right',
                        },
                    },
                },
            ],

          },
    })
    console.log(setState);
    return (
       <>
       <div>
            <ReactApexChart 
            options={state.options} 
            series={state.series} 
            type="area" 
            width={600}
            height={350} 
            />
            </div>
       </>
    );
};

export default AreaChart;

