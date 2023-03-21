const people = [
    {
        numberOfChildren: 2,
        salary: 2000
    },
    {
        numberOfChildren: 5,
        salary: 3000
    },
    {
        numberOfChildren: 0,
        salary: 2500
    },
    {
        numberOfChildren: 2,
        salary: 1000
    }, {
        numberOfChildren: 0,
        salary: -2000
    },
]















function findAverageAndHighestSalary(peopleinformation) {

    let i = 0;
    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0
    while (peopleinformation[i].salary > 0) {
        averageSalary = averageSalary + peopleinformation[i].salary
        averageChildren += peopleinformation[i].numberOfChildren
        peopleinformation[i].salary > highestSalary ? highestSalary = peopleinformation[i].salary : highestSalary = highestSalary
        i++
    }
    console.log(`media de salario R$${(averageSalary / i).toFixed(0)}`)
    console.log(`media de filhos ${(averageChildren / i).toFixed(0)}`)
    console.log(`maior salario R$${highestSalary}`)

}

findAverageAndHighestSalary(people)
