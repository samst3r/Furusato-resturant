import {
  animate,
  utils,
  createDraggable,
  spring,
  svg,
  stagger,
  splitText,
} from "https://esm.sh/animejs";
document.querySelector("html").style.width = "100vw";
import * as THREE from "three";

let main = document.querySelector("main");
var camera, scene, renderer, particles;
const assetPath = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2666677/";
let clock = new THREE.Clock();
init();

function init() {
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  main.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    100
  );
  camera.position.z = 5;
  scene.add(camera);

  const light = new THREE.DirectionalLight(0xffffff, 1.0);
  light.position.set(-1, 0, 1);
  scene.add(light);

  const tex = new THREE.TextureLoader().load("images/0002.png");
  const material = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    depthWrite: false,
    map: tex,
    transparent: true,
  });
  const geometry = new THREE.PlaneGeometry(5, 5);
  particles = [];

  const size = 7;

  for (let i = 0; i < 40; i++) {
    const particle = new THREE.Mesh(geometry, material);
    particle.position.set(
      (Math.random() - 0.5) * size,
      (Math.random() - 0.5) * size,
      (Math.random() - 0.5) * size
    );
    particle.rotation.z = Math.random() * Math.PI * 2;
    scene.add(particle);
    particles.push(particle);
  }

  renderer.setAnimationLoop(update);
}

function update() {
  const dt = clock.getDelta();
  if (particles) {
    particles.forEach((particle) => {
      const z = particle.rotation.z;
      particle.lookAt(camera.position);
      particle.rotation.z = z + dt * 0.1;
    });
  }
  renderer.render(scene, camera);
}

window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

//end of smoke functions
//start of nav start animation

//start of svg enter animation
function ramenanim() {
  animate("#main-ramen-SVG", {
    opacity: { from: 0 }, // Animate from .5 opacity to 1 opacity
    translateY: { from: "-20vh" },
    scale: { from: 0.4 },
    duration: 1250,

    ease: "outBack(1.7)",
  });
}

function animationInitalization() {
  ramenanim();
}

//animation function start
animationInitalization();

let title = document.querySelector("#Furusato-title");
let description = document.querySelector("#description-text");

FurusatoTitle(title, 100);
FurusatoTitle(description, 50);

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
