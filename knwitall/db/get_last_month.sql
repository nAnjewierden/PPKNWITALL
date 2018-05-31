SELECT * FROM beh_reports 
WHERE 
incident_date < current_timestamp 
and 
incident_date > current_timestamp - INTERVAL '1 month'