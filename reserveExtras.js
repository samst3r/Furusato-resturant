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
form.addEventListener("submit", getFormData);
function getFormData(event) {
  event.preventDefault();
  formatPopUp();
}

function formatPopUp() {
  $(".popup-message").html("Reserrvation completed!<br>Thank you!");
  $(".popup-confirmation").fadeIn("slow");
}

$("#popup-button").on("click", function () {
  $(".popup-confirmation").fadeOut("slow");
});
