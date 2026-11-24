const snowfall = document.querySelector(".snowfall");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (snowfall && !reducedMotion.matches) {
  const flakeCount = 34;
  const flakes = document.createDocumentFragment();

  for (let index = 0; index < flakeCount; index += 1) {
    const flake = document.createElement("span");
    const size = 6 + Math.random() * 8;

    flake.className = "snowflake";
    flake.textContent = Math.random() > 0.65 ? "✳" : "•";
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.fontSize = `${size}px`;
    flake.style.animationDuration = `${9 + Math.random() * 14}s`;
    flake.style.animationDelay = `${Math.random() * -20}s`;
    flake.style.setProperty("--drift", `${Math.random() * 90 - 45}px`);
    flakes.append(flake);
  }

  snowfall.append(flakes);
}
