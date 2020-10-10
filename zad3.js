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

const calculateWeightedAverage = (user) => {
    const { name, surname, allGrades } = user;

    const subjectGrades = allGrades.map(value => {
        const { weight, grades } = value;
        const { length } = grades;

        const sum = grades.reduce((acc, elem) => acc + elem);

        return { sum, weight, length };
    });

    const numerator = subjectGrades.map(value => value.sum * value.weight).reduce((acc, elem) => acc + elem);
    const denominator = subjectGrades.map(value => value.weight * value.length).reduce((acc, elem) =>  acc + elem);
    const avg = numerator / denominator;

    console.log(`Average for ${name} ${surname} is ${avg}`)
}

calculateWeightedAverage(user);