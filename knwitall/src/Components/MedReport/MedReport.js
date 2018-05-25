import React, {Component} from 'react'
import axios from 'axios'
import './reset.css'
import './MedReport.css'


export default class MedReport extends Component{
    constructor(){
        super()
        this.state = {
            clientName: 'select',
            date: '',
            time: '',
            duration: '',
            incidentType: 'select',
            antecedent: '',
            descriptionOfIncident: '',
            actionTaken: '',
            staffInvolved: 'select',
            clientsInvolved: 'select',
        }
        this.handleClientName = this.handleClientName.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.handleTime = this.handleTime.bind(this)
        this.handleDuration = this.handleDuration.bind(this)
        this.handleIncidentType = this.handleIncidentType.bind(this)
        this.handleAntecedent = this.handleAntecedent.bind(this)
        this.handleDescriptionOfIncident = this.handleDescriptionOfIncident.bind(this)
        this.handleActionTaken = this.handleActionTaken.bind(this)
        this.handleStaffInvolved = this.handleStaffInvolved.bind(this)
        this.handleClientInvolved = this.handleClientInvolved.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
        handleClientName(value){
            this.setState({
                clientName: value
            })
        }
        handleDate(value){
            this.setState({
                date: value
            })
        }
        handleTime(value){
            this.setState({
                time: value
            })
        }
        handleDuration(value){
            this.setState({
                duration: value
            })
        }
        handleIncidentType(value){
            this.setState({
                incidentType: value
            })
        }
        handleAntecedent(value){
            this.setState({
                antecedent: value
            })
        }
        handleDescriptionOfIncident(value){
            this.setState({
                descriptionOfIncident: value
            })
        }
        handleActionTaken(value){
            this.setState({
                actionTaken: value
            })
        }
        handleStaffInvolved(value){
            this.setState({
                staffInvolved: value
            })
        }
        handleClientInvolved(value){
            this.setState({
                clientsInvolved: value
            })
        }
        handleSubmit(){
            const {clientName, 
                date, 
                time, 
                duration, 
                incidentType, 
                antecedent, 
                descriptionOfIncident, 
                actionTaken, 
                clientsInvolved, 
                staffInvolved} = this.state
            axios.post('/api/reportM', {clientName, 
                date, 
                time, 
                duration, 
                incidentType, 
                antecedent, 
                descriptionOfIncident, 
                actionTaken, 
                clientsInvolved,
                staffInvolved
            }).then(res => {console.log(res)})
                this.handleCancel()
        }

        handleCancel(){
            this.setState({
            clientName: 'select',
            date: '',
            time: '',
            duration: '',
            incidentType: 'select',
            antecedent: '',
            descriptionOfIncident: '',
            actionTaken: '',
            staffInvolved: 'select',
            clientsInvolved: 'select',
            })
        }
    
    render(){
    return (
    
        <div className='mainDiv'>
        
        <h1 className='header'>Medical Incident Report</h1>
        
        <form className='form'>
        
        <div className='group'>

            <div className='input'>
            Client Name: 
            <select onChange={(ele) => this.handleClientName(ele.target.value)} value={this.state.clientName}>
                <option value="select">select</option>
                <option value="Client1">Client 1</option>
                <option value="Client2">Client 2</option>
                <option value="Client3">Client 3</option>
                <option value="Client4">Client 4</option>
                <option value="Client5">Client 5</option>
                </select></div>

            <div className='input' >
            Date: 
            <input onChange={(ele) => this.handleDate(ele.target.value)} 
            value={this.state.date} type='text'/></div>
            
            </div>
            
            <div className='group'>
           
            <div className='input'>
            Time: 
            
            <input onChange={(ele) => this.handleTime(ele.target.value)} 
            value={this.state.time}/>
            
            </div>
            
            <div className='input'>

            Duration: 
            <input  onChange={ele => this.handleDuration(ele.target.value)} 
            value={this.state.duration}/></div>
            
            <div className='input'>
            incident Type:  
            <select 
            onChange={(ele) => this.handleIncidentType(ele.target.value)} 
            value={this.state.incidentType}>
                <option value="select">select</option>
                <option value="Seizure">Seizure</option>
                <option value="Injured By Another Client">Injured By Another Client</option>
                <option value="Accidental Injury">Accidental Injury</option>
                <option value="Self Inflicted Injury">Self Inflicted Injury</option>
                <option value="Other">Other</option>
                </select></div></div>
            

            <div className='group'>

            <div className='input'>Staff Involved: 
            <select onChange={ele => this.handleStaffInvolved(ele.target.value)} 
            value={this.state.staffInvolved}>
                <option value="Select">select</option>
                <option value="Staff1">Staff 1</option>
                <option value="Staff2">Staff 2</option>
                <option value="Staff3">Staff 3</option>
                <option value="Staff4">Staff 4</option>
                <option value="Staff5">Staff 5</option>
                </select></div>
            
            
            <div className='input'>Clients Involved: 
            <select onChange={ele => this.handleClientInvolved(ele.target.value)} value={this.state.clientsInvolved}>
                <option value="select">select</option>
                <option value="Client1">Client 1</option>
                <option value="Client2">Client 2</option>
                <option value="Client3">Client 3</option>
                <option value="Client4">Client 4</option>
                <option value="Client5">Client 5</option>
                </select></div>
            </div>
            <div className='group bottom-group'>
 
            <div className='input bottom-input'> 
            
            Antecedent: 
            <textarea name="antecedentM" rows="5" cols="30" onChange={ele => this.handleAntecedent(ele.target.value)} 
            value={this.state.antecedent}/>
            </div>
            
            <div className='input bottom-input'>Description: 
            <textarea name="descriptionOfIncidentM" rows="5" cols="30" onChange={ele => this.handleDescriptionOfIncident(ele.target.value)} 
            value={this.state.descriptionOfIncident}/>
            </div>
            
            <div className='input bottom-input'>
            Action Taken: 
            <textarea name="actionTakenM" rows="5" cols="30" onChange={ele => this.handleActionTaken(ele.target.value)} 
            value={this.state.actionTaken}/>
            </div>

            </div>
            <div className='button-group'><button className='button input' 
            onClick={() => this.handleCancel()}>
            Cancel
            </button>
            <button className='button input' onClick={() => this.handleSubmit()}>Submit</button></div>
        </form>
    </div>)
}
}

