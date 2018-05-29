SELECT beh_reports.client_name, beh_reports.behavior_exhibited, beh_reports.incident_time, med_reports.incidentType
FROM beh_reports JOIN med_reports
ON beh_reports.incident_date = med_reports.incident_date;
//medical
SELECT clients.client_name, incident_type, incident_date
FROM clients
FULL OUTER JOIN med_reports
ON med_reports.client_name
= clients.client_name
where clients.client_name = 'Client3'
//behavior
SELECT clients.client_name, behavior_exhibited, incident_date
FROM clients
FULL OUTER JOIN beh_reports
ON beh_reports.client_name
= clients.client_name
where clients.client_name = 'Client1'