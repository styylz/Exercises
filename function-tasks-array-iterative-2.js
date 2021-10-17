const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9]
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6]
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6]
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8]
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8]
      }
    ]
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8]
      }
    ]
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8]
      }
    ]
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9]
      }
    ]
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9]
      }
    ]
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
  {
    name: 'Edmundejus',
    surname: 'Sniuras',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 4,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [1, 9, 2, 9, 10]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [10, 1, 6, 2, 2]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
];

console.groupEnd();

console.groupCollapsed('1. Atspausdinti visus Informatikos fakulteto studentus');
{
  students.forEach(x => x.faculty === 'Informatikos fakultetas' ? console.log(x.name) : null)

  console.log(`-----`)
  // forIn loop iteration [! do not use for these tasks]
  // for (const key in students) {
  //   if(students[key].faculty === 'Informatikos fakultetas' )
  //   console.log(students[key].name)
  // }
  // first select faculty later on print all students from that faculty
}
console.groupEnd();

console.groupCollapsed('2. Atspausdinti visus Chemijos fakulteto studentus');
{
  students.forEach(x => x.faculty === 'Chemijos fakultetas' ? console.log(x.name) : null)


}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
{
  students.forEach(x => x.faculty === 'Elektros ir elektronikos fakultetas' ? console.log(x.name) : null)

}
console.groupEnd();

console.groupCollapsed('4. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
{
  const studentsIT = students.filter((student) => student.faculty === 'Informatikos fakultetas');

  function studentsIFAvarageGrades({ name, surname, modules }) {
    const totalCredits = modules.reduce((sum, { credits }) => sum + credits, 0); // total credits of modules
    const weightedSemesterAvgSum = modules.reduce(
      (sum, { marks, credits }) => sum + (marks.reduce((sum, mark) => sum + mark) / marks.length) * credits,
      0
    );
    return {
      fullname: `${name} ${surname}`,
      avg: Math.round((100 * weightedSemesterAvgSum) / totalCredits) / 100,
    };
  }

  console.table(studentsIT.map(studentsIFAvarageGrades));
}
console.groupEnd();

console.groupCollapsed('5. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
{

  const chemistryStudents = students.filter((stud) => stud.faculty === 'Chemijos fakultetas')

  function studentsChemAvarageGrades({name, surname, modules}) {
    const totalCreds = modules.reduce((sum, {credits}) => sum + credits, 0);
    const weightedSemesterAvgSum = modules.reduce((sum, {marks, credits}) => sum + (marks.reduce((sum, mark) => sum + mark) / marks.length) * credits, 0);

  return {
    fullname: `${name} ${surname}`,
    avg: Math.round((100 * weightedSemesterAvgSum) / totalCreds) / 100
  }
}
console.table(chemistryStudents.map(studentsChemAvarageGrades))
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
{
  const eElectronicsStudents = students.filter((stud) => stud.faculty === 'Elektros ir elektronikos fakultetas')

  function eElectronAvgGrades ({name, surname, modules}) {
    const totalCreds = modules.reduce((sum, {credits}) => sum + credits, 0);
    const weightedSemesterAvgSum = modules.reduce((sum, {marks, credits}) => sum + (marks.reduce((sum, mark) => sum + mark) / marks.length) * credits, 0);


  return {
    fullname: `${name} ${surname}`,
    avg: Math.round((100 * weightedSemesterAvgSum) / totalCreds) / 100
  }
  }

  console.table(eElectronicsStudents.map(eElectronAvgGrades))
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinti tik pirmo kurso studentus');
{
  students.forEach(fstud => fstud.course === 1 ? console.log(fstud.name) : null)
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinti tik antro kurso studentus');
{
  students.forEach(fstud => fstud.course === 2 ? console.log(fstud.name) : null)
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinti tik trečio kurso studentus');
{
  students.forEach(fstud => fstud.course === 3 ? console.log(fstud.name) : null)
}
console.groupEnd();

console.groupCollapsed('10. Atspausdinti tik ketvirto kurso studentus');
{
  students.forEach(fstud => fstud.course === 4 ? console.log(fstud.name) : null)

}
console.groupEnd();

// ACARGĖJ
console.groupCollapsed('11. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
{
  function studAvgGrades({ name, surname, modules }) {
    console.log({modules})
    const totalCredits = modules.reduce((sum, { credits }) => sum + credits, 0);
    const weightedSemesterAvgSum = modules.reduce(
      (sum, { marks, credits }) => sum + (marks.reduce((sum, mark) => sum + mark) / marks.length) * credits,
      0
    );
    return {
      fullname: `${name} ${surname}`,
      avg: Math.round((100 * weightedSemesterAvgSum) / totalCredits) / 100,
    };
  }

  console.table(students.map(studAvgGrades));



}

