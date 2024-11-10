// counter functionality



const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
let countLabel = document.getElementById("counterLabel");

let counter = 0;

increaseBtn.onclick = function() {
    counter++;
    countLabel.textContent = counter;
}

decreaseBtn.onclick = function() {
    if (counter > 0) {
        counter--;
        countLabel.textContent = counter;
    } else {
        counter = 0;
    }
}

resetBtn.onclick = function() {
    counter = 0;
    countLabel.textContent = counter;
}