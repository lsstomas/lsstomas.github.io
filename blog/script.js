document.addEventListener("DOMContentLoaded", function () {
	// Botão "Voltar ao Topo"
	const backToTopBtn = document.createElement("button");
	backToTopBtn.textContent = "Topo";
	backToTopBtn.classList.add("back-to-top");
	document.body.appendChild(backToTopBtn);

	backToTopBtn.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	function showBackToTopBtn() {
		if (window.scrollY >= 500) {
			backToTopBtn.style.opacity = "1";
		} else {
			backToTopBtn.style.opacity = "0";
		}
	}

	window.addEventListener("scroll", showBackToTopBtn);
});
