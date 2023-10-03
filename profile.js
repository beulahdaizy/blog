const card1 = querySelector("#card-1");
const card2 = querySelector("#card-2");
const card3 = querySelector("#card-3");
const card4 = querySelector("#card-4");
// Get all the "View" buttons and add click event listeners to each one
const viewButtons = document.querySelectorAll(".view-btn");
const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");
const modalClose = document.querySelector(".close");

viewButtons.forEach((button) => {
  button.addEventListener("click", function () {
    //const card = this.parentElement.parentElement;
    const cardText = card.querySelector(".card-text p");
    const cardContent = card.querySelector(".card-content p");

    modalTitle.textContent = cardText.textContent;
    modalContent.textContent = cardContent.textContent;

    modal.style.display = "block";
  });
});

// Close the modal when the close button is clicked
modalClose.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
