const myInfo = new URLSearchParams(window.location.search);

// Selecting a single element with the id "results"
const resultsContainer = document.querySelector('#results');

resultsContainer.innerHTML = `
    <p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} Temple</p>
    <p>Email: ${myInfo.get('email')}</p>
    <p>Phone: ${myInfo.get('phone')}</p>
`;
