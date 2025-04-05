function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onload = function () {
    const now = Date.now(); 
    const messageElement = document.getElementById("showmodal");

    if (!localStorage.getItem("hasVisited")) {
        const todayDate = new Date(now).toLocaleDateString(); 
        messageElement.textContent = "Welcome for the first time!";

        localStorage.setItem("firstVisitDate", todayDate);
        localStorage.setItem("lastVisitTime", now); 
        localStorage.setItem("hasVisited", "true");
    } else {
        const lastVisit = parseInt(localStorage.getItem("lastVisitTime"), 10);
        
        const diffInMs = now - lastVisit;
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        
        const visitDate = localStorage.getItem("firstVisitDate");
        if (diffInDays < 1) {
            messageElement.textContent = "Welcome back! You last visited today.";
        }
        else {
            messageElement.textContent = `Welcome back! You first visited on ${visitDate}, and it's been ${diffInDays} day(s) since your last visit.`;
        }
        
        
     
        localStorage.setItem("lastVisitTime", now);
    }
};