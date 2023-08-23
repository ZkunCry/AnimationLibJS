import { Animation } from "./plugins/animation.js";
const array = [".block-text h1", ".block-text p"];

const selectors = {
  arrayElements: array,
  all: false,
};
const newAnimation = new Animation(selectors, {
  animationName: "appear-left",
  delay: {
    opacity: 0.2,
    transform: 0.2,
  },
  triggerArea: 0.5,
});
