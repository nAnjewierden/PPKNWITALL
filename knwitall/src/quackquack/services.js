import axios from 'axios'

export const getBehIncidents = function(){
    return axios.get('/api/getBehIncidents').then(res => {
        console.log(res.data)
        return res.data
    })
}

export const getMedIncidents = function(){
    return axios.get('/api/getMedIncidents').then(res => {
        console.log(res.data)
        return res.data
    })
}

export const deleteBehReport = function(id){

    return axios.delete(`/api/deleteBehIncident/${id}`).then(res => {
        console.log(res.data)
        return res.data
    })
}

export const updateBehReport = function (clientName, date, duration, behaviorExhibited, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved, id){
    console.log(arguments)
    return axios.put(`/api/updateBehIncident/${id}`,
    {clientName, 
    date,  
    duration, 
    behaviorExhibited, 
    antecedent, 
    descriptionOfIncident, 
    actionTaken, 
    clientsInvolved,
    staffInvolved}).then(res => {
        console.log(res.data)
        return res.data
    })
}

export const getBehIncidentsGraph = function (clientName){
    
    return axios.put('/api/getBehIncidentsGraph', {clientName})
    .then(res => {
        
        return res.data 
    })
}

export const getMedIncidentsGraph = function (clientName){
    console.log(clientName)
    return axios.put('/api/getMedIncidentsGraph', {clientName})
    .then(res => {
        console.log(res.data)
        return res.data 
    })
}


// his.state.clientNameB,
//         this.state.dateB,
//         this.state.timeB,
//         this.state.durationB,
//         this.state.behaviorExhibitedB,
//         this.state.antecedentB,
//         this.state.descriptionOfIncidentB,
//         this.state.actionTakenB,
//         this.state.staffInvolvedB,
//         this.state.clientsInvolvedB,
//     )