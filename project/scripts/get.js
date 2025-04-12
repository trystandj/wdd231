document.addEventListener("DOMContentLoaded", () => {
    const myInfo = new URLSearchParams(window.location.search); 
    const resultsContainer = document.querySelector('#results');

    if (!resultsContainer) {
        console.error("Element with ID 'results' not found in the DOM.");
        return;
    }

    resultsContainer.innerHTML = `
        <p><b>First Name:</b> ${myInfo.get('first')}</p>
        <p><b>Last Name:</b> ${myInfo.get('last')}</p>
        <p><b>Email:</b> ${myInfo.get('email')}</p>
        <p><b>Phone:</b> ${myInfo.get('phone')}</p>
        <p><b>Membership Level:</b> ${myInfo.get('Membership-Level')}</p>
    `;
});
