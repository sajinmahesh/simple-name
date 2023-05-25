const bouncingDiv = document.querySelector(".ball");

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
function getRandomGradient() {
  const hue1 = Math.floor(Math.random() * 360);
  const hue2 = (hue1 + 180) % 360;
  const saturation = Math.floor(Math.random() * 50) + 50;
  const lightness = Math.floor(Math.random() * 20) + 60;
  return `linear-gradient(${hue1}deg, hsl(${hue1}, ${saturation}%, ${lightness}%), hsl(${hue2}, ${saturation}%, ${lightness}%))`;
}

function changeColor() {
  const newColor = getRandomGradient();
  bouncingDiv.style.transition = "background-color 2s ease-in-out";

  bouncingDiv.style.backgroundImage = newColor;
  setTimeout(() => {
    bouncingDiv.style.transition = "none";
  }, 10);
}

setInterval(changeColor, 2000);
