INSERT INTO department
(id, name)
VALUES
(1, 'Sales');
INSERT INTO department
(id, name)
VALUES
(2, 'Engineering');
INSERT INTO department
(id, name)
VALUES
(3, 'Finance');


INSERT INTO role
(id, title, salary, department_id)
VALUES
(1, 'Manager', 190000, 2);
INSERT INTO role
(id, title, salary, department_id)
VALUES
(2, 'Engineer', 150000, 2);
INSERT INTO role
(id, title, salary, department_id)
VALUES
(3, 'Sales', 100000, 1);
INSERT INTO role
(id, title, salary, department_id)
VALUES
(4, 'Finance', 125000, 3);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 2, 3);
INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Mike', 'Chan', 3, 1);
INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Ashley', 'Rodriguez', 1, null);
INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
-- Ashley is the third employee added to the db so her ID is 3
('Kevin', 'Tupik', 2, 3); 
INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Malia', 'Brown', 4, null);