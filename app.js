// Bring in elements from HTML
const buttonEl = document.querySelectorAll('button');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultEl = document.getElementById('result');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');

let arr = ['&#x1F44A;','&#x1F590;','&#x270C;'];


// Add event listeners
for (let i = 0; i < buttonEl.length; i++){
    // Add event listener for each button
    buttonEl[i].addEventListener('click', ()=>{
        const userChoice = buttonEl[i].textContent;
        console.log(userChoice);
        //console.log(rockBtn);
        //const rock = arr[0];
        //const paper = arr[1];
        //console.log(rock);

        // Generate random computer choice
        const rand = buttonEl[Math.floor(Math.random() * buttonEl.length)];
        const computerChoice = rand.textContent;
        //console.log(buttonEl);
        console.log(computerChoice);

        if (userChoice === computerChoice){
            console.log('Tie');
        } else if (userChoice === 'Rock' && computerChoice === 'Paper'){
            console.log('Lose');
        } else if (userChoice === 'Rock' && computerChoice === 'Scissors'){
            console.log('Win');
        } else if (userChoice === 'Paper' && computerChoice === 'Rock'){
            console.log('Win');
        } else if (userChoice === 'Paper' && computerChoice === 'Scissors'){
            console.log('Lose');
        } else if (userChoice === 'Scissors' && computerChoice === 'Rock'){
            console.log('Lose');
        } else {
            console.log('Win');
        }
    });
};