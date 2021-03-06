import React from 'react'
import { connect } from 'react-redux'
import {
    deleteMedReport,
    makeEditableM,
    changeClientNameM,
    changeDurationM,
    changeIncidentType,
    changeAntecedentM,
    changeDescriptionOfIncidentM,
    changeActionTakenM,
    changeStaffInvolvedM,
    changeClientsInvolvedM,
    updateAllM
} from '../../quackquack/reducer'
import './modal.css'


function ModalM(props) {
    console.log(props)
    let modalClientIndex = props.arrayOfMedicalIncidents.findIndex((ele) => props.medModalID === ele.id)
    console.log(modalClientIndex)
    if (props.editableM) {
        return (
        <div className='modal'>
            <div className='groupM'>
                <div className='modalBox'>
                    Client Name: <input onChange={(ele => props.changeClientNameM(ele.target.value))} type='text' placeholder={`${props.arrayOfMedicalIncidents[modalClientIndex].client_name}`} />
                </div>
                <div className='modalBox'>
                    Duration Of Incident: <input onChange={(ele => props.changeDurationM(ele.target.value))} type='text' placeholder={`${props.arrayOfMedicalIncidents[modalClientIndex].duration}`} />
                </div>
                <div className='modalBox'>
                    Incident Type: <input onChange={(ele => props.changeIncidentType(ele.target.value))} type='text' placeholder={`${props.arrayOfMedicalIncidents[modalClientIndex].incident_type}`} />
                </div>
            </div>
            <div className='groupM'>
                <div className='modalBox'>
                    Antecedent: <input onChange={(ele => props.changeAntecedentM(ele.target.value))} type='text' placeholder={`${props.arrayOfMedicalIncidents[modalClientIndex].antecedent}`} />
                </div>
                <div className='modalBox'>
                    Description Of Incident: <input onChange={(ele => props.changeDescriptionOfIncidentM(ele.target.value))} type='text' placeholder={`${props.arrayOfMedicalIncidents[modalClientIndex].description_of_incident}`} />
                </div>
                <div className='modalBox'>
                    Actions Taken: <input onChange={(ele => props.changeActionTakenM(ele.target.value))} type='text' placeholder={`${props.arrayOfMedicalIncidents[modalClientIndex].action_taken}`} />
                </div>
            </div>
            <div className='groupM'>
                <div className='modalBox'>
                    Staff Involved: <input onChange={(ele => props.changeStaffInvolvedM(ele.target.value))} type='text' placeholder={`${props.arrayOfMedicalIncidents[modalClientIndex].staff_involved}`} />
                </div>
                <div className='modalBox'>
                    Clients Involved: <input onChange={(ele => props.changeClientsInvolvedM(ele.target.value))} type='text' placeholder={`${props.arrayOfMedicalIncidents[modalClientIndex].clients_involved}`} />
                </div>
            </div>
            <div className='groupM'>
                <button onClick={() => props.makeEditableM()}>Edit</button>
                <button onClick={() => props.updateAllM(props.clientNameM, props.durationM, props.incidentType, props.antecedentM, props.descriptionOfIncidentM, props.actionTakenM, props.staffInvolvedM, props.clientsInvolvedM, props.medModalID)}>Make Changes</button>
            </div>
        </div>
        )
    }
    else {
        return (<div className='modal'>
            <div className='groupM'>
            <div className='modalBoxM'>Client Name: {` ${props.arrayOfMedicalIncidents[modalClientIndex] ? props.arrayOfMedicalIncidents[modalClientIndex].client_name : 'DELETED'}`}</div>
            <div className='modalBoxM'>Date Of Incident: {` ${props.arrayOfMedicalIncidents[modalClientIndex] ? props.arrayOfMedicalIncidents[modalClientIndex].incident_date : 'DELETED'}`}</div>
            <div className='modalBoxM'>Duration Of Incident: {` ${props.arrayOfMedicalIncidents[modalClientIndex] ? props.arrayOfMedicalIncidents[modalClientIndex].duration : 'DELETED'}`}</div>
            </div>
            <div className='groupM'>
            <div className='modalBoxM'>Incident Type: {` ${props.arrayOfMedicalIncidents[modalClientIndex] ? props.arrayOfMedicalIncidents[modalClientIndex].incident_type : 'DELETED'}`}</div>
            <div className='modalBoxM'>Antecedent: {` ${props.arrayOfMedicalIncidents[modalClientIndex] ? props.arrayOfMedicalIncidents[modalClientIndex].antecedent : 'DELETED'}`}</div>
            <div className='modalBoxM'>Description Of Incident: {` ${props.arrayOfMedicalIncidents[modalClientIndex] ? props.arrayOfMedicalIncidents[modalClientIndex].description_of_incident : 'DELETED'}`}</div>
            </div>
            <div className='groupM'>
            <div className='modalBoxM'>Action Taken: {` ${props.arrayOfMedicalIncidents[modalClientIndex] ? props.arrayOfMedicalIncidents[modalClientIndex].action_taken : 'DELETED'}`}</div>
            <div className='modalBoxM'>Staff Involved: {` ${props.arrayOfMedicalIncidents[modalClientIndex] ? props.arrayOfMedicalIncidents[modalClientIndex].staff_involved : 'DELETED'}`}</div>
            <div className='modalBoxM'>Clients Involved: {` ${props.arrayOfMedicalIncidents[modalClientIndex] ? props.arrayOfMedicalIncidents[modalClientIndex].clients_involved : 'DELETED'}`}</div>
            
            </div>
            <div className='groupM'>    
                <button onClick={() => props.makeEditableM()}>Edit</button>
                <button onClick={() => {
                    props.deleteMedReport(props.medModalID)

                }}>Delete</button></div>


        </div>
        )
    }
}

function mapStateToProps(state) {

    return (
        state
    )
}

export default connect(mapStateToProps, {
    deleteMedReport,
    makeEditableM,
    changeClientNameM,
    changeDurationM,
    changeIncidentType,
    changeAntecedentM,
    changeDescriptionOfIncidentM,
    changeActionTakenM,
    changeStaffInvolvedM,
    changeClientsInvolvedM,
    updateAllM
})(ModalM)

