import React, {Component} from 'react'
import {Line, Bar} from 'react-chartjs-2'
import {connect} from 'react-redux'


class LineGraph extends Component{
    constructor(){
        super()
    }
        render(){
    console.log(this.props)
    return(
    <div className='lineGraph'>
        <Bar  data={{
            //array of strings, one for each day of last month
            lables: this.props.arrayofBehDateStrings,
            datasets: [
                {
                    label: 'Number of Incidents',
                    //array of integers, one for each day of the last month, each representing the number of beh incidents that day
                    data: this.props.arrayOfBehCounts
                }
            ]
            }}/>
    </div>)
}} 
function mapStateToProps(state) {
    return ({
        arrayOfBehCounts: state.arrayOfBehCounts,
        arrayofBehDateStrings: state.arrayofBehDateStrings
    })
}
export default connect(mapStateToProps)(LineGraph)