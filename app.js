const cardHolderNameInput = document.querySelector(".cardholder-name");
const cardNumberInput = document.querySelector(".card-number");
const expiryMonthInput = document.querySelector(".expiry-month");
const expiryYearInput = document.querySelector(".expiry-year");
const cvcInput = document.querySelector(".cvc");
const confirmButton = document.getElementsByClassName("confirm-button")[0];
const cardNoDisplay = document.getElementsByClassName("card-no")[0];
const cardNameDisplay = document.getElementsByClassName("c-name")[0];
const expDateDisplay = document.getElementsByClassName("exp-date")[0];
const expYearDisplay = document.getElementsByClassName("exp-year")[0];
const cvcDisplay = document.getElementsByClassName("card-back-innerdetails")[0];
const form = document.getElementsByClassName("form")[0];
const thankYouPage = document.getElementsByClassName("thank-you-sec")[0];
const errorOne = document.querySelector(".error");
const errorTwo = document.querySelector(".error-two");
const errorThree = document.querySelector(".error-three");

function changeState() {
     thankYouPage.style.display = "block";
     form.style.display = "none";
}

confirmButton.onclick = function (e) {
     if (
          cardNumberInput.value.length == 0 ||
          cardHolderNameInput.value.length == 00 ||
          expiryMonthInput.value.length == 0 ||
          expiryYearInput.value.length == 0 ||
          cvcInput.value.length == 0
     ) {
          alert("Must fill all input field");
          e.preventDefault();
     } else {
          changeState();
     }
};

confirmButton.addEventListener("click", function (e) {
     if (
          (errorOne.style.display = "block") ||
          (errorTwo.style.display = "block") ||
          (errorThree.style.display = "block")
     ) {
          alert("Must follow all format");
          e.preventDefault();
     } else {
          changeState();
     }
});
cardHolderNameInput.addEventListener("keydown", function (e) {
     if (e.key >= 0 && e.key <= 9) {
          errorOne.style.display = "block";
          this.style.border = "1px solid red";
          cardNameDisplay.innerHTML != this.value;
     } else {
          errorOne.style.display = "none";
          this.style.border = "";
          cardHolderNameInput.addEventListener("input", function () {
               cardNameDisplay.innerHTML = this.value;
          });
     }
});

cardNumberInput.addEventListener("keydown", function (e) {
     if (e.target.value.length % 5 === 4) {
          e.preventDefault();
          e.target.value += " ";
     }

     if (e.key >= 0 && e.key <= 9) {
          errorTwo.style.display = "none";
          this.style.border = "";
          cardNumberInput.oninput = function () {
               cardNoDisplay.innerHTML = cardNumberInput.value;
          };
     } else {
          errorTwo.style.display = "block";
          this.style.border = "1px solid red";
          cardNoDisplay.innerHTML != cardNumberInput.value;
     }
});

expiryMonthInput.addEventListener("keydown", function (e) {
     if (e.target.value.length == 0 || e.target.value > 12) {
          errorThree.style.display = "block";
          this.style.border = "1px solid red";
     } else {
          errorThree.style.display = "none";
          this.style.border = "";
          expiryMonthInput.oninput = function () {
               expDateDisplay.innerHTML = expiryMonthInput.value;
          };
     }

     if (e.target.value.length > 2) {
          alert("Maxlength must be 2");
          e.preventDefault();
     }
});

expiryYearInput.addEventListener("keydown", function (e) {
     if (e.target.value.length > 2) {
          alert("Maxlength must be 2");
          e.preventDefault();
     } else {
          expiryYearInput.oninput = function () {
               expYearDisplay.innerHTML = expiryYearInput.value;
          };
     }
});

cvcInput.addEventListener("keydown", function (e) {
     if (e.target.value.length == 0) {
          errorThree.style.display = "block";
          this.style.border = "1px solid red";
     } else {
          errorThree.style.display = "none";
          this.style.border = "";
          cvcInput.oninput = function () {
               cvcDisplay.innerHTML = cvcInput.value;
          };
     }

     if (e.target.value.length > 3) {
          alert("Maxlength must be 3");
          e.preventDefault();
     }
});
