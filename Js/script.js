// Snack 1

// const invitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

// const tavoloVip = invitati.map((string, index) => ({
//     tavolo: "TavoloVip",
//     nome: string,
//     posto: index + 1,
// }))

// console.log(tavoloVip)


// Snack 2

const students = [
    {
        id: 213,
        name: "Giuseppina della Rovere",
        grades: 78
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84
    }
]


const namePlaque = students.map( student => ({
    name: student.name.toUpperCase()
})
)



const over70 = students.filter(student => student.grades >= 70)

console.log(over70)
console.log(namePlaque)
