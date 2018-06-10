UPDATE med_reports
SET client_name = $1,
     duration = $2,
     incident_type = $3,
     antecedent = $4,
     description_of_incident = $5,
     action_taken = $6,
     staff_involved = $7,
     clients_involved = $8
WHERE med_reports.id = $9;

SELECT * FROM med_reports;