const url = 'https://trystandj.github.io/wdd231/chamber/data/discover.json';
const allplaces = document.querySelector('#allplaces');

let allPlaces = [];

async function getPlaceData() {
    const response = await fetch(url);
    const data = await response.json();
    allPlaces = data.Locations;
    displayPlaces(allPlaces); 
}

getPlaceData();

function displayPlaces(places) {
    if (!Array.isArray(places)) {
        console.error("Error: places is not an array");
        return;
    }

    allplaces.innerHTML = ''; 

    places.forEach((place) => { 
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let figure = document.createElement('figure');
        let image = document.createElement('img');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let learnMoreButton = document.createElement('button');

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

       
        learnMoreButton.setAttribute('role', 'button'); 
        learnMoreButton.setAttribute('aria-label', `Learn more about ${place.name}`); 
        learnMoreButton.setAttribute('tabindex', '0');

        if (place.url) {
            learnMoreButton.addEventListener('click', () => {
                window.open(place.url, '_blank'); 
            });
        } else {
            learnMoreButton.setAttribute('disabled', 'true'); 
            learnMoreButton.style.opacity = "0.5";
        }

        figure.appendChild(image);
        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(learnMoreButton);

        allplaces.appendChild(card);
    });
}
