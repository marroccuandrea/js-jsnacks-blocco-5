// Snack 1
const zucchine = [
    {
        varietà: 'verde',
        peso: 10,
        lunghezza: 5
    },
    {
        varietà: 'bianca',
        peso: 12,
        lunghezza: 6
    },
    {
        varietà: 'rotonda',
        peso: 15,
        lunghezza: 9
    },
    {
        varietà: 'gialla',
        peso: 6,
        lunghezza: 10
    },
    {
        varietà: 'oblunga',
        peso: 19,
        lunghezza: 18
    },
    {
        varietà: 'fiorentine',
        peso: 4,
        lunghezza: 7
    },
    {
        varietà: 'trombetta',
        peso: 13,
        lunghezza: 8
    },
    {
        varietà: 'siciliane',
        peso: 14,
        lunghezza: 16
    },
    {
        varietà: 'triestine',
        peso: 10,
        lunghezza: 9
    }
    
]

// Calcolo il peso totale delle zucchine

const totZucchine = zucchine.reduce((totale, zucchina) => {
    return totale  + zucchina.peso;
}, 0);
console.log('il peso totale delle zucchine è: ' + totZucchine + 'g');

// Snack 2

const zucchine2 = [
    {
        varietà: 'verde',
        peso: 10,
        lunghezza: 5
    },
    {
        varietà: 'bianca',
        peso: 12,
        lunghezza: 6
    },
    {
        varietà: 'rotonda',
        peso: 15,
        lunghezza: 9
    },
    {
        varietà: 'gialla',
        peso: 6,
        lunghezza: 10
    },
    {
        varietà: 'oblunga',
        peso: 19,
        lunghezza: 18
    },
    {
        varietà: 'fiorentine',
        peso: 4,
        lunghezza: 7
    },
    {
        varietà: 'trombetta',
        peso: 13,
        lunghezza: 8
    },
    {
        varietà: 'siciliane',
        peso: 14,
        lunghezza: 16
    },
    {
        varietà: 'triestine',
        peso: 10,
        lunghezza: 17
    }
    
]

// Creo due array uno per le zucchine che misurano + di 15cm e uno in cui pesano - di 15cm

const zucchineGrandi = zucchine2.filter(zucchina => zucchina.lunghezza > 15);
console.log(zucchineGrandi);

const zucchinePiccole = zucchine2.filter(zucchina => zucchina.lunghezza < 15);
console.log(zucchinePiccole);

// Sommo separatamente i pesi delle zucchine
// Zucchine grandi
const totaleZucchineGrandi = zucchineGrandi.reduce((totale, zucchina) => {
    return totale  + zucchina.peso;
}, 0);
console.log('il peso totale delle zucchine grandi è: ' + totaleZucchineGrandi + 'g');

// Zucchine piccole
const totaleZucchinePiccole = zucchinePiccole.reduce((totale, zucchina) => {
    return totale  + zucchina.peso;
}, 0);
console.log('il peso totale delle zucchine grandi è: ' + totaleZucchinePiccole + 'g');



// Snack 3

let parola = 'Ciao';
function giraParola(word){
    return word.split('').reverse().join('');
}

console.log(giraParola(parola));

// Snack 4

const numbers = [1,2,3];
const words = ['a','b','c'];

function unisciArray(numbers, words) {
    const numbersWords = [];
    for (let i = 0; i < numbers.length; i++) {
        numbersWords.push(numbers[i]);
        numbersWords.push(words[i]);
    }
    return numbersWords;
}
console.log(unisciArray(numbers,words));

  