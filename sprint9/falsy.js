const get_falsy_output = (v) => {
    if (v) {
        return 'NU este falsy';
    } else {
        return 'este falsy';
    }
}

const output = (list) => {
    for (const element of list) {
        console.log(element + " ?", get_falsy_output(element));
    }
}

output([
    null,
    undefined,
    false,
    true,
    NaN,
    0,
    -0,
    0n,
    '',
    "javascript",
    9,
    0.4,
    [1, 2],
    [],
    {},
    { a: "b" },
    "0",
])

// Falsy se considera doar:
// null,
// undefined,
// false,
// NaN,
// 0,
// -0,
// 0n,
// '',

const a = 0 || "Default";

console.log(a);

const b = 0 ?? "Default";

console.log(b);