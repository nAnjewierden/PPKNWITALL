import React, { Component } from 'react'
import './reset.css'
import './Chart.css'
import { connect } from 'react-redux'
import { getBehIncidents } from '../../quackquack/reducer'
import Modal from '../behIncidentModal/behIncidentModal'


class Chart extends Component {
    constructor() {
        super()
        this.state = {
            modalOn: false,
            modalID: 0
        }
    }
    handleModalOn(value){
        console.log(value)
        this.setState({
            modalOn: true,
            modalID: value
        })
    }
    handleModalOff(){
        this.setState({
            modalOn: false,
            modalID: 0
        })
    }
    componentDidMount() {
        this.props.dispatch(getBehIncidents())
    }

    render() {

        let behIncidents = this.props.arrayOfBehavioralIncidents.map((ele) => {

            return (
                <div className='incident' onClick={() => this.handleModalOn(ele.id)} key={ele.id}>
                    <div>Name: {ele.client_name}</div>
                    <div>Behavior: {ele.behavior_exhibited}</div>
                    <div>Date: {ele.incident_date}</div>
                </div>
            )
        })
        console.log(this.state)
        return (
            <div className='full-page'>
                <div className={`incidentModal  ${this.state.modalOn ? '' : 'hideOn'}`}><Modal modalID={this.state.modalID}/>
                <button onClick={() => this.handleModalOff()}>Close</button>
                </div>
                <div className='incident-column'>{behIncidents}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        arrayOfBehavioralIncidents: state.arrayOfBehavioralIncidents
    })
}

export default connect(mapStateToProps)(Chart)