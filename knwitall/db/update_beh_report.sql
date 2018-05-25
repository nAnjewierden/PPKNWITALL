UPDATE beh_reports
SET client_name = $1,
     incident_date = $2,
     incident_time = $3,
     duration = $4,
     behavior_exhibited = $5,
     antecedent = $6,
     description_of_incident = $7,
     action_taken = $8,
     staff_involved = $9,
     clients_involved = $10
WHERE beh_reports.id = $11;

SELECT * FROM beh_reports;