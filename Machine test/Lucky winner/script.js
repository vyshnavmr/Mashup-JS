function selectWinner() {
const lotteryTickets = [
    1001, 1002, 1003, 1004, 1005, 1111, 
    2050, 2065, 3099, 3333, 4100, 5555, 
    7777, 8888, 9999, 5432, 1234, 4321
];

const pageDisplay = document.getElementById('result-display');
const modalDisplay = document.getElementById('modal-winner-number');

const winnerModalElement = document.getElementById('winnerModal');
const winnerModal = new bootstrap.Modal(winnerModalElement);


    const randomIndex = Math.floor(Math.random() * lotteryTickets.length);
    const winner = lotteryTickets[randomIndex];

    console.log("The winning number is: " + winner);

    pageDisplay.textContent = "Winner: " + winner;
    document.getElementById("result-display").style.color = "red";

    modalDisplay.textContent = winner;
    winnerModal.show();
}

