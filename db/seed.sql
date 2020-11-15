USE employee2_db;

INSERT INTO roles (title, salary)
values ('Sales Lead', 100000), 
('Salesperson', 80000), 
('Lead Enginerr', 150000), 
('Software Engineer', 120000),
('Accountant', 85000),
('Legal Team Lead', 110000),
('Lawyer', 80000);

INSERT INTO department (department) 
values ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO employee (first_name, last_name, roles_id, department_id) 
VALUES ('Michael', 'Caine', 1, 1), ('Lisa', 'Simpon', 2, 1), ('Mister', 'Linux', 3, 2),
('Robert', 'Hardy', 4, 2), ('Mary', 'Rudolf', 5, 3), ('Priya', 'Smith', 6, 4), 
('Roberta', 'Roberts', 7, 4);
