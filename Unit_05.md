# Table of Contents

- [Table of Contents](#table-of-contents)
  - [05.01 - SQL 1](#0501---sql-1)
    - [Lab: SQL Quiz](#lab-sql-quiz)
  - [05.02 - SQL 2](#0502---sql-2)
    - [Lab: Project Tracker](#lab-project-tracker)
  - [05.03 - Classes and Object-Oriented Programming](#0503---classes-and-object-oriented-programming)
    - [Lab: Animal Shelter](#lab-animal-shelter)
    - [Lab: Recreate Arrays](#lab-recreate-arrays)
  - [05.04 - Sequelize 1](#0504---sequelize-1)
    - [Code Along: Movie Ratings, Part 1](#code-along-movie-ratings-part-1)
    - [Lab: Movie Ratings, Part 2](#lab-movie-ratings-part-2)
  - [05.05 - Sequelize 2](#0505---sequelize-2)
    - [Code Along: Movie Ratings, Part 3](#code-along-movie-ratings-part-3)
    - [Lab: Movie Ratings, Part 4](#lab-movie-ratings-part-4)

## 05.01 - SQL 1

|  |  |
| :---: | :---: |
| Lecture Recording | [Link](https://strategiced.zoom.us/rec/share/1mchWcTeKl-Jzx5UkPzfETIK5ko3X6naiDx1ykQKfc_zmWgN8tL5cPsmfuRH6vje.PO2DVa7wBI_ZDaRn?startTime=1718153844000) |
| Slides | [Link](https://ed.devmountain.com/materials/ogptlh2/slides/wb-sql-1/) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-sql-1/) |
| dmget | `dmget wb-sql-1 --demo` |

### Lab: SQL Quiz

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-sql-quiz/) |
| dmget | `dmget wb-sql-quiz` |

> [Back to Table of Contents](#table-of-contents)

## 05.02 - SQL 2

|  |  |
| :---: | :---: |
| Lecture Recording | [Todo](https://strategiced.zoom.us/rec/share/xHXTSyO8dL9LXzCYofoXoBghW8uI74t_LmM0Zm-HQud8jXPWA-zdaTMCiRZ6xI1j.HHP1s87QLp4MAG9n?startTime=1718325365000) |
| Slides | [Link](https://ed.devmountain.com/materials/ogptlh2/slides/wb-sql-2/) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-sql-2/) |
| dmget | `na` |

Seed Data

```sql
CREATE TABLE departments (
    dept_code VARCHAR(10) PRIMARY KEY,
    dept VARCHAR(20) NOT NULL,
    phone VARCHAR(20));

INSERT INTO Departments VALUES('mktg','Marketing','555-1212');
INSERT INTO Departments VALUES('legal','Legal','555-1000');
INSERT INTO Departments VALUES('fin','Finance','555-9876');

CREATE TABLE Employees(
    id SERIAL PRIMARY KEY,
    fname VARCHAR(20) NOT NULL,
    lname VARCHAR(20) NOT NULL,
    salary INTEGER,
    full_time BOOLEAN NOT NULL DEFAULT True,
    start_date DATE,
    dept_code VARCHAR(10)
      REFERENCES Departments
    );

INSERT INTO Employees (fname, lname, salary, full_time, start_date, dept_code)
  VALUES('Liz','Lemon',90000,True,NULL,'legal'),
        ('Maggie','McEnroe',70000,True,NULL,'mktg'),
        ('Leonard','Lancelot',90000,True,NULL,'legal'),
        ('Nadine','Nelson',NULL,False,NULL,NULL)
        ;
```

### Lab: Project Tracker

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-project-tracker/) |
| dmget | `na` |

> [Back to Table of Contents](#table-of-contents)

## 05.03 - Classes and Object-Oriented Programming

|  |  |
| :---: | :---: |
| Lecture Recording | [Todo](https://strategiced.zoom.us/rec/share/mOwQ-j7hWw-TWNKz61NSIb5yEkEq78IWVldvP9YSu54lmDBjIbkgYQYn3RPI-Qjf.RcXXz7pSijtsadbh?startTime=1718466508000) |
| Slides | [Link](https://ed.devmountain.com/materials/ogptlh2/slides/wb-classes/) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-classes/) |
| dmget | `dmget wb-classes --demo` |

### Lab: Animal Shelter

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-animal-shelter/) |
| dmget | `dmget wb-animal-shelter` |

### Lab: Recreate Arrays

|  |  |
| :---: | :---: |
| Handout | [Link](https://github.com/Diegopie-Devmountain/Lab-Recreate-Arrays) |
| dmget | `git clone git@github.com:Diegopie-Devmountain/Lab-Recreate-Arrays.git` |

> [Back to Table of Contents](#table-of-contents)

## 05.04 - Sequelize 1

|  |  |
| :---: | :---: |
| Lecture Recording | [Todo](https://strategiced.zoom.us/rec/share/mOwQ-j7hWw-TWNKz61NSIb5yEkEq78IWVldvP9YSu54lmDBjIbkgYQYn3RPI-Qjf.RcXXz7pSijtsadbh?startTime=1718481672000) |
| Sequelize 1 Part 2  | [Todo](https://strategiced.zoom.us/rec/share/0FI0o6DJN6U0DLVMZ8wwzVOFrrg9LnCPNHUeKzmKC6LqjsVQToZo5HwKKIG6M_Fa.8kHUV-KGxqEWUaPD?startTime=1718755440000) |
| Slides | [Link](https://ed.devmountain.com/materials/ogptlh2/slides/wb-sequelize-1/) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-sequelize-1/) |
| dmget | `dmget wb-sequelize-1 --demo` |

### Code Along: Movie Ratings, Part 1

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-ratings-1/) |
| dmget | `dmget wb-ratings-1` |
| Recording @ 01:01:29 | [Todo](https://strategiced.zoom.us/rec/share/0FI0o6DJN6U0DLVMZ8wwzVOFrrg9LnCPNHUeKzmKC6LqjsVQToZo5HwKKIG6M_Fa.8kHUV-KGxqEWUaPD?startTime=1718755440000) |

### Lab: Movie Ratings, Part 2

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-ratings-2/) |
| dmget | `dmget wb-ratings-1 --solution` |

> [Back to Table of Contents](#table-of-contents)

## 05.05 - Sequelize 2

|  |  |
| :---: | :---: |
| Lecture Recording | [Todo](https://strategiced.zoom.us/rec/share/YVdWB77XHvlWIBPwbajrttNrhD3dc5eWoe1WR2An3J-4RIkWNlpbA7G98xGa9eSo.WiCtkex429wyGu5x?startTime=1718932940000) |
| Slides | [Link](https://ed.devmountain.com/materials/ogptlh2/slides/wb-sequelize-2/) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-sequelize-2/) |
| dmget | `[dmget](dmget wb-sequelize-2 --demo)` |

### Code Along: Movie Ratings, Part 3

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-ratings-3/) |
| dmget | `dmget wb-ratings-2 --solution` |
| Recording | [Link](https://strategiced.zoom.us/rec/share/m-_tUCnyEHz6v314nN4fgyAKd0eSuvexLHvTltvO4j0JtMcnqVPQCGDce0zEcW9R.hsIe85MNrS23ohW7?startTime=1719535475000) |

### Lab: Movie Ratings, Part 4

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-ratings-4/) |
| dmget | `dmget wb-ratings-3 --solution` |

> [Back to Table of Contents](#table-of-contents)
