export {rewards, npcDamage, equip, shipHp, droneParams};

const equip = {
    lg1: 1.8e3,
    lg2: 2.7e3,
    lg3: 4e3,
    db1: 3e3,
    db2: 8e3,
    db3: 22e3,
};

const shipHp = {
    2e3: [50e3, 'btc'],
    3.5e3: [100e3, 'btc'],
    7e3: [200e3, 'btc'],
    12e3: [400e3, 'btc'],
    19e3: [800e3, 'btc'],
    28e3: [2.5e6, 'btc'],
    42e3: [10e6, 'btc'],
    75e3: [30e3, 'plt'],
    99e3: [80e3, 'plt'],
    150e3: [200e3, 'plt'],
    218e3: [400e3, 'plt'],
    296e3: [800e3, 'plt'],
    441e3: [Infinity, 'plt'],
};

const droneParams = {
    0: [12e3, 'plt'],
    1: [24e3, 'plt'],
    2: [36e3, 'plt'],
    3: [48e3, 'plt'],
    4: [30e6, 'btc'],
    5: [100e3, 'plt'],
    6: [600e6, 'btc'],
    7: [Infinity, 'plt'],
};

const npcDamage = {
    hydro: 60,
    jenta: 170,
    mali: 500,
    plarion: 1.3e3,
    motron: 3.3e3,
    xeon: 8e3,
    bangoliour: 18e3,
    zavientos: 38e3,
    magmius: 84e3,
    quattroid: 250e3,
};

const rewards =  {
    hydro: {
        exp: 50,
        btc: 150,
        plt: 1,
    },
    jenta: {
        exp: 100,
        btc: 250,
        plt: 2,
    },
    mali: {
        exp: 200,
        btc: 400,
        plt: 4,
    },
    plarion: {
        exp: 400,
        btc: 700,
        plt: 8,
    },
    motron: {
        exp: 800,
        btc: 1200,
        plt: 16,
    },
    xeon: {
        exp: 1600,
        btc: 2100,
        plt: 35,
    },
    bangoliour: {
        exp: 3200,
        btc: 5300,
        plt: 78,
    },
    zavientos: {
        exp: 6400,
        btc: 14000,
        plt: 192,
    },
    magmius: {
        exp: 16000,
        btc: 33000,
        plt: 700,
    },
    quattroid: {
        exp: 50000,
        btc: 120000,
        plt: 4000,
    }
};