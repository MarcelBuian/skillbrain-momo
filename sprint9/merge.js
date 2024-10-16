const obj1 = { a: 'a', b: 'b' };
const obj2 = { c: 'c', b: 'v' };


// Clonarea se face sub forma:
// 1. folosind Object.assign:
const copy1OfObj1 = Object.assign({}, obj1);
// 2. folosind spread operator:
const copy2OfObj1 = { ...obj1 };

const obj3 = Object.assign(copy1OfObj1, obj2);
// Sau se poate face cu spread operator
const obj4 = { ...obj1, ...obj2 }

console.log("obj1=", obj1);
console.log("obj2=", obj2);
console.log("obj3=", obj3);
console.log("obj4=", obj4);
console.log("copy1OfObj1=", copy1OfObj1);
console.log("copy2OfObj1=", copy2OfObj1);

// Destructurare:
const { a, ...obj5 } = obj4;
console.log("obj5=", obj5);