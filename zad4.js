const _ = require('lodash');

const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5, 4, 3, 5, 2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
}

const findSubjectByWeight = (user, weight) => {
    const { allGrades } = user;

    const { subjectName } = _.find(allGrades, o => o.weight === weight)

    console.log(`Subject: ${subjectName} Weight: ${weight}`);
}

findSubjectByWeight(user, 1);