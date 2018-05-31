import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'


export default function LineGraph(){
    
    return(<div className='lineGraph'>
        <Line  data={{
            //array of strings, one for each day of last month
            lables: [],
            datasets: [
                {
                    label: 'Number of Incidents',
                    //array of integers, one for each day of the last month, each representing the number of beh incidents that day
                    data: []
                }
            ]
            }}/>
    </div>)
} 