document.addEventListener("DOMContentLoaded", () => {

  const openButtons = document.querySelectorAll(".open-button");
  const closeButtons = document.querySelectorAll(".close-button");


  openButtons.forEach(button => {
      button.addEventListener("click", () => {
          const modalId = button.getAttribute("data-modal");
          const modal = document.getElementById(modalId);
          if (modal) {
              modal.showModal();
          }
      });
  });


  closeButtons.forEach(button => {
      button.addEventListener("click", () => {
          const modal = button.closest("dialog");
          if (modal) {
              modal.close();
          }
      });
  });
});


window.onload = function() {
  var timestampField = document.getElementById("timestamp");
  var currentDate = new Date();
  timestampField.value = currentDate.toISOString();
};

