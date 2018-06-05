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
    arrayOfBehCounts1: [],
    arrayofBehDateStrings1: [],
    arrayOfBehCounts2: [],
    arrayofBehDateStrings2: [],
    medOrBeh1: true,
    medOrBeh2: true

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
const GET_BEH_INCIDENTS_GRAPH_1 = 'GET_BEH_INCIDENTS_GRAPH_1'
const GET_BEH_INCIDENTS_GRAPH_1_FULFILLED = 'GET_BEH_INCIDENTS_GRAPH_1_FULFILLED'
const GET_BEH_INCIDENTS_GRAPH_1_PENDING = 'GET_BEH_INCIDENTS_GRAPH_1_PENDING'
const GET_BEH_INCIDENTS_GRAPH_2 = 'GET_BEH_INCIDENTS_GRAPH_2'
const GET_BEH_INCIDENTS_GRAPH_2_FULFILLED = 'GET_BEH_INCIDENTS_GRAPH_2_FULFILLED'
const GET_BEH_INCIDENTS_GRAPH_2_PENDING = 'GET_BEH_INCIDENTS_GRAPH_2_PENDING'
const CHANGE_GRAPH_1 = 'CHANGE_GRAPH_1'
const CHANGE_GRAPH_2 = 'CHANGE_GRAPH_2'


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

        case CHANGE_GRAPH_1:
        return Object.assign({}, state, {medOrBeh1: !state.medOrBeh1})

        case CHANGE_GRAPH_2:
        return Object.assign({}, state, {medOrBeh2: !state.medOrBeh2})
        
        case DELETE_BEH_REPORT_FULFILLED:
            console.log('fulfilled')
            return Object.assign({}, state, { arrayOfBehavioralIncidents: action.payload })

        case GET_BEH_INCIDENTS_GRAPH_1_PENDING:

            console.log('pending')
            return Object.assign({}, state)
        case GET_BEH_INCIDENTS_GRAPH_1_FULFILLED:

            let returnArray1 = []
            let lastDay1 = new Date();
            console.log(lastDay1, 'this should be today')
            let y1 = lastDay1.getFullYear();
            let m1 = lastDay1.getMonth();
            let d1 = lastDay1.getDate();
            for (var i = 0; i <= 30; i++) {
                var day1 = new Date(y1, m1, d1 - 30 + i).toDateString();
                
                returnArray1.push(day1)
                
            }
            console.log(returnArray1)
            console.log(action.payload)
            let arrayOfCounts1 = returnArray1.map((ele) => {
                var count1 = 0;
                for (let i = 0; i < action.payload.length; i++) {
                    let payload1 = new Date(action.payload[i].incident_date)
                    let eleDate1 = new Date(ele)
                    
                    if (eleDate1.getTime() === payload1.getTime()){
                        count1++;
                        console.log(count1)
                    }
                }
                return count1
                
            })
            console.log(arrayOfCounts1)
            return Object.assign({}, state, {
                arrayOfBehCounts1: arrayOfCounts1,
                arrayofBehDateStrings1: returnArray1 })

                case GET_BEH_INCIDENTS_GRAPH_2_PENDING:

                console.log('pending')
                return Object.assign({}, state)
            case GET_BEH_INCIDENTS_GRAPH_2_FULFILLED:
    
                let returnArray2 = []
                let lastDay2 = new Date();
                console.log(lastDay2, 'this should be today')
                let y2 = lastDay2.getFullYear();
                let m2 = lastDay2.getMonth();
                let d2 = lastDay2.getDate();
                for (var i = 0; i <= 30; i++) {
                    var day2 = new Date(y2, m2, d2 - 30 + i).toDateString();
                    
                    returnArray2.push(day2)
                    
                }
                console.log(returnArray2)
                console.log(action.payload)
                let arrayOfCounts2 = returnArray2.map((ele) => {
                    var count2 = 0;
                    for (let i = 0; i < action.payload.length; i++) {
                        let payload2 = new Date(action.payload[i].incident_date)
                        let eleDate2 = new Date(ele)
                        
                        if (eleDate2.getTime() === payload2.getTime()){
                            count2++;
                            console.log(count2)
                        }
                    }
                    return count2
                    
                })
                console.log(arrayOfCounts2)
                return Object.assign({}, state, {
                    arrayOfBehCounts2: arrayOfCounts2,
                    arrayofBehDateStrings2: returnArray2 })
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
export function getBehIncidentsGraph1(value) {
    console.log(value)
    return {
        type: GET_BEH_INCIDENTS_GRAPH_1,
        payload: services.getBehIncidentsGraph(value)
    }
}
export function getBehIncidentsGraph2(value) {
    console.log(value)
    return {
        type: GET_BEH_INCIDENTS_GRAPH_2,
        payload: services.getBehIncidentsGraph(value)
    }
}
export function changeGraph1(){
    return {
        type: CHANGE_GRAPH_1,
        payload: ''
    }
}
export function changeGraph2(){
   return { 
       type: CHANGE_GRAPH_2,
       payload: ''
   }
}