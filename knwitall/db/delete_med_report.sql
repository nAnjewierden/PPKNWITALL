DELETE FROM med_reports
WHERE (med_reports.id = $1);

SELECT * FROM med_reports;
