//Cat quiz for testing and development:

var cats = [];

var cat1 = {
    name: "Luke",
    age: 2,
    sex: "M",
    image: "url",
    description: "He's a p good boy.",
    playfulness: 4,
    cuddlyness: 2,
    chonk: false,
    otherPets: true,
    furLength: "medium",
    quiz: 0
};
cats[0] = cat1;

var cat2 = {
    name: "Leia",
    age: 1,
    sex: "F",
    image: "url",
    description: "She got big jowel chonks on her head, but she good.",
    playfulness: 1,
    cuddlyness: 5,
    chonk: false,
    otherPets: true,
    furLength: "long",
    quiz: 0
};
cats[1] = cat2;

var cat3 = {
    name: "Darth Vader",
    age: 7,
    sex: "M",
    image: "url",
    description: "Breathing issues but very cute!",
    playfulness: 5,
    cuddlyness: 1,
    chonk: false,
    otherPets: false,
    furLength: "short",
    quiz: 0
};
cats[2] = cat3;

var cat4 = {
    name: "Jabba",
    age: 10,
    sex: "M",
    image: "url",
    description: "BIGGEST CHONK!!!",
    playfulness: 3,
    cuddlyness: 3,
    chonk: true,
    otherPets: false,
    furLength: "short",
    quiz: 0
};
cats[3] = cat4;

var cat5 = {
    name: "Han",
    age: 6,
    sex: "M",
    image: "url",
    description: "He knows.",
    playfulness: 4,
    cuddlyness: 3,
    chonk: false,
    otherPets: true,
    furLength: "long",
    quiz: 0
};
cats[4] = cat5;

for (var i = 0; i < 5; i++) {
    console.log("Cat ", i, ": ", cats[i]);
}