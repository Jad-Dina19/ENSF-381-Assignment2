let secondsLeft = 600;
let timerDisplay = document.getElementById("timer-display");

let timerInterval = setInterval(function() {
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    timerDisplay.textContent = "Order Time Left: " + minutes + ":" + seconds;

    if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        window.location.href = "order_summary.html";
    }
    secondsLeft--;
}, 1000);

function updatePrice() {
    let toppingOptions = document.getElementsByName("topping");
    let toppingCount = 0;

    for (let i = 0; i < toppingOptions.length; i++) {
        if (toppingOptions[i].checked) {
            toppingCount++;
        }
    }

    let totalPrice = 6.00 + (toppingCount * 1.50);
    document.getElementById("price-display").textContent = "Total Price: $" + totalPrice.toFixed(2);
}

let checkboxes = document.getElementsByName("topping");
for (let j = 0; j < checkboxes.length; j++) {
    checkboxes[j].addEventListener("change", updatePrice);
}

let orderForm = document.getElementById("order-form");

orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let baseOptions = document.getElementsByName("type");
    let baseSelected = false;
    let toppingOptions = document.getElementsByName("topping");
    let toppingSelected = false;

    for (let k = 0; k < baseOptions.length; k++) {
        if (baseOptions[k].checked) {
            baseSelected = true;
            break;
        }
    }

    for (let l = 0; l < toppingOptions.length; l++) {
        if (toppingOptions[l].checked) {
            toppingSelected = true;
            break;
        }
    }

    if (baseSelected === false) {
        alert("Please select a base flavor (Cup or Cone).");
        return;
    }
    if (toppingSelected === false) {
        alert("At least one topping must be selected.");
        return;
    }

    window.location.href = "order_summary.html";
});