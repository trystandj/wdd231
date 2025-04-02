const url = 'https://trystandj.github.io/wdd231/chamber/data/discover.json';
const cards = document.querySelector('#cards');
const list = document.querySelector(".list");


let allPlaces = [];

async function getPlaceData() {

        const response = await fetch(url);
        const data = await response.json();
        allCompanies = data.companies;
        displayCompanies(allCompanies); 
}

getPlaceData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}



function displayPlaces(places) {
    document.querySelector('#cards').innerHTML = '';

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
        learnMoreButton.addEventListener("click", () => {
            window.open(place.url, "_blank");
        });

        figure.appendChild(image);
        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(learnMoreButton);

        cards.appendChild(card);
    });
}


function clearButtonClasses() {
    let filterbuttons = document.querySelectorAll("button");
    filterbuttons.forEach(button => button.className = "");
}

