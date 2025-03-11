const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const all = document.querySelector("#all");
const idaho = document.querySelector("#idaho");
const nonus = document.querySelector("#nonus");
const ten = document.querySelector("#ten");
const childs = document.querySelector("#childs");
const childl = document.querySelector("#childl");
const old = document.querySelector("#old");

let allProphets = [];

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    allProphets = data.prophets; 
    displayProphets(allProphets);
}


getProphetData();

const getProphets = (filter = "all") => {
    let prophets = [...allProphets];

    switch (filter) {
        case "idaho":
            prophets = prophets.filter((prophet) => prophet.birthplace === "Idaho");
            break;
        case "nonus":
            prophets = prophets.filter((prophet) => prophet.birthplace === "England");
            break;
        case "ten":
            prophets = prophets.filter((prophet) => prophet.length >= 15);
            break;
        case "childs":
            prophets = prophets.filter((prophet) => prophet.numofchildren < 5);
            break;
        case "childl":
            prophets = prophets.filter((prophet) => prophet.numofchildren >= 10);
            break;
        case "old":
            prophets = prophets.filter(
                (prophet) => getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95
            );
            break;
    }

    displayProphets(prophets);
};

 getProphetData();

 const displayProphets = (prophets) => {
    document.querySelector('#cards').innerHTML = '';
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let FullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let stats = document.createElement("div");
		stats.classList.add("stats");
		let date = document.createElement("p");
        let place = document.createElement("p");
        FullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        date.textContent = `Born: ${prophet.birthdate}`;
        place.textContent = `Birthplace: ${prophet.birthplace}`;
        stats.appendChild(date);
        stats.appendChild(place);

        card.appendChild(FullName);
        card.appendChild(portrait);
        card.appendChild(stats);
        cards.appendChild(card);

    });
  }

  all.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("all");
	all.classList.add("active");
});

idaho.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("idaho");
	idaho.classList.add("active");
});

document.querySelector("#nonus").addEventListener("click", () => {
	clearButtonClasses();
	getProphets("nonus");
	nonus.classList.add("active");
});

ten.addEventListener("click", () => {
clearButtonClasses();
	getProphets("ten");
	ten.classList.add("active");
});

childs.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("childs");
	childs.classList.add("active");
});

childl.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("childl");
	childl.classList.add("active");
});

old.addEventListener("click", () => {
	clearButtonClasses();
	getProphets("old");
	old.classList.add("active");
});

function getAgeAtDeathInYears(birthdate, deathdate) {
	let birth = new Date(birthdate);
	let death = new Date(deathdate);
	if (deathdate === null) {
		death = new Date();
	}
	return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}

function clearButtonClasses() {
    let filterbuttons = document.querySelectorAll("button");
    filterbuttons.forEach(button => button.className = "");
}

