import React, {Component} from 'react'
import axios from 'axios'
import './reset.css'
import './BehReport.css'


export default class BehReport extends Component{
    constructor(){
        super()
        this.state = {
            clientName: 'select',
            date: '',
            duration: 0,
            behaviorExhibited: '',
            antecedent: '',
            descriptionOfIncident: '',
            actionTaken: '',
            staffInvolved: 'select',
            clientsInvolved: 'select'
        }
        this.handleClientName = this.handleClientName.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.handleDuration = this.handleDuration.bind(this)
        this.handleBehaviorExhibited = this.handleBehaviorExhibited.bind(this)
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
    handleDate(){
        let tempDate = new Date().toDateString()
    console.log(tempDate)
        this.setState({
            date: tempDate
        })
    
    }
    handleDuration(value){
        this.setState({
            duration: value
        })
    }
    handleBehaviorExhibited(value){
        this.setState({
            behaviorExhibited: value
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
        const {
            clientName, 
            date,  
            duration, 
            behaviorExhibited, 
            antecedent, 
            descriptionOfIncident, 
            actionTaken, 
            clientsInvolved, 
            staffInvolved } = this.state
            this.handleDate()
            console.log(this.state)
        axios.post('/api/reportB', {
            clientName, 
            date,  
            duration, 
            behaviorExhibited, 
            antecedent, 
            descriptionOfIncident, 
            actionTaken, 
            clientsInvolved,
            staffInvolved}).then(res => {
                alert('that worked playa'
                
            )})
            this.handleCancel()
    }
    handleCancel(){
        this.setState({
        clientName: 'select',
        date: '',
        duration: '',
        behaviorExhibited: 'select',
        antecedent: '',
        descriptionOfIncident: '',
        actionTaken: '',
        staffInvolved: 'select',
        clientsInvolved: 'select',
        })
    }
    render(){
        console.log(this.state)
        return (
        <div className='mainDiv'>
        
        <h1 className='header'>Behavioral Incident Report</h1>
        
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
            value={this.state.date}/></div>
            
            </div>
            
            <div className='group'>
           
           
            
            <div className='input'>

            Duration: 
            <input  onChange={ele => this.handleDuration(ele.target.value)} 
            value={this.state.duration}/></div>

            <div className='input'>
            Behaviors Exhibited: 
            <select
            onChange={(ele) => this.handleBehaviorExhibited(ele.target.value)} 
            value={this.state.behaviorExhibited}>
                <option value="select">select</option>
                <option value="Biting">Biting</option>
                <option value="Stricking">Stricking</option>
                <option value="Stricking With Object">Striking With Object</option>
                <option value="Self-Injury">Self-Injury</option>
                <option value="Screaming">Screaming</option>
                <option value="Instegating">Instegating</option>
                <option value="Elopeing">Elopeing</option>
                <option value="Dangerous Non-Compliance">Dangerous Non-Compliance</option>
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
            <textarea name="antecedentB" rows="5" cols="30" onChange={ele => this.handleAntecedent(ele.target.value)} 
            value={this.state.antecedent}/>
            </div>
            
            <div className='input bottom-input'>Description: 
            <textarea name="descriptionOfIncidentB" rows="5" cols="30" onChange={ele => this.handleDescriptionOfIncident(ele.target.value)} 
            value={this.state.descriptionOfIncident}/>
            </div>
            
            <div className='input bottom-input'>
            Action Taken: 
            <textarea name="actionTakenB" rows="5" cols="30" onChange={ele => this.handleActionTaken(ele.target.value)} 
            value={this.state.actionTaken}/>
            </div>
            <button onClick={() => this.handleDate()}>get date</button>
            </div>
            <div className="button-group"><button className='button input' 
            onClick={() => this.handleCancel()}>
            Cancel
            </button>
            <button className='button input' onClick={() => this.handleSubmit()} >Submit</button></div>
        </form>
    </div>)
}
}

