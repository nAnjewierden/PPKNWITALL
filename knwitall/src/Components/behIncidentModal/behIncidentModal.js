import React from 'react'
import {connect} from 'react-redux'
import {deleteBehReport, 
        makeEditable,
        changeClientNameB,
        changeDurationB,
        changeBehaviorExhibitedB,
        changeAntecedentB,
        changeDescriptionOfIncidentB,
        changeActionTakenB,
        changeStaffInvolvedB,
        changeClientsInvolvedB,
        updateAllB
                } from '../../quackquack/reducer'
        import './modal.css'


function Modal(props){
    console.log(props, 'behmodal props')
    let modalClientIndex = props.arrayOfBehavioralIncidents.findIndex((ele) => props.modalID === ele.id)
    console.log(modalClientIndex)
    console.log(props.arrayOfBehavioralIncidents[modalClientIndex])
    if (props.editable){
        return (<div className='modal'>
        <div className='groupM'>
            <div className='modalBox'>
            Client Name: <input onChange={(ele => props.changeClientNameB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].client_name}`}/>
            </div>
            
            <div className='modalBox'>
            Duration Of Incident: <input onChange={(ele => props.changeDurationB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].duration}`}/>
            </div>
            <div className='modalBox behE'>
            Behavior Exhibited: <input onChange={(ele => props.changeBehaviorExhibitedB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].behavior_exhibited}`}/>
            </div>
            </div>
            <div className='groupM'>
            <div className='modalBox'>
            Antecedent: <input onChange={(ele => props.changeAntecedentB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].antecedent}`}/>
            </div>
            <div className='modalBox'>
            Description Of Incident: <input onChange={(ele => props.changeDescriptionOfIncidentB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].description_of_incident}`}/>
            </div>
            <div className='modalBox'>
            Actions Taken: <input onChange={(ele => props.changeActionTakenB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].action_taken}`}/>
            </div>
            </div>
            <div className='groupM'>
            <div className='modalBox'>
            Staff Involved: <input onChange={(ele => props.changeStaffInvolvedB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].staff_involved}`}/>
            </div>
            <div className='modalBox'>
            Clients Involved: <input onChange={(ele => props.changeClientsInvolvedB(ele.target.value))} type='text' placeholder={`${props.arrayOfBehavioralIncidents[modalClientIndex].clients_involved}`}/>
            </div>
            </div>
            <div className='groupM'>
            <button onClick={() => props.makeEditable()}>Edit</button>
            <button onClick={() => props.updateAllB(props.clientNameB, props.durationB, props.behaviorExhibitedB, props.antecedentB, props.descriptionOfIncidentB, props.actionTakenB, props.staffInvolvedB, props.clientsInvolvedB, props.modalID)}>Make Changes</button>
            </div>
            </div>)
    }
    else{
    return(<div  className='modal'>
        <div className='groupM'>
        <div className='modalBoxM'>Client Name: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].client_name : 'DELETED'}`}</div>
        <div className='modalBoxM'>Date Of Incident: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].incident_date : 'DELETED'}`}</div>
        <div className='modalBoxM'>Duration Of Incident: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].duration : 'DELETED'}`}</div>
        </div>
        <div className='groupM'>
        <div className='modalBoxM'>Behavior Exhibited: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].behavior_exhibited : 'DELETED'}`}</div>
        <div className='modalBoxM'>Antecedent: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].antecedent : 'DELETED'}`}</div>
        <div className='modalBoxM'>Description Of Incident: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].description_of_incident : 'DELETED'}`}</div>
        </div>
        <div className='groupM'>
        <div className='modalBoxM'>Action Taken: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].action_taken : 'DELETED'}`}</div>
        <div className='modalBoxM'>Staff Involved: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].staff_involved : 'DELETED'}`}</div>
        <div className='modalBoxM'>Clients Involved: {` ${props.arrayOfBehavioralIncidents[modalClientIndex] ? props.arrayOfBehavioralIncidents[modalClientIndex].clients_involved : 'DELETED'}`}</div>
        </div>
        <div className='groupM'>
        <div><button onClick={() => props.makeEditable()}>Edit</button>
        <button onClick={() =>{ 
        props.deleteBehReport(props.modalID)
            
        }}>Delete</button>
        </div>
        </div>

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
    console.log(state)
    return (
        state
    )
}

export default connect(mapStateToProps, {
    deleteBehReport, 
    makeEditable,
    changeClientNameB,
    changeDurationB,
    changeBehaviorExhibitedB,
    changeAntecedentB,
    changeDescriptionOfIncidentB,
    changeActionTakenB,
    changeStaffInvolvedB,
    changeClientsInvolvedB,
    updateAllB
})(Modal)

