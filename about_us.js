import {
  animate,
  utils,
  createDraggable,
  spring,
  svg,
  stagger,
  splitText,
  createTimeline,
} from "https://esm.sh/animejs";


animate('#ramen-img', {
    delay:500,
height:[{from:["0%"]}],
duration:1500,
  ease:'inOutBack(2)',
});

let title = document.querySelector("#about-us-title");


FurusatoTitle(title, 100);


function FurusatoTitle(text, staggerValue) {
  const { chars } = splitText(text, {
    chars: { wrap: "clip" },
    delay: 500,
  });

  animate(chars, {
    y: [{ to: ["-100%", "0%"] }],
    opacity: { from: 0, to: 1 },
    duration: 1250,
    ease: "inOutBack(1.7)",
    delay: stagger(staggerValue),
  });
}

animate('#description', {
    opacity:[{to:["0","1"]}],
height:[{from:["0%"]}],

duration:1500,
  ease:'inOutBack(1.5)',
});






