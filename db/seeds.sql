INSERT INTO departments(name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');
INSERT INTO roles(title, salary, department_id)
VALUES
  ('Sales Lead', 100000, 1),
  ('Salesperson', 80000, 1),
  ('Lead Engineer', 150000, 2),
  ('Software Engineer', 120000, 2),
  ('Account Manager', 160000, 3),
  ('Accountant', 125000, 3),
  ('Legal Team Lead', 250000, 4),
  ('Lawyer', 190000, 4);
INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
  ('Jonathan','Berrang', 1, NULL),
  ('Brooke','DiCicco', 2, 1),
  ('Robert','Ciszek', 3, NULL),
  ('Thomas','Ciszek', 4, 3),
  ('Sebastian','Robertson', 5, NULL),
  ('Duncan','FV', 6, 5),
  ('Joseph','Ciszek', 7, NULL),
  ('Morgan','Pangle', 8, 7);