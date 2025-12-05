import {
  animate,
  utils,
  createDraggable,
  spring,
  svg,
  stagger,
  splitText,
} from "https://esm.sh/animejs";

animate("#form", {
  height: [{ to: ["0%", "100%"] }],
  loopDelay: 250,
  ease: "inOutBack(1.7)",
});

document.addEventListener("DOMContentLoaded", (event) => {
  form.addEventListener("submit", getFormData);

  let reservationTimes = [
    "9:00 AM",
    "9:15 AM",
    "9:30 AM",
    "9:45 AM",
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
    "12:00 PM",
    "12:15 PM",
    "12:30 PM",
    "12:45 PM",
    "1:00 PM",
    "1:15 PM",
    "1:30 PM",
    "1:45 PM",
    "2:00 PM",
    "2:15 PM",
    "2:30 PM",
    "2:45 PM",
    "3:00 PM",
    "3:15 PM",
    "3:30 PM",
    "3:45 PM",
    "4:00 PM",
    "4:15 PM",
    "4:30 PM",
    "4:45 PM",
    "5:00 PM",
    "5:15 PM",
    "5:30 PM",
    "5:45 PM",
    "6:00 PM",
    "6:15 PM",
    "6:30 PM",
    "6:45 PM",
    "7:00 PM",
    "7:15 PM",
    "7:30 PM",
    "7:45 PM",
    "8:00 PM",
  ];
  timeInit();
});

function timeInit() {
  for (let t = 0; t < reservationTimes.length; t++) {
    const option = document.createElement("option");
    option.textContent = reservationTimes[t];
    option.value = reservationTimes[t];

    if (Math.random() > 0.7) {
      option.disabled = true;
    }
    const selection = document.querySelector("#timeInput");
    selection.add(option);
  }
}

document.querySelector("#dateInput").min = new Date()
  .toISOString()
  .split("T")[0];
console.log(new Date().toISOString().split("T")[0]);

let maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 20);
console.log(maxDate);
document.querySelector("#dateInput").max = maxDate.toISOString().split("T")[0];

let reservationInfo = [];

let form = document.querySelector("form");
form.addEventListener("submit", getFormData);

function getFormData(event) {
  event.preventDefault();
  formatPopUp();
  let date = document.querySelector("#dateInput").value;
  let time = document.querySelector("#timeInput").value;
  let size = document.querySelector("#sizeInput").value;
  let email = document.querySelector("#eMail").value;

  form.reset();
  reservationInfo.push(date, time, size, email);
  for (let i = 0; i < reservationInfo.length; i++) {
    console.log(reservationInfo[i]);
  }
}

function formatPopUp() {
  $(".popup-message").html("Reserrvation completed!<br>Thank you!");
  $(".popup-confirmation").fadeIn("slow");
}

$("#popup-button").on("click", function () {
  console.log("clicked");
  $(".popup-confirmation").fadeOut("slow");
});

let dateInput = document.querySelector("#dateInput");

dateInput.addEventListener("oninput", dateReset());

function dateReset() {}
