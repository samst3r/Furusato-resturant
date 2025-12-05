import {
  animate,
  utils,
  createDraggable,
  spring,
  svg,
  stagger,
  splitText,
} from "https://esm.sh/animejs";

let reserve = document.querySelector("#nav-text0");
let menu = document.querySelector("#nav-text1");
let order = document.querySelector("#nav-text2");

function animateNav(item) {
  const { chars } = splitText(item, {
    chars: { wrap: "clip" },
  });

  animate(chars, {
    y: [{ to: ["100%", "0%"] }],
    duration: 1000,
    ease: "out(3)",
    delay: stagger(100),
  });
}
animateNav(reserve);
animateNav(menu);
animateNav(order);

animate("#nav-text0", {
  delay: 1750,
  scale: [
    { to: 1.25, ease: "inOut(3)", duration: 200 },
    { to: 1, ease: spring({ bounce: 0.7 }) },
  ],
  loop: true,
  loopDelay: 250,
});


function autoNumber(){
    let partyInputValue=document.querySelector("#sizeInput").value
    if(partyInputValue>15){
        let sizeInput =document.querySelector("#sizeInput");
        sizeInput.value=15;
    };
}




