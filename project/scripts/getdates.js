const lastModified = document.querySelector("#lastModified");

let oLastModif = new Date(document.lastModified);

lastModified.innerHTML = `<span class="highlight">Last Modification: ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full",
        timeStyle: "short",
	}
).format(oLastModif)}</span>`;


