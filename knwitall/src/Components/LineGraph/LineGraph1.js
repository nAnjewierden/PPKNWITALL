import React, {Component} from 'react'
import {Line, Bar} from 'react-chartjs-2'
import {connect} from 'react-redux'
import { changeGraph1 } from '../../quackquack/reducer'
import './reset.css'
import './LineGraph.css'



class LineGraph1 extends Component{
    constructor(){
        super()
    }
        render(){
    console.log(this.props)
    console.log(this.props.arrayofBehDateStrings1)
    console.log(this.props.arrayOfBehCounts1)
    
    if (this.props.medOrBeh1){
    
    return(
    <div className='lineGraph'>
   
        <Line  className='graph' data={{
            //array of strings, one for each day of last month
            labels: this.props.arrayofBehDateStrings1,
            datasets: [
                {
                    label: 'Number of Incidents',
                    //array of integers, one for each day of the last month, each representing the number of beh incidents that day
                    
                    data: this.props.arrayOfBehCounts1,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        ' rgb(67, 13, 138)'
                    ],
                    borderWidth: 1
                }]
                    
                }
            
            
            }/>
    </div>)
}
else {
    return(
        <div className='lineGraph'>
       
            <Line  className='graph' data={{
                //array of strings, one for each day of last month
                labels: this.props.arrayofMedDateStrings1,
                datasets: [
                    {
                        label: 'Number of Incidents',
                        //array of integers, one for each day of the last month, each representing the number of beh incidents that day
                        
                        data: this.props.arrayOfMedCounts1,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            ' rgb(67, 13, 138)'
                        ],
                        borderWidth: 1
                    }]
                        
                    }
                
                
                }/>
        </div>)
}}} 
function mapStateToProps(state) {
    return ({
        arrayOfBehCounts1: state.arrayOfBehCounts1,
        arrayofBehDateStrings1: state.arrayofBehDateStrings1,
        arrayOfMedCounts1: state.arrayOfMedCounts1,
        arrayofMedDateStrings1: state.arrayofMedDateStrings1,
        medOrBeh1: state.medOrBeh1
    })
}
export default connect(mapStateToProps)(LineGraph1)

// var data = {
// 	labels: ["January", "February", "March", "April", "May", "June", "July"],
// 	datasets: [
// 		{
// 			label: "My First dataset",
// 			fillColor: "rgba(220,220,220,0.2)",
// 			strokeColor: "rgba(220,220,220,1)",
// 			pointColor: "rgba(220,220,220,1)",
// 			pointStrokeColor: "#fff",
// 			pointHighlightFill: "#fff",
// 			pointHighlightStroke: "rgba(220,220,220,1)",
// 			data: [65, 59, 80, 81, 56, 55, 40]
// 		},
// 		{
// 			label: "My Second dataset",
// 			fillColor: "rgba(151,187,205,0.2)",
// 			strokeColor: "rgba(151,187,205,1)",
// 			pointColor: "rgba(151,187,205,1)",
// 			pointStrokeColor: "#fff",
// 			pointHighlightFill: "#fff",
// 			pointHighlightStroke: "rgba(151,187,205,1)",
// 			data: [28, 48, 40, 19, 86, 27, 90]
// 		}
// 	]
// };