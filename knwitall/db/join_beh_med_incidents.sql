SELECT clients.client_name, behavior_exhibited, incident_date
FROM clients
FULL OUTER JOIN beh_reports
ON beh_reports.client_name
= clients.client_name
where clients.client_name = 'Client1'