export {levels, ranks};

const levels = [
    [1, 0],
    [2, 10000],
    [3, 20000],
    [4, 40000],
    [5, 80000],
    [6, 160000],
    [7, 320000],
    [8, 640000],
    [9, 1280000],
    [10, 2560000],
    [11, 5120000],
    [12, 10240000],
    [13, 20480000],
    [14, 40960000],
    [15, 81920000],
    [16, 163840000],
    [17, 327680000],
    [18, 655360000],
    [19, 1310720000],
    [20, 2621440000],
    [21, 5242880000],
    [22, 10485760000], // max level
    [23, Infinity],
];

const ranks = [
    [1, 0, 'Private'],
    [2, 0.1e6, 'Sergeant'],
    [3, 0.4e6, 'Lieutenant'],
    [4, 1.5e6, 'Captain'],
    [5, 3.5e6, 'Major'],
    [6, 8e6, 'Colonel'],
    [7, 18e6, 'Major general'],
    [8, 32e6, 'Lieut general'],
    [9, 55e6, 'Colon general'],
    [10, 100e6, 'Marshal'],
    [11, Infinity],
];