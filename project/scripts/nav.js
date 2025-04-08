const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navebar');



document.addEventListener("DOMContentLoaded", function () {
	if (localStorage.getItem("navbarOpen") === "true") {
		navigation.classList.add("open");
		hamButton.classList.add("open");
	}
});

hamButton.addEventListener("click", () => {
	const isOpen = navigation.classList.toggle("open");
	hamButton.classList.toggle("open");

	localStorage.setItem("navbarOpen", isOpen.toString());
})



