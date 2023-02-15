// Test One - Harry Potter Titles COMPLETED
var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for(let i = 0; i < harryPotterTitles.length; i++) {
    console.log(`Harry Potter ${harryPotterTitles[i]}`)
};

// Test Two - Student Grades: Part 1 COMPLETED
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];

for(let j = 0; j < grades.length; j++) {
   if (grades[j] >= 0 && grades[j] <= 69) {
    console.log('You got an F')
   } else if (grades[j] >= 70 && grades[j] <= 76) {
    console.log('You got a D') 
   } else if (grades[j] >= 77 && grades[j] <= 83) {
    console.log('You got a C')
   } else if (grades[j] >= 84 && grades[j] <= 92) {
    console.log('You got a B')
   } else if (grades[j] >= 93 && grades[j] <= 100) {
    console.log('You got an A')
   }
};

// Test Three - Student Grades: Part 2 COMPLETED
let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let gradeF = 0;
let mostCommonCount = 0;
let mostCommonGrade = '';
let gradeSum = 0;
let gradeAverage = 0;

for(let j = 0; j < grades.length; j += 1) {
    if (grades[j] >= 93 && grades[j] <= 100) {
        gradeA++
    }    
};

for(let j = 0; j < grades.length; j++) {
    if (grades[j] >= 84 && grades[j] <= 92) {
        gradeB++
    }    
};

for(let j = 0; j < grades.length; j++) {
    if (grades[j] >= 0 && grades[j] <= 69) {
        gradeF++;
    } else if (grades[j] >= 70 && grades[j] <= 76) {
        gradeD++;
    } else if (grades[j] >= 77 && grades[j] <= 83) {
        gradeC++;
    } else if (grades[j] >= 84 && grades[j] <= 92) {
        gradeB++;
    } else if (grades[j] >= 93 && grades[j] <= 100) {
        gradeA++;
    }
};

for(i = 0; i < grades.length; i++){
    if(mostCommonCount < gradeF){
        mostCommonCount = gradeF
        mostCommonGrade = "F"
    } else if(mostCommonCount < gradeD){
        mostCommonCount = gradeD
        mostCommonGrade = "D"
    } else if(mostCommonCount < gradeC){
        mostCommonCount = gradeC
        mostCommonGrade = "C"
    } else if(mostCommonCount < gradeB){
        mostCommonCount = gradeB
        mostCommonGrade = "B"
    } else if(mostCommonCount < gradeA){
        mostCommonCount = gradeA
        mostCommonGrade = "A"
    }
};

for(i = 0; i < grades.length; i++){
    gradeSum += grades[i]
};

gradeAverage = gradeSum / grades.length;

console.log("How many students got A's? " + gradeA);
console.log("How many students got B's? " + gradeB);
console.log("Which was the most common letter grade? " + mostCommonGrade);
console.log("What was the average percentage grade in the class? " + Math.ceil(gradeAverage) + '%');

// Test Four - Two, Four, Six, Eight - Who do we appreciate?! CHEER COMPLETED
let count = '';
for(let y = 2; y <= 8; y += 2) {
    count += y + ' '
};
console.log(count + 'Who do we appreciate?!');


// Test Five - Interrupting Cow COMPLETED
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let newSentence = '';
let moo = 'MOOOOOOOO';
for(let z = 0; z < sentenceArray.length; z++){
    if((z + 1) % 3 === 1 && z !== 0){
        newSentence += moo + ' '
    }   newSentence += `${sentenceArray[z]} `
};

console.log(newSentence);

// Test Six - The Beatles COMPLETED
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
};

console.log(`${beatles.members[2].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[2].birth}. He contributed heavily to the ${beatles.albums[0]} Album.`);