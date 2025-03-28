const myInfo = new URLSearchParams(window.location.search);


const resultsContainer = document.querySelector('#results');

const rawTimestamp = myInfo.get('timestamp'); 
const date = new Date(rawTimestamp);

const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short"
});

resultsContainer.innerHTML = `
    
    <p><b>First Name:</b> ${myInfo.get('first')}</p>
    <p><b>Last Name:</b> ${myInfo.get('last')}</p>
    <p><b>Title:</b> ${myInfo.get('title')}</p>
    <p><b>Email:</b> ${myInfo.get('email')}</p>
    <p><b>Phone:</b> ${myInfo.get('phone')}</p>
    <p><b>Name:</b> ${myInfo.get('name')}</p>
    <p><b>Business Description:</b> ${myInfo.get('businessDescription')}</p>
    <p><b>Membership Level:</b> ${myInfo.get('Membership-Level')}</p>
    <p><b>Timestamp:</b> ${formattedDate}</p>

`;


