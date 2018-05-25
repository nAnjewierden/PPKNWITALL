const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config();
const app = express()

app.use(bodyParser.json())
app.use(express.static('/../public/build'))

massive(process.env.CONNECTION_STRING).then((dbInstance)=> {
    dbInstance.seedFile()
    .then(res => console.log('that sucSEEDed...'))
    .catch(err => console.log('aww shit..', err))

    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.get('/api/getBehIncidents',
    (req, res, next) => {
        console.log('hit it')
        // const dbInstance = req.app.get('db')
        req.app.get('db').get_beh_reports().then(
            beh_reports => {
                res.status(200).send(beh_reports)
            }
        )
    })

app.post('/api/reportM', 
    (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {clientName, date, time, duration, incidentType, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved} = req.body
    dbInstance.new_med_report([clientName, date, time, duration, incidentType, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved])
    .then(() => res.status(200).send('that workedM'))
    .catch((err) => console.log(err))
})

app.post('/api/reportB', 
    (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {clientName, date, time, duration, behaviorExhibited, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved} = req.body
    dbInstance.new_beh_report([clientName, date, time, duration, behaviorExhibited, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved])
    .then(() => res.status(200).send('that workedB'))
    .catch((err) => console.log(err))
})

app.delete('/api/deleteBehIncident/:id',
(req, res, next) => {

    const dbInstance = req.app.get('db')
    dbInstance.delete_beh_report(req.params.id)
    .then((behReports) => {

    res.status(200).send(behReports)
    })
}
)

app.put('/api/updateBehIncident/:id',
(req, res, next) => {
    const dbInstance = req.app.get('db')
    const {clientName, date, time, duration, behaviorExhibited, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved} = req.body
    console.log(req.body)
    console.log({clientName, date, time, duration, behaviorExhibited, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved})
    dbInstance.update_beh_report([clientName, date, time, duration, behaviorExhibited, antecedent, descriptionOfIncident, actionTaken, staffInvolved, clientsInvolved, req.params.id])
    .then((behReports) => {
        res.status(200).send(behReports)
    })
})
const port = 4000
app.listen(port, ( () => {console.log('YAY')}))