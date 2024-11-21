const colorDisplay = document.getElementById("colorDisplay");
const colorValue = document.getElementById("colorValue");
const colorPicker = document.getElementById("colorPicker");
const generateColor = document.getElementById("generateColor");
const copyColor = document.getElementById("copyColor");

// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Set background and update value
function setColor(hex) {
  colorDisplay.style.background = hex;
  colorValue.textContent = hex;
}

// Generate a random color on button click
generateColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  setColor(randomColor);
});

// Update color when user selects from the color picker
colorPicker.addEventListener("input", (e) => {
  setColor(e.target.value);
});

// Copy hex value to clipboard
copyColor.addEventListener("click", () => {
  navigator.clipboard.writeText(colorValue.textContent).then(() => {
    alert(`Copied: ${colorValue.textContent}`);
  });
});
