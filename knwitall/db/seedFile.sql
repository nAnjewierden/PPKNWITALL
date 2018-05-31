CREATE TABLE if not EXISTS clients(

client_name varchar(40) PRIMARY KEY
);
insert into clients
(client_name)
values
('Client1'),
('Client2'),
('Client3'),
('Client4'),
('Client5')
 on conflict do nothing;


CREATE TABLE IF NOT EXISTS med_reports(
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(40) references clients,
    incident_date date,
    incident_time integer,
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
    client_name VARCHAR(40) references clients,
    incident_date date,
    incident_time integer,
    duration INTEGER,
    behavior_exhibited TEXT,
    antecedent VARCHAR(500),
    description_of_incident VARCHAR(3000),
    action_taken VARCHAR(500),
    staff_involved TEXT,
    clients_involved TEXT
);

