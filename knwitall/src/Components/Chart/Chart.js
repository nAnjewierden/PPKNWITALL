import React, { Component } from 'react'
import './reset.css'
import './Chart.css'
import LineGraph1 from '../LineGraph/LineGraph1'
import LineGraph2 from '../LineGraph/LineGraph2'
import { connect } from 'react-redux'
import { getMedIncidents,
         getBehIncidents,
         getBehIncidentsGraph1, 
         getBehIncidentsGraph2,
         getMedIncidentsGraph1, 
         getMedIncidentsGraph2, 
         changeGraph1, 
         changeGraph2,
         medOrBehIncidentColumn
        } from '../../quackquack/reducer'
import Modal from '../behIncidentModal/behIncidentModal'


class Chart extends Component {
    constructor() {
        super()
        this.state = {
            modalOn: false,
            modalID: 0
        }
    }
    componentWillMount()
    {

    
    this.props.dispatch(getBehIncidentsGraph1())
  
    this.props.dispatch(getBehIncidentsGraph2())
    
    this.props.dispatch(getMedIncidentsGraph1())
  
    this.props.dispatch(getMedIncidentsGraph2())
    }
    handleModalOn(value){
        
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
        this.props.dispatch(getMedIncidents())
    }

    render() {

        let behIncidents = this.props.arrayOfBehavioralIncidents.map((ele) => {
            let newDate1 = new Date(ele.incident_date)
          
            return (
                <div className='incident' onClick={() => this.handleModalOn(ele.id)} key={ele.id}>
                    <div>Name: {ele.client_name}</div>
                    <div>Behavior: {ele.behavior_exhibited}</div>
                    <div>Date: {newDate1.toDateString()}</div>
                </div>
            )
        })

        let medIncidents = this.props.arrayOfMedicalIncidents.map((ele) => {
            let newDate2 = new Date(ele.incident_date)
        
            return (
                <div className='incident' onClick={() => this.handleModalOn(ele.id)} key={ele.id}>
                    <div>Name: {ele.client_name}</div>
                    <div>Incident Type: {ele.incident_type}</div>
                    <div>Date: {newDate2.toDateString()}</div>
                </div>
            )
        })


        return (
            <div className='full-page'>
                <div className={`incidentModal  ${this.state.modalOn ? '' : 'hideOn'}`}><Modal modalID={this.state.modalID}/>
                <button onClick={() => this.handleModalOff()}>Close</button>
                </div>
                <div className='incident-column'>
                <button onClick={ele => this.props.dispatch(medOrBehIncidentColumn())}>Change</button>
                {this.props.medOrBehIncidentColumn ? behIncidents : medIncidents}
                </div>
                <div className='graphColumn'>
                <button onClick={() => this.props.dispatch(changeGraph1())}>Change</button>
                <LineGraph1/>
                Client: 
            <select onChange={this.props.medOrBeh1 ? 
            
            (ele) => this.props.dispatch(getBehIncidentsGraph1(ele.target.value))
            :
            (ele) => this.props.dispatch(getMedIncidentsGraph1(ele.target.value))
            }>
                
                <option value="Client1">Client 1</option>
                <option value="Client2">Client 2</option>
                <option value="Client3">Client 3</option>
                <option value="Client4">Client 4</option>
                <option value="Client5">Client 5</option>
                </select>
                <button onClick={() => this.props.dispatch(changeGraph2())}>Change</button>
                <LineGraph2/>
                Client: 
                <select onChange={this.props.medOrBeh2 ? 
            
            (ele) => this.props.dispatch(getBehIncidentsGraph2(ele.target.value))
            :
            (ele) => this.props.dispatch(getMedIncidentsGraph2(ele.target.value))
            }>
                
                <option value="Client1">Client 1</option>
                <option value="Client2">Client 2</option>
                <option value="Client3">Client 3</option>
                <option value="Client4">Client 4</option>
                <option value="Client5">Client 5</option>
                </select>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        arrayOfBehavioralIncidents: state.arrayOfBehavioralIncidents,
        arrayOfMedicalIncidents: state.arrayOfMedicalIncidents,
        medOrBeh1: state.medOrBeh1,
        medOrBeh2: state.medOrBeh2,
        medOrBehIncidentColumn: state.medOrBehIncidentColumn
    })
}

export default connect(mapStateToProps)(Chart)