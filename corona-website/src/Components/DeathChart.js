import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

function DeathBarChart(f1, f2, f3,f4, f5, f6, f7, f8, f9, f10, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10) {
    const data = {
        labels: [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10],
        datasets: [
            {
                label: 'Total Cases',
                data: [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10],
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
            text: 'Bottom 10 Countries'
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

export default DeathBarChart
