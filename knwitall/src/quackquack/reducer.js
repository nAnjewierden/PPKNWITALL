import * as services from './services'
let initialState = {
    arrayOfBehavioralIncidents: [],
    editable: false,
    clientNameB: 'MUST HAVE VALUE',
    dateB: 0,
    timeB: 0,
    durationB: 0,
    behaviorExhibitedB: 'MUST HAVE VALUE',
    antecedentB: 'MUST HAVE VALUE',
    descriptionOfIncidentB: 'MUST HAVE VALUE',
    actionTakenB: 'MUST HAVE VALUE',
    staffInvolvedB: 'MUST HAVE VALUE',
    clientsInvolvedB: 'MUST HAVE VALUE',
    arrayOfBehCounts: [],
    arrayofBehDateStrings: []

}

const GET_BEH_INCEDENTS = 'GET_BEH_INCEDENTS'
const GET_BEH_INCEDENTS_PENDING = 'GET_BEH_INCEDENTS_PENDING'
const GET_BEH_INCEDENTS_FULFILLED = 'GET_BEH_INCEDENTS_FULFILLED'
const DELETE_BEH_REPORT = 'DELETE_BEH_REPORT'
const DELETE_BEH_REPORT_PENDING = 'DELETE_BEH_REPORT_PENDING'
const DELETE_BEH_REPORT_FULFILLED = 'DELETE_BEH_REPORT_FULFILLED'
const MAKE_EDITABLE = 'MAKE_EDITABLE'
const UPDATE_CLIENT_NAME_B = 'UPDATE_CLIENT_NAME_B'
const UPDATE_DATE_B = 'UPDATE_DATE_B'
const UPDATE_TIME_B = 'UPDATE_TIME_B'
const UPDATE_DURATION_B = 'UPDATE_DURATION_B'
const UPDATE_BEHAVIOR_EXHIBITED_B = 'UPDATE_BEHAVIOR_EXHIBITED_B'
const UPDATE_ANTECEDENT_B = 'UPDATE_ANTECEDENT_B'
const UPDATE_DESCRIPTION_OF_INCIDENT_B = 'UPDATE_DESCRIPTION_OF_INCIDENT_B'
const UPDATE_ACTION_TAKEN_B = 'UPDATE_ACTION_TAKEN_B'
const UPDATE_STAFF_INVOLVED_B = 'UPDATE_STAFF_INVOLVED_B'
const UPDATE_CLIENTS_INVOLVED_B = 'UPDATE_CLIENTS_INVOLVED_B'
const UPDATE_ALL_B = 'UPDATE_ALL_B'
const UPDATE_ALL_B_FULFILLED = 'UPDATE_ALL_B_FULFILLED'
const GET_BEH_INCIDENTS_GRAPH = 'GET_BEH_INCIDENTS_GRAPH'
const GET_BEH_INCIDENTS_GRAPH_FULFILLED = 'GET_BEH_INCIDENTS_GRAPH_FULFILLED'
const GET_BEH_INCIDENTS_GRAPH_PENDING = 'GET_BEH_INCIDENTS_GRAPH_PENDING'


export default function reducer(state = initialState, action) {
    switch (action.type) {

        // case GET_BEH_INCEDENTS_PENDING:
        //     return
        case UPDATE_CLIENT_NAME_B:
            return Object.assign({}, state, { clientNameB: action.payload })

        case UPDATE_TIME_B:
            return Object.assign({}, state, { timeB: action.payload })

        case UPDATE_DATE_B:
            return Object.assign({}, state, { dateB: action.payload })

        case UPDATE_DURATION_B:
            return Object.assign({}, state, { durationB: action.payload })

        case UPDATE_BEHAVIOR_EXHIBITED_B:
            return Object.assign({}, state, { behaviorExhibitedB: action.payload })

        case UPDATE_ANTECEDENT_B:
            return Object.assign({}, state, { antecedentB: action.payload })

        case UPDATE_DESCRIPTION_OF_INCIDENT_B:
            return Object.assign({}, state, { descriptionOfIncidentB: action.payload })

        case UPDATE_ACTION_TAKEN_B:
            return Object.assign({}, state, { actionTakenB: action.payload })

        case UPDATE_STAFF_INVOLVED_B:
            return Object.assign({}, state, { staffInvolvedB: action.payload })

        case UPDATE_CLIENTS_INVOLVED_B:
            return Object.assign({}, state, { clientsInvolvedB: action.payload })

        case GET_BEH_INCEDENTS_FULFILLED:
            return Object.assign({}, state, { arrayOfBehavioralIncidents: action.payload })

        case UPDATE_ALL_B_FULFILLED:
            return Object.assign({}, state, {
                arrayOfBehavioralIncidents: action.payload,
                clientNameB: 'MUST HAVE VALUE',
                dateB: 0,
                timeB: 0,
                durationB: 0,
                behaviorExhibitedB: 'MUST HAVE VALUE',
                antecedentB: 'MUST HAVE VALUE',
                descriptionOfIncidentB: 'MUST HAVE VALUE',
                actionTakenB: 'MUST HAVE VALUE',
                staffInvolvedB: 'MUST HAVE VALUE',
                clientsInvolvedB: 'MUST HAVE VALUE'
            })

        case MAKE_EDITABLE:
            return Object.assign({}, state, { editable: !state.editable }
            )

        case DELETE_BEH_REPORT_FULFILLED:
            console.log('fulfilled')
            return Object.assign({}, state, { arrayOfBehavioralIncidents: action.payload })

        case GET_BEH_INCIDENTS_GRAPH_PENDING:

            console.log('pending')
            return Object.assign({}, state)
        case GET_BEH_INCIDENTS_GRAPH_FULFILLED:

            let returnArray = []
            let lastDay = new Date();
            console.log(lastDay, 'this should be today')
            let y = lastDay.getFullYear();
            let m = lastDay.getMonth();
            let d = lastDay.getDate();
            for (var i = 0; i <= 30; i++) {
                var day = new Date(y, m, d - 30 + i).toDateString();
                
                returnArray.push(day)
                
            }
            console.log(returnArray)
            console.log(action.payload)
            let arrayOfCounts = returnArray.map((ele) => {
                var count = 0;
                for (let i = 0; i < action.payload.length; i++) {
                    let payload = new Date(action.payload[i].incident_date)
                    let eleDate = new Date(ele)
                    
                    if (eleDate.getTime() === payload.getTime()){
                        count++;
                        console.log(count)
                    }
                }
                return count
                
            })
            console.log(arrayOfCounts)
            return Object.assign({}, state, {
                arrayOfBehCounts: arrayOfCounts,
                arrayofBehDateStrings: returnArray })
        default: return state
    }
}

export function getBehIncidents() {
    return {
        type: GET_BEH_INCEDENTS,
        payload: services.getBehIncidents()
    }
}
export function deleteBehReport(id) {
    return {
        type: DELETE_BEH_REPORT,
        payload: services.deleteBehReport(id)
    }
}
export function updateAllB(clientNameB, dateB, timeB, durationB, behaviorExhibitedB, antecedentB, descriptionOfIncidentB, actionTakenB, staffInvolvedB, clientsInvolvedB, id) {
    return {
        type: UPDATE_ALL_B,
        payload: services.updateBehReport(
            clientNameB,
            dateB,
            timeB,
            durationB,
            behaviorExhibitedB,
            antecedentB,
            descriptionOfIncidentB,
            actionTakenB,
            staffInvolvedB,
            clientsInvolvedB,
            id
        )
    }
}
export function makeEditable() {
    return {
        type: MAKE_EDITABLE
    }
}
export function changeClientNameB(value) {
    return {
        type: UPDATE_CLIENT_NAME_B,
        payload: value
    }
}
export function changeDateB(value) {
    return {
        type: UPDATE_DATE_B,
        payload: value
    }
}
export function changeTimeB(value) {
    return {
        type: UPDATE_TIME_B,
        payload: value
    }
}
export function changeDurationB(value) {
    return {
        type: UPDATE_DURATION_B,
        payload: value
    }
}
export function changeBehaviorExhibitedB(value) {
    return {
        type: UPDATE_BEHAVIOR_EXHIBITED_B,
        payload: value
    }
}
export function changeAntecedentB(value) {
    return {
        type: UPDATE_ANTECEDENT_B,
        payload: value
    }
}
export function changeDescriptionOfIncidentB(value) {
    return {
        type: UPDATE_DESCRIPTION_OF_INCIDENT_B,
        payload: value
    }
}
export function changeActionTakenB(value) {
    return {
        type: UPDATE_ACTION_TAKEN_B,
        payload: value
    }
}
export function changeStaffInvolvedB(value) {
    return {
        type: UPDATE_STAFF_INVOLVED_B,
        payload: value
    }
}
export function changeClientsInvolvedB(value) {
    return {
        type: UPDATE_CLIENTS_INVOLVED_B,
        payload: value
    }
}
export function getBehIncidentsGraph(value) {
    console.log(value)
    return {
        type: GET_BEH_INCIDENTS_GRAPH,
        payload: services.getBehIncidentsGraph(value)
    }
}