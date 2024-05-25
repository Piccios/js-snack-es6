// snack 3 //

const bikes = [
    {
    name: "mountain bike",
    weight: 35
    },
    {
    name: "BMX",
    weight: 20
    },
    {
    name: "racing",
    weight: 15
    },
    {
    name: "city bike",
    weight: 18
    },
    {
    name: "electric",
    weight: 39
    },
    {
    name: "risciò",
    weight: 95
    },
]

const lightestBike = bikes.reduce((minBike, currentBike) => {
    return currentBike.weight < minBike.weight ? currentBike : minBike;
});

const { name, weight } = lightestBike;

console.log(`The bike with the least weight is ${name} with a weight of ${weight} kg.`);


//  snack 4 //

const squadreCalcio = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// assegnare dei valori alle proprieta' settate a 0  utilizzare una funzione che assegni i numeri randomicamente