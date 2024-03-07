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
