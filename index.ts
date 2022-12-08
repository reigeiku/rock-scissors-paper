const start = document.getElementById("start")!;

const rps = ["Rock", "Scissors", "Paper"];

const randomChoice = (): number => Math.floor(Math.random() * 3);

const check = (player: string, computer: string): number => {
    if (player === computer) return -1;
    if (player === "Rock" && computer === "Paper" ) return 0;
    if (player === "Scissors" && computer === "Rock" ) return 0;
    if (player === "Paper" && computer === "Scissors" ) return 0;
    return 1;
}


start.addEventListener("click", () => {
    const computerHand = rps[randomChoice()];
    const playerElement: any = document.getElementById("playerHand")!;

    const playerHand = playerElement.options[playerElement.selectedIndex].text;
    console.log("Player: ", playerHand);
    console.log("Computer: ", computerHand);

    const outcome = check(playerHand, computerHand);

    if (outcome < 0) console.log("It's a tie!");
    if (outcome > 0) console.log("Player wins!")
    else if (outcome === 0) console.log("Computer wins!");
});