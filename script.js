const toggleButton = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {
	toggleButton.classList.toggle("active");
	menu.classList.toggle("active");
});

navigation.addEventListener("click", () => {
	toggleButton.classList.toggle("active");
	menu.classList.toggle("active");
});
