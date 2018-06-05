SELECT * FROM med_reports 
WHERE 
client_name = $1
and
incident_date < current_timestamp 
and 
incident_date > current_timestamp - INTERVAL '1 month'