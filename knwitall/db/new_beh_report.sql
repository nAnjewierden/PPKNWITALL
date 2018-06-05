INSERT INTO beh_reports
(   client_name,
    incident_date,
    duration,
    behavior_exhibited,
    antecedent,
    description_of_incident,
    action_taken,
    staff_involved,
    clients_involved)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9)