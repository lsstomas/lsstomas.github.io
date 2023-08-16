document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector("form");
	const feedbackMessage = document.getElementById("feedback-message");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const nome = form.querySelector("#nome").value;
		const email = form.querySelector("#email").value;
		const data = form.querySelector("#data").value;
		const horario = form.querySelector("#horario").value;
		const pessoas = form.querySelector("#pessoas").value;

		if (!nome || !email || !data || !horario || !pessoas) {
			feedbackMessage.textContent = "Por favor, preencha todos os campos!";
			feedbackMessage.style.color = "red";
		} else {
			feedbackMessage.textContent = "Reserva solicitada com sucesso!";
			feedbackMessage.style.color = "green";
			form.reset();
		}
	});
});
