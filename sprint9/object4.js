
const getKeysOfValue1 = (obj, expectedValue) => {
    const result = [];

    const entries = Object.entries(obj);
    for (const [key, value] of entries) {
        if (value === expectedValue) {
            result.push(key);
        }
    }

    return result;
};


const getKeysOfValue2 = (obj, expectedValue) => {
    const result = [];

    for (const key in obj) {
        const value = obj[key];
        if (value === expectedValue) {
            result.push(key);
        }
    }

    return result;
};


const getKeysOfValue3 = (obj, expectedValue) => {

    const newObj = { ...obj };

    for (const key in newObj) {
        if (obj[key] !== expectedValue) {
            delete newObj[key];
        }
    }

    return Object.keys(newObj);
};

const lessonMembers = {
    12: 123,
    "string": "asa",
    c: 123,
    syntax: 3,
    using: 2,
    operations: 10,
    destructuring: 2,
    array: 2,
    foreach: 10,
};

console.log("findKeys1 of 10", getKeysOfValue1(lessonMembers, 10));
console.log("findKeys1 of 2", getKeysOfValue1(lessonMembers, 2));

console.log("findKeys2 of 10", getKeysOfValue2(lessonMembers, 10));
console.log("findKeys3 of 10", getKeysOfValue3(lessonMembers, 10));

console.log(lessonMembers);


const user = {
    name: 'Vasya',
    married: true,
    age: 25,
    friends: ['Mircea', 'Mihai'],
    children: [
        {
            name: 'Mila',
            age: 1
        },
        {
            name: 'Petr',
            age: 10
        },
    ],
    company: {
        name: 'SkillBrain'
    },
};

console.log("age=10? ", user.children[1].age);
// Sau asa:
console.log("age=10? ", user['children'][1]['age']);

// Accesarea proprietatii unui obiect se face prin doua moduri:
// 1. folosind pounctul:  user.children
console.log(user.children);
// 2. folosind paranteze patrate: user["children"]
console.log(user['children']);

// 2 se foloseste cand nu stim exact valoarea cheii:
const cheie = 'children';
console.log(user[cheie]);



