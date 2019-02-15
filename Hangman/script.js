//List of Words to pick from
var animalWord = ["scorpion", "manatee", "orangutan", "jaguar", "gorilla", "giraffe", "butterfly"]
var mythicalWord = ["lycanthrope", "pegasus", "liger", "basilisk", "dragon", "kraken"]
var organWord = ["intestines", "gallbladder", "esophagus", "pancreas", "diaphram", "appendix"]

//Choose a random array
let chosenArray = [animalWord, mythicalWord, organWord]
var randArray = chosenArray[Math.floor(Math.random() * chosenArray.length)]

//Choose a random word from array

var randWord = randArray[Math.floor(Math.random() * randArray.length)]
console.log(`Current word is: ` + randWord)
var splitWord = randWord.split('');
console.log(splitWord)

//Display word as word to guess and disguise as underscores
var underscoredWord = []

for (i = 0; i < randWord.length; i++) {
    underscoredWord.push(`__`);
}
document.getElementById(`word_length`).innerHTML = underscoredWord.join(" ");

//Store already chosen letters
var lettGuessed = []

var wrongGuess = []

//List of letters
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



//Number of guesses left 
var bodyParts = 7

//Keep track of win streak
var wins = 0

//Prompt the user to Start the game
$(document).ready(function () {
    $(`#game`).hide()

    $(`#start_button`).click(function () {
        $(`#game`).show();
        $(`#start_button`).hide();
    })

    $("#body_parts").html(bodyParts);

    $("#win").html(wins);

    //Tell user the category of the word
    switch (true) {
        case (randArray === chosenArray[0]):
        $("#category").html(" Animal")
        break;
        case (randArray === chosenArray[1]):
        $("#category").html(" Mythical Creature")
        break;
        case (randArray === chosenArray[2]):
        $("#category").html(" Organ")
        default:
        $("category").html("Your shit isn't working...")
    }

    let corr = 0

    //Register keyboard inputs
    $(document).keypress(function (letter) {
        console.log(letter.key)

        //add leter chosen to letters guessed array

        //Allow only letters to be guessed
        if (alphabet.indexOf(letter.key) === -1) {
            alert("Press a letter from the alphabet DWEEB!")
            return (letter.key)
        }

        //Compare pressed letter to chosen word

        //If key pressed matches a letter in random word, replace underscore with letter
        let correct = false

        for (let x = 0; x < splitWord.length; x++) {
            if (splitWord[x] === letter.key) {
                correct = true
                corr++
                console.log(corr)
                underscoredWord[x] = letter.key;
            }
            $("#word_length").html(underscoredWord.join(" ").toUpperCase());
        }

        //If key pressed does not match lose a life and add letter to wrong list
        if (correct === false) {
            bodyParts--;
            $("#body_parts").html(bodyParts)
            wrongGuess.push(letter.key)
            $("#wrong_guess").html(wrongGuess.join(" ").toUpperCase())
        }      
    })

    //Alert player they won    
    $(document).keyup(function () {
        if (corr === splitWord.length) {
            alert("WINNER WINNER CHICKEN DINNER!")
            location.reload()
        }

        //Alert player they lost
        if (bodyParts === 0) {
            alert("LOSER! The word was " + randWord)
            location.reload()
        }
    })
})









