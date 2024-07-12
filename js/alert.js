export const showCustomAlert = (title, message, color) => {
  const alertContainer = document.createElement("div");
  alertContainer.classList.add("custom-alert");
  alertContainer.style.backgroundColor = color;
  alertContainer.style.position = "fixed";
  alertContainer.style.top = "50%";
  alertContainer.style.left = "50%";
  alertContainer.style.transform = "translate(-50%, -50%)";
  alertContainer.style.padding = "20px";
  alertContainer.style.borderRadius = "5px";
  alertContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";

  const alertTitle = document.createElement("h3");
  alertTitle.textContent = title;
  alertTitle.style.margin = "0";
  alertTitle.style.color = "#fff";
  alertTitle.style.display = "inline-block"; // Allow for "X" to fit next to it

  const closeButton = document.createElement("span");
  closeButton.textContent = "X";
  closeButton.style.fontSize = "20px";
  closeButton.style.fontWeight = "bold";
  closeButton.style.cursor = "pointer";
  closeButton.style.position = "absolute";
  closeButton.style.right = "10px"; // Position at right side
  closeButton.style.top = "10px"; // Position at top
  closeButton.style.transform = "translateY(-0%)"; // Adjust vertical positioning

  closeButton.addEventListener("click", () => {
    document.body.removeChild(alertContainer);
  });

  alertContainer.appendChild(alertTitle);
  alertContainer.appendChild(closeButton);
  alertContainer.appendChild(document.createElement("br")); // Add a break for spacing between title/button and message

  const alertMessage = document.createElement("p");
  alertMessage.textContent = message;
  alertMessage.style.margin = "10px 0";
  alertMessage.style.color = "#fff";

  alertContainer.appendChild(alertMessage);

  document.body.appendChild(alertContainer);

  setTimeout(() => {
    document.body.removeChild(alertContainer);
  }, 3000); // Close the alert after 3 seconds
};
