const students = [
  {
    id: 1,
    name: "Rahim",
    age: 20,
    marks: 85,
    department: "CSE",
    isPassed: true,
  },
  {
    id: 2,
    name: "Karim",
    age: 22,
    marks: 45,
    department: "EEE",
    isPassed: false,
  },
  {
    id: 3,
    name: "Jannat",
    age: 21,
    marks: 92,
    department: "CSE",
    isPassed: true,
  },
  {
    id: 4,
    name: "Nusrat",
    age: 23,
    marks: 65,
    department: "BBA",
    isPassed: true,
  },
  {
    id: 5,
    name: "Sakib",
    age: 20,
    marks: 38,
    department: "CSE",
    isPassed: false,
  },
];

// map
// const newStudent = students.map (stu => 
//    stu.isPassed === true 
//     ? {...stu, isGood : true} 
//     : {...stu, isGood : false})
//     console.log(newStudent);

const newStudent = students.map (stu => {
  return {...stu, isGood : stu.isPassed === true ? true : false}
} )
    // console.log(newStudent);

  // filter
  const newStu = students.filter (st => st.isPassed === false);
  console.log(newStu);
   