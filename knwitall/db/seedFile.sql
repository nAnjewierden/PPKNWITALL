CREATE TABLE IF NOT EXISTS med_reports(
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(40),
    incident_date INTEGER,
    incident_time INTEGER,
    duration INTEGER,
    incident_type TEXT,
    antecedent VARCHAR(500),
    description_of_incident VARCHAR(3000),
    action_taken VARCHAR(500),
    staff_involved TEXT,
    clients_involved TEXT
);

CREATE TABLE IF NOT EXISTS beh_reports(
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(40),
    incident_date INTEGER,
    incident_time INTEGER,
    duration INTEGER,
    behavior_exhibited TEXT,
    antecedent VARCHAR(500),
    description_of_incident VARCHAR(3000),
    action_taken VARCHAR(500),
    staff_involved TEXT,
    clients_involved TEXT
);