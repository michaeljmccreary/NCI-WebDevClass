// "Monitor" the content of the input field
var userNameInput = document.getElementById('userName');
var myBtn = document.getElementById('myBtn');

userNameInput.addEventListener('input', function() {
    if (userNameInput.value.length > 2) {
        myBtn.disabled = false;
    } else {
        myBtn.disabled = true;
    }
});

// Step 1: Create an array called myAnimals
var myAnimals = ['dog', 'elephant', 'cat', 'mouse', 'lion', 'seal', 'Giraffe', 'monkey', 'tiger', 'bear', 'panda', 'penguin', 'snake', 'fox', 'wolf', 'deer', 'rabbit', 'pig', 'cow', 'horse', 'sheep', 'goat', 'chicken', 'duck'];

// Step 2: Pick a random animal name from myAnimals array
function getRandomAnimal() {
    var randomAnimal = Math.floor(Math.random() * myAnimals.length);
    return myAnimals[randomAnimal];
}

// Step 3: Display the name of the animal
var animalElement = document.getElementById('animal');
var randomAnimal = getRandomAnimal();
animalElement.textContent = randomAnimal;

// Step 5: Create an array called myColours
var myColours = ['red', 'blue', 'pink', 'black', 'indigo', 'yellow', 'green', 'purple', 'orange', 'brown', 'white', 'grey', 'gold', 'silver', 'violet', 'cyan', 'magenta'];

// Step 6: Pick a random colour from myColours array
function getRandomColour() {
    var randomColour = Math.floor(Math.random() * myColours.length);
    return myColours[randomColour];
}

// Step 7: Display the colour name
var colourElement = document.getElementById('colour');
var randomColour = getRandomColour();
colourElement.textContent = randomColour;

// Optional step: Change the text colour of the element to match the colour
colourElement.style.color = randomColour;

// Step 8: Display the message when the "Done" button is clicked
myBtn.addEventListener('click', function() {
    var messageElement = document.getElementById('message');
    var userName = userNameInput.value;
    var message = 'Your name is ' + userName + ' and you have a ' + randomColour + ' ' + randomAnimal;
    messageElement.textContent = message;
});
