import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

function HorizontalBarChart(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10) {
    const data = {
        labels: [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10],
        datasets: [
            {
                label: 'Total Cases',
                data: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10],
                borderColor: [
                    'rgba(42, 210, 243, 0.5)',
                    'rgba(42, 210, 243,, 0.5)',
                    'rgba(42, 210, 243, 0.5)',
                    'rgba(42, 210, 243, 0.5)',
                    'rgba(42, 210, 243, 0.5)',
                    'rgba(42, 210, 243, 0.5)',
                    'rgba(42, 210, 243, 0.5)',
                    'rgba(42, 210, 243, 0.5)',
                    'rgba(42, 210, 243, 0.5)',
                    'rgba(42, 210, 243, 0.5)'
                ],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ]
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Top 10 Countries Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 13,
                        stepSize: 1
                    }
                }
            ]
        } 
    }

    return <HorizontalBar data={data} options={options}/>
} 

export default HorizontalBarChart
