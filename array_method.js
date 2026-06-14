const students = [
  {
    id: 1,
    name: "Rahim",
    age: 20,
    marks: 85,
    department: "CSE",
    isPassed: true,
    company : null
  },
  {
    id: 2,
    name: "Karim",
    age: 22,
    marks: 45,
    department: "EEE",
    isPassed: false,
    company : null
  },
  {
    id: 3,
    name: "Jannat",
    age: 21,
    marks: 92,
    department: "CSE",
    isPassed: true,
    company : null
  },
  {
    id: 4,
    name: "Nusrat",
    age: 23,
    marks: 65,
    department: "BBA",
    isPassed: true,
    company : null
  },
  {
    id: 5,
    name: "Sakib",
    age: 20,
    marks: 38,
    department: "CSE",
    isPassed: false,
    company : null
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
  const newStu = students.filter (st => st.isPassed === false && st.id === 1);

  if (newStu != 0) {
    // console.log('right information');
  }
  else {
    // console.log('wrong information'); 
  }

  // console.log(newStu);

  // find
   const age = students.find (st => st.age < 30 && st.marks < 20);
  //  console.log(age);
   
  // chaining method
  const studentInfo = students.filter (st => st.department === 'CSE' && st.age < 30).map (st => ({...st, job: 'web-development', company : st.company?.name}));
  console.log(studentInfo);
  
  // reduce
  const arr = [10, 30, 20, 45];
  // let sum = 0;
  // for (const n of arr) {
  //   sum += n;   //sum = sum + n;
  // }
  // console.log(sum);

const total = arr.reduce ((acc, curr) => acc + curr, 0);
console.log(total);

  