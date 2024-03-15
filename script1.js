// 1
const obj = {
    name: "Aimona",
    age: 18,
    favoriteMovie: "Harry Potter",
};
for (const key in obj) {
    console.log(key);
}

// 2
const obj2 = {
    a: 10,
    b: null,
    c: "string",
    d: null,
    e: "another string",
};

for (const key in obj2) {
    if (obj2[key] === null) {
        delete obj2[key];
    }
}
console.log(obj2);

// 3
const objMovies = {
    movie1: "Dune",
    movie2: "Loki",
    movie3: "Gucci",
    movie4: "Harry Potter",
};

for (const key in objMovies) {
    objMovies[key] === "Harry Potter" && console.log(true);
}

// 4
const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumNumArr = 0;
for (let idx = 0; idx < arrayNum.length; idx++) {
    sumNumArr += arrayNum[idx];
}
console.log(sumNumArr / arrayNum.length);

// 5
const studentsByClass = [
    ["1A", ["Alice", "Bob", "Charlie"]],
    ["2B", ["David", "Emily", "Frank"]],
    ["3C", ["Grace", "Henry", "Ivy"]],
];

for (let idx = 0; idx < studentsByClass.length; idx++) {
    console.log(
        `Class: ${studentsByClass[idx][0]} - ${studentsByClass[idx][1]}`
    );
}
