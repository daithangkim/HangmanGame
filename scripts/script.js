const wordDisplay = document.querySelector(".word-display");
const keyboardDiv = document.querySelector(".keyboard");

//creating random words and their word display gaps
const getRandomWord = () => {
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word, hint);
    document.querySelector(".Hinweis b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}

//when clicked...
const initGame = (button, clickedLetter) => {
    console.log(button, clickedLetter);

}
//creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e=> initGame(e.target, String.fromCharCode(i)))
}

getRandomWord();