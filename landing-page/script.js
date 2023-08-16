document.getElementById("theme-toggle").addEventListener("click", function () {
	const bodyElement = document.body;

	if (bodyElement.classList.contains("dark-mode")) {
		bodyElement.classList.remove("dark-mode");
	} else {
		bodyElement.classList.add("dark-mode");
	}
});
