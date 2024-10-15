import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import PropTypes from 'prop-types';

const DonutChart = ({ totalCount }) => {
    const { total_user, total_funding_price, total_blood_donation_request } = totalCount || {}
    const [state, setState] = useState({
        series: [total_user, total_funding_price, total_blood_donation_request],
        options: {
            chart: {
                type: 'donut',
            },
            responsive: [
                {
                    // Small devices
                    breakpoint: 400,
                    options: {
                        chart: {
                            width: 300,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
                {
                    // Medium devices
                    breakpoint: 768,
                    options: {
                        chart: {
                            width: 400,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
                {
                    // Large devices
                    breakpoint: 1024,
                    options: {
                        chart: {
                            width: 500,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        },
    });
    console.log(setState);
    return (
        <div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="donut"
                width={500}
                height={300}
            />
        </div>
    );
};

// props-type validation
DonutChart.propTypes = {
    totalCount: PropTypes.object,
};
export default DonutChart;
