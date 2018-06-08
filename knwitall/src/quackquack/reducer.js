import * as services from './services'
let initialState = {
    arrayOfBehavioralIncidents: [],
    arrayOfMedicalIncidents: [],
    editable: false,
    clientNameB: 'MUST HAVE VALUE',
    dateB: 0,
    durationB: 0,
    behaviorExhibitedB: 'MUST HAVE VALUE',
    antecedentB: 'MUST HAVE VALUE',
    descriptionOfIncidentB: 'MUST HAVE VALUE',
    actionTakenB: 'MUST HAVE VALUE',
    staffInvolvedB: 'MUST HAVE VALUE',
    clientsInvolvedB: 'MUST HAVE VALUE',
    clientNameB: 'MUST HAVE VALUE',
    dateM: 0,
    durationM: 0,
    behaviorExhibitedM: 'MUST HAVE VALUE',
    antecedentM: 'MUST HAVE VALUE',
    descriptionOfIncidentM: 'MUST HAVE VALUE',
    actionTakenM: 'MUST HAVE VALUE',
    staffInvolvedM: 'MUST HAVE VALUE',
    clientsInvolvedM: 'MUST HAVE VALUE',
    arrayOfBehCounts1: [],
    arrayofBehDateStrings1: [],
    arrayOfBehCounts2: [],
    arrayofBehDateStrings2: [],
    arrayOfMedCounts1: [],
    arrayofMedDateStrings1: [],
    arrayOfMedCounts2: [],
    arrayofMedDateStrings2: [],
    medOrBeh1: true,
    medOrBeh2: true,
    medOrBehIncidentColumn: true,

}

const GET_BEH_INCIDENTS = 'GET_BEH_INCIDENTS'
const GET_BEH_INCIDENTS_PENDING = 'GET_BEH_INCIDENTS_PENDING'
const GET_BEH_INCIDENTS_FULFILLED = 'GET_BEH_INCIDENTS_FULFILLED'
const GET_MED_INCIDENTS = 'GET_MED_INCIDENTS'
const GET_MED_INCIDENTS_PENDING = 'GET_MED_INCIDENTS_PENDING'
const GET_MED_INCIDENTS_FULFILLED = 'GET_MED_INCIDENTS_FULFILLED'
const DELETE_BEH_REPORT = 'DELETE_BEH_REPORT'
const DELETE_BEH_REPORT_PENDING = 'DELETE_BEH_REPORT_PENDING'
const DELETE_BEH_REPORT_FULFILLED = 'DELETE_BEH_REPORT_FULFILLED'
const MAKE_EDITABLE = 'MAKE_EDITABLE'
const UPDATE_CLIENT_NAME_B = 'UPDATE_CLIENT_NAME_B'
const UPDATE_DATE_B = 'UPDATE_DATE_B'
const UPDATE_DURATION_B = 'UPDATE_DURATION_B'
const UPDATE_BEHAVIOR_EXHIBITED_B = 'UPDATE_BEHAVIOR_EXHIBITED_B'
const UPDATE_ANTECEDENT_B = 'UPDATE_ANTECEDENT_B'
const UPDATE_DESCRIPTION_OF_INCIDENT_B = 'UPDATE_DESCRIPTION_OF_INCIDENT_B'
const UPDATE_ACTION_TAKEN_B = 'UPDATE_ACTION_TAKEN_B'
const UPDATE_STAFF_INVOLVED_B = 'UPDATE_STAFF_INVOLVED_B'
const UPDATE_CLIENTS_INVOLVED_B = 'UPDATE_CLIENTS_INVOLVED_B'
const UPDATE_ALL_B = 'UPDATE_ALL_B'
const UPDATE_ALL_B_FULFILLED = 'UPDATE_ALL_B_FULFILLED'
const UPDATE_CLIENT_NAME_M = 'UPDATE_CLIENT_NAME_M'
const UPDATE_DATE_M = 'UPDATE_DATE_M'
const UPDATE_DURATION_M = 'UPDATE_DURATION_M'
const UPDATE_BEHAVIOR_EXHIBITED_M = 'UPDATE_BEHAVIOR_EXHIBITED_M'
const UPDATE_ANTECEDENT_M = 'UPDATE_ANTECEDENT_M'
const UPDATE_DESCRIPTION_OF_INCIDENT_M = 'UPDATE_DESCRIPTION_OF_INCIDENT_M'
const UPDATE_ACTION_TAKEN_M = 'UPDATE_ACTION_TAKEN_M'
const UPDATE_STAFF_INVOLVED_M = 'UPDATE_STAFF_INVOLVED_M'
const UPDATE_CLIENTS_INVOLVED_M = 'UPDATE_CLIENTS_INVOLVED_M'
const UPDATE_ALL_M = 'UPDATE_ALL_M'
const UPDATE_ALL_M_FULFILLED = 'UPDATE_ALL_M_FULFILLED'
const DELETE_MED_REPORT = 'DELETE_MED_REPORT'
const DELETE_MED_REPORT_PENDING = 'DELETE_MED_REPORT_PENDING'
const DELETE_MED_REPORT_FULFILLED = 'DELETE_MED_REPORT_FULFILLED'
const GET_BEH_INCIDENTS_GRAPH_1 = 'GET_BEH_INCIDENTS_GRAPH_1'
const GET_BEH_INCIDENTS_GRAPH_1_FULFILLED = 'GET_BEH_INCIDENTS_GRAPH_1_FULFILLED'

const GET_BEH_INCIDENTS_GRAPH_2 = 'GET_BEH_INCIDENTS_GRAPH_2'
const GET_BEH_INCIDENTS_GRAPH_2_FULFILLED = 'GET_BEH_INCIDENTS_GRAPH_2_FULFILLED'

const GET_MED_INCIDENTS_GRAPH_1 = 'GET_MED_INCIDENTS_GRAPH_1'
const GET_MED_INCIDENTS_GRAPH_1_FULFILLED = 'GET_MED_INCIDENTS_GRAPH_1_FULFILLED'

const GET_MED_INCIDENTS_GRAPH_2 = 'GET_MED_INCIDENTS_GRAPH_2'
const GET_MED_INCIDENTS_GRAPH_2_FULFILLED = 'GET_MED_INCIDENTS_GRAPH_2_FULFILLED'

const CHANGE_GRAPH_1 = 'CHANGE_GRAPH_1'
const CHANGE_GRAPH_2 = 'CHANGE_GRAPH_2'
const MED_OR_BEH_INCIDENT_COLUMN = 'MED_OR_BEH_INCIDENT_COLUMN'


export default function reducer(state = initialState, action) {
    switch (action.type) {

        // case GET_BEH_INCEDENTS_PENDING:
        //     return
        case UPDATE_CLIENT_NAME_B:
            return Object.assign({}, state, { clientNameB: action.payload })

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

        case GET_BEH_INCIDENTS_FULFILLED:
            return Object.assign({}, state, { arrayOfBehavioralIncidents: action.payload })
        case GET_MED_INCIDENTS_FULFILLED:
            return Object.assign({}, state, { arrayOfMedicalIncidents: action.payload })

        case UPDATE_ALL_B_FULFILLED:
            return Object.assign({}, state, {
                arrayOfBehavioralIncidents: action.payload,
                clientNameB: 'MUST HAVE VALUE',
                dateB: 0,
                durationB: 0,
                behaviorExhibitedB: 'MUST HAVE VALUE',
                antecedentB: 'MUST HAVE VALUE',
                descriptionOfIncidentB: 'MUST HAVE VALUE',
                actionTakenB: 'MUST HAVE VALUE',
                staffInvolvedB: 'MUST HAVE VALUE',
                clientsInvolvedB: 'MUST HAVE VALUE'
            })

        case UPDATE_CLIENT_NAME_M:
            return Object.assign({}, state, { clientNameM: action.payload })

        case UPDATE_DATE_M:
            return Object.assign({}, state, { dateM: action.payload })

        case UPDATE_DURATION_M:
            return Object.assign({}, state, { durationM: action.payload })

        case UPDATE_BEHAVIOR_EXHIBITED_M:
            return Object.assign({}, state, { behaviorExhibitedM: action.payload })

        case UPDATE_ANTECEDENT_M:
            return Object.assign({}, state, { antecedentM: action.payload })

        case UPDATE_DESCRIPTION_OF_INCIDENT_M:
            return Object.assign({}, state, { descriptionOfIncidentM: action.payload })

        case UPDATE_ACTION_TAKEN_M:
            return Object.assign({}, state, { actionTakenM: action.payload })

        case UPDATE_STAFF_INVOLVED_M:
            return Object.assign({}, state, { staffInvolvedM: action.payload })

        case UPDATE_CLIENTS_INVOLVED_M:
            return Object.assign({}, state, { clientsInvolvedM: action.payload })

        case UPDATE_ALL_M_FULFILLED:
            return Object.assign({}, state, {
                arrayOfMedicalIncidents: action.payload,
                clientNameM: 'MUST HAVE VALUE',
                dateM: 0,
                durationM: 0,
                behaviorExhibitedM: 'MUST HAVE VALUE',
                antecedentM: 'MUST HAVE VALUE',
                descriptionOfIncidentM: 'MUST HAVE VALUE',
                actionTakenM: 'MUST HAVE VALUE',
                staffInvolvedM: 'MUST HAVE VALUE',
                clientsInvolvedM: 'MUST HAVE VALUE'
            })

        case MAKE_EDITABLE:
            return Object.assign({}, state, { editable: !state.editable }
            )

        case CHANGE_GRAPH_1:
            return Object.assign({}, state, { medOrBeh1: !state.medOrBeh1 })

        case CHANGE_GRAPH_2:
            return Object.assign({}, state, { medOrBeh2: !state.medOrBeh2 })

        case MED_OR_BEH_INCIDENT_COLUMN:
            return Object.assign({}, state, {medOrBehIncidentColumn: !state.medOrBehIncidentColumn})

        case DELETE_BEH_REPORT_FULFILLED:
            console.log('fulfilled')
            return Object.assign({}, state, { arrayOfBehavioralIncidents: action.payload })

        case DELETE_MED_REPORT_FULFILLED:
            console.log('fulfilled')
            return Object.assign({}, state, { arrayOfMedicalIncidents: action.payload })

       
        case GET_BEH_INCIDENTS_GRAPH_1_FULFILLED:

            let returnArray1 = []
            let lastDay1 = new Date();
            // console.log(lastDay1, 'this should be today')
            let y1 = lastDay1.getFullYear();
            let m1 = lastDay1.getMonth();
            let d1 = lastDay1.getDate();
            for (var i = 0; i <= 30; i++) {
                var day1 = new Date(y1, m1, d1 - 30 + i).toDateString();

                returnArray1.push(day1)

            }
            // console.log(returnArray1)
            // console.log(action.payload)
            let arrayOfCounts1 = returnArray1.map((ele) => {
                var count1 = 0;
                for (let i = 0; i < action.payload.length; i++) {
                    let payload1 = new Date(action.payload[i].incident_date)
                    let eleDate1 = new Date(ele)

                    if (eleDate1.getUTCDate() === payload1.getUTCDate()) {
                        count1++;
                        // console.log(count1)
                    }
                }
                return count1

            })
            // console.log(arrayOfCounts1)
            return Object.assign({}, state, {
                arrayOfBehCounts1: arrayOfCounts1,
                arrayofBehDateStrings1: returnArray1
            })

       
        case GET_BEH_INCIDENTS_GRAPH_2_FULFILLED:

            let returnArray2 = []
            let lastDay2 = new Date();
            // console.log(lastDay2, 'this should be today')
            let y2 = lastDay2.getFullYear();
            let m2 = lastDay2.getMonth();
            let d2 = lastDay2.getDate();
            for (var i = 0; i <= 30; i++) {
                var day2 = new Date(y2, m2, d2 - 30 + i).toDateString();

                returnArray2.push(day2)

            }
            // console.log(returnArray2)
            // console.log(action.payload)
            let arrayOfCounts2 = returnArray2.map((ele) => {
                var count2 = 0;
                for (let i = 0; i < action.payload.length; i++) {
                    let payload2 = new Date(action.payload[i].incident_date)
                    let eleDate2 = new Date(ele)

                    if (eleDate2.getUTCDate() === payload2.getUTCDate()) {
                        count2++;
                        // console.log(count2)
                    }
                }
                return count2

            })
            // console.log(arrayOfCounts2)
            return Object.assign({}, state, {
                arrayOfBehCounts2: arrayOfCounts2,
                arrayofBehDateStrings2: returnArray2
            })
        
        case GET_MED_INCIDENTS_GRAPH_1_FULFILLED:

            let returnArray3 = []
            let lastDay3 = new Date();
            console.log(lastDay3, 'this should be today')
            let y3 = lastDay3.getFullYear();
            let m3 = lastDay3.getMonth();
            let d3 = lastDay3.getDate();
            for (var i = 0; i <= 30; i++) {
                var day3 = new Date(y3, m3, d3 - 30 + i).toDateString();

                returnArray3.push(day3)

            }
            // console.log(returnArray3)
            // console.log(action.payload)
            let arrayOfCounts3 = returnArray3.map((ele) => {
                // console.log(action.payload)
                var count3 = 0;
                for (let i = 0; i < action.payload.length; i++) {
                    let payload3 = new Date(action.payload[i].incident_date)
                    let eleDate3 = new Date(ele)

                    if (eleDate3.getUTCDate() === payload3.getUTCDate()) {
                        count3++;
                        // console.log(count3)
                    }
                }
                return count3

            })
            // console.log(arrayOfCounts3)
            return Object.assign({}, state, {
                arrayOfMedCounts1: arrayOfCounts3,
                arrayofMedDateStrings1: returnArray3
            })

            case GET_MED_INCIDENTS_GRAPH_2_FULFILLED:

            let returnArray4 = []
            let lastDay4 = new Date();
            console.log(lastDay4, 'this should be today')
            let y4 = lastDay4.getFullYear();
            let m4 = lastDay4.getMonth();
            let d4 = lastDay4.getDate();
            for (var i = 0; i <= 30; i++) {
                var day4 = new Date(y4, m4, d4 - 30 + i).toDateString();

                returnArray4.push(day4)

            }
            console.log(returnArray4)
            console.log(action.payload)
            let arrayOfCounts4 = returnArray4.map((ele) => {
                var count4 = 0;
                for (let i = 0; i < action.payload.length; i++) {
                    let payload4 = new Date(action.payload[i].incident_date)
                    let eleDate4 = new Date(ele)

                    if (eleDate4.getUTCDate() === payload4.getUTCDate()) {
                        count4++;
                        console.log(count4)
                    }
                }
                return count4

            })
            console.log(arrayOfCounts4)
            return Object.assign({}, state, {
                arrayOfMedCounts2: arrayOfCounts4,
                arrayofMedDateStrings2: returnArray4
            })
        default: return state
    }
}

export function getBehIncidents() {
    return {
        type: GET_BEH_INCIDENTS,
        payload: services.getBehIncidents()
    }
}
export function getMedIncidents() {
    let data = services.getMedIncidents()
    console.log(data, 'asdjjfhkladsjhf')
    return {
        type: GET_MED_INCIDENTS,
        payload: data
    }
}
export function deleteBehReport(id) {
    return {
        type: DELETE_BEH_REPORT,
        payload: services.deleteBehReport(id)
    }
}
export function updateAllB(clientNameB, dateB, durationB, behaviorExhibitedB, antecedentB, descriptionOfIncidentB, actionTakenB, staffInvolvedB, clientsInvolvedB, id) {
    return {
        type: UPDATE_ALL_B,
        payload: services.updateBehReport(
            clientNameB,
            dateB,
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
export function deleteMedReport(id) {
    return {
        type: DELETE_MED_REPORT,
        payload: services.deleteMedReport(id)
    }
}
export function updateAllM(clientNameM, dateM, durationM, behaviorExhibitedM, antecedentM, descriptionOfIncidentM, actionTakenM, staffInvolvedM, clientsInvolvedM, id) {
    return {
        type: UPDATE_ALL_M,
        payload: services.updateMedReport(
            clientNameM,
            dateM,
            durationM,
            behaviorExhibitedM,
            antecedentM,
            descriptionOfIncidentM,
            actionTakenM,
            staffInvolvedM,
            clientsInvolvedM,
            id
        )
    }
}
export function changeClientNameM(value) {
    return {
        type: UPDATE_CLIENT_NAME_M,
        payload: value
    }
}
export function changeDateM(value) {
    return {
        type: UPDATE_DATE_M,
        payload: value
    }
}
export function changeDurationM(value) {
    return {
        type: UPDATE_DURATION_M,
        payload: value
    }
}
export function changeBehaviorExhibitedM(value) {
    return {
        type: UPDATE_BEHAVIOR_EXHIBITED_M,
        payload: value
    }
}
export function changeAntecedentM(value) {
    return {
        type: UPDATE_ANTECEDENT_M,
        payload: value
    }
}
export function changeDescriptionOfIncidentM(value) {
    return {
        type: UPDATE_DESCRIPTION_OF_INCIDENT_M,
        payload: value
    }
}
export function changeActionTakenM(value) {
    return {
        type: UPDATE_ACTION_TAKEN_M,
        payload: value
    }
}
export function changeStaffInvolvedM(value) {
    return {
        type: UPDATE_STAFF_INVOLVED_M,
        payload: value
    }
}
export function changeClientsInvolvedM(value) {
    return {
        type: UPDATE_CLIENTS_INVOLVED_M,
        payload: value
    }
}
export function getBehIncidentsGraph1(value) {
    // console.log(value)
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
export function getMedIncidentsGraph1(value) {
    console.log(value)
    return {
        type: GET_MED_INCIDENTS_GRAPH_1,
        payload: services.getMedIncidentsGraph(value)
    }
}
export function getMedIncidentsGraph2(value) {
    console.log(value)
    return {
        type: GET_MED_INCIDENTS_GRAPH_2,
        payload: services.getMedIncidentsGraph(value)
    }
}
export function changeGraph1() {
    return {
        type: CHANGE_GRAPH_1,
        payload: ''
    }
}
export function changeGraph2() {
    return {
        type: CHANGE_GRAPH_2,
        payload: ''
    }
}
export function medOrBehIncidentColumn(){
    return{
        type: MED_OR_BEH_INCIDENT_COLUMN,
        payload: ''
    }
}