export class Animation {
  constructor(selectors = [], options) {
    this.selectors = this.#setSelectors(selectors);
    this.options = options;
    this.animationName = options.animationName;
    this.delay = options.delay;
    this.triggerArea = options.triggerArea;

    this.setAnimationClass();
    this.setAnimation();
  }
  #setSelectors(selectors) {
    const { arrayElements, all } = selectors;

    let result = all
      ? arrayElements.map((element) => [...document.querySelectorAll(element)])
      : arrayElements.map((element) => document.querySelector(element));
    result = [...new Set(Array.prototype.concat(...result))];
    return result;
  }
  setAnimationClass() {
    this.selectors.forEach((element) => {
      element.classList.add(this.animationName, "hidden");
      this.#setTransition(element);
    });
  }
  #setTransition(element) {
    if (this.delay)
      element.style.transition = `transform ${this.delay.transform}s, opacity ${this.delay.opacity}s`;
  }
  setAnimation() {
    const options = {
      threshold: this.triggerArea,
    };
    const callBack = (entries, observer) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        if (target) {
          setTimeout(() => {
            target.classList.remove("hidden");
          }, 3000);
          // target.classList.remove("hidden");
        }
      });
    };
    const observer = new IntersectionObserver(callBack, options);

    this.selectors.forEach((element) => observer.observe(element));
  }
}
