// &&
// ||

console.log(10 & 5); // 0
console.log(6 & 4); // 4
console.log(10 | 3); // 11
// ^ <<

// 0000 => 0
// 0001 => 1
// 0010 => 2
// 0011 => 3
// 0100 => 4
// 0101 => 5
// 0110 => 6
// 0111 => 7
// 1000 => 8
// 1001 => 9
// 1010 => 10
// 1011 => 11
// 1100 => 12
// 1101 => 13
// 1110 => 14
// 1111 => 15



// 1010 (10)
// &
// 0101 (5)
// =
// 0000 (0)

// 0110 (6)
// &
// 0100 (4)
// =
// 0100 (4)

// 1010 (10)
// |
// 0011 (3)
// =
// 1011 (11)


const a = true;
const b = false;



if (a && b) {
    console.log("a si b sunt adevarate");
} else {
    console.log("a si b nu sunt ambele adevarate");
}