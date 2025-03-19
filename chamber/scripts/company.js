const url = 'https://trystandj.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');
const list = document.querySelector(".list");


let allCompanies = [];

async function getCompanyData() {

        const response = await fetch(url);
        const data = await response.json();
        allCompanies = data.companies;
        displayCompanies(allCompanies); 
}

getCompanyData();

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



function displayCompanies(companies) {
    document.querySelector('#cards').innerHTML = '';
    companies.forEach((company) => { 
        let card = document.createElement('section');
        let companyName = document.createElement('h2');
        let logo = document.createElement('img');
        let info = document.createElement("div");
        info.classList.add("info");

        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let membershipLevel = document.createElement("p");

        companyName.textContent = company.name;
        
        logo.setAttribute('src', company.icon);
        logo.setAttribute('alt', `Logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');
        
        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone: ${company["phone-numbers"]}`;
        
        website.textContent = "Visit Website";
        website.setAttribute('href', company.url);
        website.setAttribute('target', '_blank');
        website.classList.add("website-link");

        let membershipText;
        switch(company.membership) {
            case 1:
                membershipText = "Basic Membership";
                break;
            case 2:
                membershipText = "Silver Membership";
                break;
            case 3:
                membershipText = "Gold Membership";
                break;
            default:
                membershipText = "Member";
        }
        membershipLevel.textContent = membershipText;
        membershipLevel.classList.add("membership-level");

        info.appendChild(address);
        info.appendChild(phone);
        info.appendChild(website);
        info.appendChild(membershipLevel);
        
        card.appendChild(companyName);
        card.appendChild(logo);
        card.appendChild(info);
        
        cards.appendChild(card);
    });
}




function clearButtonClasses() {
    let filterbuttons = document.querySelectorAll("button");
    filterbuttons.forEach(button => button.className = "");
}

