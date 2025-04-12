  const modal = document.getElementById("formModal");
  const openBtn = document.getElementById("openModalBtn");
  const openBtn1 = document.getElementById("openModalBtn1");
  const closeBtn = document.querySelector(".close-btn");
  openBtn1.onclick = () => modal.style.display = "flex";
  openBtn.onclick = () => modal.style.display = "flex";
  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
  


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
  
  
