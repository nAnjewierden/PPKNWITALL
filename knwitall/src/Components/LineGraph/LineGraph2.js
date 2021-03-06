import React, {Component} from 'react'
import {Line, Bar} from 'react-chartjs-2'
import {connect} from 'react-redux'
import { changeGraph2 } from '../../quackquack/reducer'
import './reset.css'
import './LineGraph.css'



class LineGraph2 extends Component{
    constructor(){
        super()
    }
        render(){
    // console.log(this.props)
    // console.log(this.props.arrayofBehDateStrings2)
    // console.log(this.props.arrayOfBehCounts2)
    
    if (this.props.medOrBeh2){
    console.log(this.props, 'this.props')
    return(
    <div className='lineGraph'>
   
        <Line height='110px' className='graph' data={{
            //array of strings, one for each day of last month
            labels: this.props.arrayofBehDateStrings2,
            datasets: [
                {
                    label: 'Number of Incidents',
                    //array of integers, one for each day of the last month, each representing the number of beh incidents that day
                    
                    data: this.props.arrayOfBehCounts2,
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
    console.log(this.props.arrayofMedDateStrings2, 'this.props.arrayofMedDateStrings2') 
    return(
        <div className='lineGraph'>
       
            <Line height='110px' className='graph' data={{
                //array of strings, one for each day of last month
                labels: this.props.arrayofMedDateStrings2,
                datasets: [
                    {
                        label: 'Number of Incidents',
                        //array of integers, one for each day of the last month, each representing the number of beh incidents that day
                        
                        data: this.props.arrayOfMedCounts2,
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
        arrayOfBehCounts2: state.arrayOfBehCounts2,
        arrayofBehDateStrings2: state.arrayofBehDateStrings2,
        arrayOfMedCounts2: state.arrayOfMedCounts2,
        arrayofMedDateStrings2: state.arrayofMedDateStrings2,
        medOrBeh2: state.medOrBeh2
    })
}
export default connect(mapStateToProps)(LineGraph2)

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