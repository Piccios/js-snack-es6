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

// stampare in console la bicicletta con peso minore utilizzando destructuring e template literal

const lightestBike = bikes.reduce((minBike, currentBike) => {
    return currentBike.weight < minBike.weight ? currentBike : minBike;
});

const { name, weight } = lightestBike;

console.log(`The bike with the least weight is ${name} with a weight of ${weight} kg.`);