UPDATE beh_reports
SET client_name = $1,
     incident_date = $2,
     duration = $3,
     behavior_exhibited = $4,
     antecedent = $5,
     description_of_incident = $6,
     action_taken = $7,
     staff_involved = $8,
     clients_involved = $9
WHERE beh_reports.id = $10;

SELECT * FROM beh_reports;