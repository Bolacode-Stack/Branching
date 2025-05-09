// Closures
// "use strict";
function funcOne() {
    let age = 29;

    function funcTwo()  {
        age++;
        console.log(age);
    }

    return funcTwo;
}


const result = funcOne();
result();
result();
result();

function elementCreator(element)  {
    return ()  =>  {
        return document.createElement(element);
    }
}

let createDiv = elementCreator('div');
createDiv.innerText = 'Division';
console.log(createDiv())
console.log(createDiv())
console.log(createDiv())
console.log(createDiv())

let heading = document.querySelector('h1')
heading.textContent = createDiv.innerText;

// console.log(createDiv.innerText)
let createSpan = elementCreator('span');
// console.log(createSpan());

// 3
for (let i = 0; i < 3; i++)  {
    setTimeout(()  =>  {
        console.log(i)
    }, 100)
}

// 4
function canDrink(person)  {
    if (person?.age != null)  {
        if (person.age < 18)  {
            console.log('Nope')
        } else if (person.age < 21) {
            console.log('Not in the US')
        } else {
            console.log('Yes')
        }
    } else {
        console.log('You are not a person')
    }
}

// canDrink(p);

const stats = {
    age: 21,
    agemate: 19
}

function canDrinkBetter(person)  {
    if (person?.age == null)  {
        console.log('You are not a Person')
        return;
    } else if (person?.age > 18) {
        console.log('I am an adult')
    }
};

canDrinkBetter(stats);

function canDrink(person)  {
    if (person.age > 18)  return 'You are allowed to drink';
}

console.log(canDrink(stats));
