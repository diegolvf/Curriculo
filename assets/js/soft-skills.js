const circles = document.querySelectorAll(".progress-circle");

circles.forEach((circle) => {
  const numberEl = circle.querySelector(".number");
  const progressEl = circle.querySelector(".circle .progress");

  const target = Number(numberEl.getAttribute("data-value")) || 0;
  const r = progressEl.r.baseVal.value;
  const circumference = 2 * Math.PI * r;

  progressEl.style.strokeDasharray = `${circumference}`;
  progressEl.style.strokeDashoffset = `${circumference}`;

  let counter = 0;
  const stepMs = 25;

  const interval = setInterval(() => {
    if (counter < target) {
      counter++;
      numberEl.textContent = `${counter}%`;
      const offset = circumference - (counter / 100) * circumference;
      progressEl.style.strokeDashoffset = offset;
    } else {
      clearInterval(interval);
    }
  }, stepMs);
});
