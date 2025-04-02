const url = 'https://trystandj.github.io/wdd231/chamber/data/discover.json';
const cards = document.querySelector('#cards');

let allPlaces = [];

async function getPlaceData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // Check if data is loaded properly
    allPlaces = data.Locations;
    displayPlaces(allPlaces); 
}

getPlaceData();

function displayPlaces(places) {
    if (!Array.isArray(places)) {
        console.error("Error: places is not an array");
        return;
    }

    cards.innerHTML = ''; // Clear previous content

    places.forEach((place) => { 
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let figure = document.createElement('figure');
        let image = document.createElement('img');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let learnMoreButton = document.createElement('button'); // Change to <button>

        title.textContent = place.name;

        image.setAttribute('src', place.image);
        image.setAttribute('alt', `Image of ${place.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '150');

        address.textContent = place.address;
        description.textContent = place.description;

        learnMoreButton.textContent = "Learn More";
        learnMoreButton.classList.add("learn-more");

        // Set additional attributes for better accessibility
        learnMoreButton.setAttribute('role', 'button'); // Specifies the role of the element as a button
        learnMoreButton.setAttribute('aria-label', `Learn more about ${place.name}`); // Describes the button’s action
        learnMoreButton.setAttribute('tabindex', '0'); // Makes the button focusable by keyboard navigation

        // Add event listener to open the URL in a new tab when clicked
        if (place.url) {
            learnMoreButton.addEventListener('click', () => {
                console.log(`Opening URL: ${place.url}`); // Debugging: Check the URL
                window.open(place.url, '_blank'); // Open URL in a new tab
            });
        } else {
            learnMoreButton.setAttribute('disabled', 'true'); // Disable the button if no URL
            learnMoreButton.style.opacity = "0.5"; // Disabled look
        }

        figure.appendChild(image);
        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(learnMoreButton);

        cards.appendChild(card);
    });
}
