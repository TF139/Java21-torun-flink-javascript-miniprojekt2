const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;


options.forEach((options) => {
    options.addEventListener("click", function () {

        const pInput = this.textContent;
        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        compareInputs(pInput, cInput);
        updateScore();
        
        if (checkWinner()) {
            pScore = cScore = 0;
            updateScore();
          }
    });
});


function compareInputs(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;
    //Tie check
    if (pInput === cInput) {
        alert(`${currentMatch} is a Tie`);
        return;
    }
    //Rock
    if (pInput === "Rock") {
        if (cInput === "Scissors") {
            alert(`${currentMatch} = You Win`);
            pScore++;
        } else {
            alert(`${currentMatch} = Computer Wins`)
            cScore++;
        }
    }
    //Paper
    else if (pInput === "Paper") {
        if (cInput === "Rock") {
            alert(`${currentMatch} = You Win`);
            pScore++;
        } else {
            alert(`${currentMatch} = Computer Wins`)
            cScore++;
        }
    }
    //Scissors
    else {
        if (pInput === "Scissors") {
            if (cInput === "Paper") {
                alert(`${currentMatch} = You Win`);
                pScore++;
            } else {
                alert(`${currentMatch} = Computer Wins`)
                cScore++;
            }
        }

    }
}

function updateScore() {
    document.getElementById("pScore").textContent = "Player: " + pScore;
    document.getElementById("cScore").textContent = "Computer: " + cScore;
}

function checkWinner() {
    if (pScore === 3 || cScore === 3) {
      if(pScore === 3){
        alert("You win the game! Congratulations!");
        return true;
      }
      else{
        alert("Computer wins the game! Try again next time!");
        return true;
      }
    }
    return false;
  }


