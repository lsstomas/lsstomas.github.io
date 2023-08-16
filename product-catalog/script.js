document.addEventListener("DOMContentLoaded", function () {
	// Contador de Livros Comprados
	const counterContainer = document.createElement("div");
	counterContainer.style.position = "fixed";
	counterContainer.style.top = "10px";
	counterContainer.style.right = "10px";
	counterContainer.style.padding = "10px";
	counterContainer.style.backgroundColor = "#888";
	counterContainer.style.color = "#ffffff";
	counterContainer.style.borderRadius = "5px";
	counterContainer.style.zIndex = "1000";
	counterContainer.innerHTML = "Livros Comprados: <span id='bookCounter'>0</span>";

	document.body.appendChild(counterContainer);

	let bookCount = 0;

	// Feedback Visual para Livros Comprados
	const buyButtons = document.querySelectorAll(".btn-buy");

	buyButtons.forEach((button) => {
		button.addEventListener("click", function (event) {
			event.preventDefault();

			if (!this.classList.contains("purchased")) {
				bookCount++;
				document.getElementById("bookCounter").innerText = bookCount;
				this.classList.add("purchased");
				this.innerText = "Comprado";
				this.style.backgroundColor = "#888";
				this.style.cursor = "default";

				showMessageModal(this.previousElementSibling.previousElementSibling.innerText);
			}
		});
	});

	// Função para a mensagem modal
	function showMessageModal(bookTitle) {
		const modal = document.createElement("div");
		modal.style.position = "fixed";
		modal.style.top = "0";
		modal.style.left = "0";
		modal.style.width = "100vw";
		modal.style.height = "100vh";
		modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
		modal.style.display = "flex";
		modal.style.alignItems = "center";
		modal.style.justifyContent = "center";
		modal.style.zIndex = "2000";

		const modalContent = document.createElement("div");
		modalContent.style.backgroundColor = "#fff";
		modalContent.style.padding = "20px";
		modalContent.style.borderRadius = "10px";
		modalContent.innerHTML = `<p>${bookTitle} foi adicionado ao seu carrinho!</p> <button onclick="this.parentElement.parentElement.remove()">Fechar</button>`;

		modal.appendChild(modalContent);
		document.body.appendChild(modal);
	}
});
