DELETE FROM beh_reports
WHERE (beh_reports.id = $1);

SELECT * FROM beh_reports;
