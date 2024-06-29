import { Departments, Employees, db } from "./models.js";
import { Op } from "sequelize";

await db.sync({ force: true });

const legal = await Departments.create({
  deptCode: "legal",
  phone: " 555-2222",
  deptName: "Legal",
});

const mktg = await Departments.create({
  deptCode: "mktg",
  deptName: "Marketing",
  phone: "555-9999",
});

const fin = await Departments.create({
  deptCode: "fin",
  deptName: "Finance",
  phone: "555-1000",
});

const liz = await Employees.create({
  name: "Liz",
  deptCode: "legal",
  salary: 100001,
  state: "CA",
});

const peter = await Employees.create({
  name: "Peter",
  deptCode: "legal",
  salary: 100002,
  state: "CA",
});

const leonard = await Employees.create({
  name: "Leonard",
  deptCode: "legal",
  salary: 90000,
});

// console.log(leonard.salary);
// leonard.salary = 1000000;
// leonard.name = 'Eva'
// await leonard.save();
// console.log(leonard);
// console.log(JSON.stringify(leonard, null, 3));

const maggie = await Employees.create({
  name: "Maggie",
  deptCode: "mktg",
  salary: 70000,
  state: "CA",
});

const nullish = await Employees.create({
  name: "Null",
  salary: 70000,
  state: "CA",
});

// await maggie.destroy()

const employees = await Employees.findAll();
// console.log(employees);

const primaryKey = await Employees.findByPk(2);
// console.log(primaryKey);

const allCali = await Employees.findAll({
  where: { state: 'CA', salary: 100000  }
})
// console.log(allCali);

const sixFigEmployees = await Employees.findAll({
  where: {
    [Op.or]: [
      { salary: { [Op.gte]: 100000 }},
      { deptCode: { [Op.is]: null}}
    ]
  }
})

// console.log(sixFigEmployees);

const firstEmp = await Employees.findOne();
// console.log(firstEmp);
// console.log(await firstEmp.getDepartment());

const marketing = await Departments.findByPk('mktg');
// console.log(marketing);
// console.log(await marketing.getEmployees());

const newEmp = await Employees.create({name: 'Jane'});
await newEmp.setDepartment(marketing);
// console.log(newEmp);


async function quiz (dept) {
  // console.log(dept);
  const allEmps = await dept.getEmployees()
  // console.log(allEmps);

  return allEmps.map( (emp) => emp.name);
}

console.log(await quiz(marketing));
console.log(await quiz(legal));
console.log(await quiz(fin));


await db.close();