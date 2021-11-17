const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

//1
school.findPerson = (type, id) => {
  if (type === "student") type = "students";
  else type = "teachers";
  return school[type].find((item) => item.id === id);
};
//console.log(school.findPerson("student", 13));

//console.log(school);

//2
school.assignStudent = (subject, studentId) => {
  let teacher = school.teachers.find(
    (item) =>
      item.subjects.includes(subject) &&
      item.capacityLeft > item.students.length
  );
  if (teacher) {
    teacher.students.push(studentId);
    return "Student assigned successfully";
  } else return "Sorry, no available teachers left";
};
//console.log(school.assignStudent("history", 10));
//console.log(school.assignStudent("history", 11));
//console.log(school.assignStudent("history", 12));
//console.log(school.assignStudent("history", 13));
//console.log(school.teachers);

//3
school.assignTeachersSubject = (newSubject, teacherId) => {
  let teacher = school.teachers.find((item) => item.id === teacherId);
  if (teacher.subjects.includes(newSubject))
    return `The ${newSubject} subject already exist to the teacher`;
  else {
    teacher.subjects.push(newSubject);
    return "Subject assigned successfully to the teacher";
  }
};
//console.log(school.assignTeachersSubject("history", 2));
//console.log(school.assignTeachersSubject("history", 1));
//console.log(school.teachers);

//4 my method checks the average age of students

school.avgStudentAge = () => {
  let age = [];
  school.students.forEach((item) => {
    age.push(item.age);
  });
  return (
    age.reduce((acc, val) => {
      return acc + val;
    }) / age.length
  );
};

//console.log(school.avgStudentAge());
