import React from 'react'
import {connect} from 'react-redux'
import {deleteBehReport, 
        makeEditable,
        changeClientNameB,
        changeDateB,
        changeDurationB,
        changeBehaviorExhibitedB,
        changeAntecedentB,
        changeDescriptionOfIncidentB,
        changeActionTakenB,
        changeStaffInvolvedB,
        changeClientsInvolvedB,
        updateAllB
                } from '../../quackquack/reducer'
import '../Chart/Chart.css'


function Modal(props){
    
    let modalClientIndex = props.arrayOfBehavioralIncidents.findIndex((ele) => props.modalID === ele.id)
    
    if (props.editable){
        return (<div>
            <div>
            Client Name: <input onChange={(ele => props.changeClientNameB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].client_name}`}/>
            </div>
            <div>
            Date Of Incident: <input onChange={(ele => props.changeDateB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].incident_date}`}/>
            </div>
            <div>
            Duration Of Incident: <input onChange={(ele => props.changeDurationB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].duration}`}/>
            </div>
            <div>
            Behavior Exhibited: <input onChange={(ele => props.changeBehaviorExhibitedB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].behavior_exhibited}`}/>
            </div>
            <div>
            Antecedent: <input onChange={(ele => props.changeAntecedentB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].antecedent}`}/>
            </div>
            <div>
            Description Of Incident: <input onChange={(ele => props.changeDescriptionOfIncidentB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].description_of_incident}`}/>
            </div>
            <div>
            Actions Taken: <input onChange={(ele => props.changeActionTakenB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].action_taken}`}/>
            </div>
            <div>
            Staff Involved: <input onChange={(ele => props.changeStaffInvolvedB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].staff_involved}`}/>
            </div>
            <div>
            Clients Involved: <input onChange={(ele => props.changeClientsInvolvedB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].clients_involved}`}/>
            </div>
            <button onClick={() => props.makeEditable()}>Edit</button>
            <button onClick={() => props.updateAllB(props.clientNameB, props.dateB, props.timeB, props.durationB, props.behaviorExhibitedB, props.antecedentB, props.descriptionOfIncidentB, props.actionTakenB, props.staffInvolvedB, props.clientsInvolvedB, props.modalID)}>Make Changes</button>
            </div>)
    }
    else{
    return(<div  className='modal'>
        <div>Client Name: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].client_name : 'DELETED'}`}</div>
        <div>Date Of Incident: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].incident_date : 'DELETED'}`}</div>
        <div>Duration Of Incident: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].duration : 'DELETED'}`}</div>
        <div>Behavior Exhibited: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].behavior_exhibited : 'DELETED'}`}</div>
        <div>Antecedent: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].antecedent : 'DELETED'}`}</div>
        <div>Description Of Incident: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].description_of_incident : 'DELETED'}`}</div>
        <div>Action Taken: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].action_taken : 'DELETED'}`}</div>
        <div>Staff Involved: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].staff_involved : 'DELETED'}`}</div>
        <div>Clients Involved: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].clients_involved : 'DELETED'}`}</div>
        <div><button onClick={() => props.makeEditable()}>Edit</button>
        <button onClick={() =>{ 
        props.deleteBehReport(props.modalID)
            
        }}>Delete</button></div>

        {/* clientNameB: 'MUST HAVE VALUE',
            dateB: 0,
            timeB: 0,
            durationB: 0,
            behaviorExhibitedB: 'MUST HAVE VALUE',
            antecedentB: 'MUST HAVE VALUE',
            descriptionOfIncidentB: 'MUST HAVE VALUE',
            actionTakenB: 'MUST HAVE VALUE',
            staffInvolvedB: 'MUST HAVE VALUE',
            clientsInvolvedB: 'MUST HAVE VALUE' */}
    </div>)
}}

function mapStateToProps(state) {
    
    return (
        state
    )
}

export default connect(mapStateToProps, {
    deleteBehReport, 
    makeEditable,
    changeClientNameB,
    changeDateB,
    changeDurationB,
    changeBehaviorExhibitedB,
    changeAntecedentB,
    changeDescriptionOfIncidentB,
    changeActionTakenB,
    changeStaffInvolvedB,
    changeClientsInvolvedB,
    updateAllB
})(Modal)

