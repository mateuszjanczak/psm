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

    const avgSubjectGrades = allGrades.map(({ subjectName, grades, weight }) => {
        const avg = grades.reduce((acc, elem) => acc + elem, 0) / grades.length;
        return { subjectName, avg, weight };
    })

    const avgUser = avgSubjectGrades.reduce((acc, { avg, weight }) => acc + avg * weight, 0) / avgSubjectGrades.reduce((acc, { weight }) => acc + weight, 0);

    console.log(`Average for ${name} ${surname} is ${avgUser}`);
}

calculateWeightedAverage(user);