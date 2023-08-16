document.addEventListener("DOMContentLoaded", function () {
	// Dados fictícios para os gráficos
	const dailyData = {
		labels: ["00h", "04h", "08h", "12h", "16h", "20h", "24h"],
		datasets: [
			{
				label: "Consumo em kWh",
				data: [10, 15, 20, 25, 20, 15, 10],
				backgroundColor: "rgba(0, 123, 255, 0.5)",
				borderColor: "rgba(0, 123, 255, 1)",
				borderWidth: 1,
			},
		],
	};

	const monthlyData = {
		labels: ["Dia 1", "Dia 5", "Dia 10", "Dia 15", "Dia 20", "Dia 25", "Dia 30"],
		datasets: [
			{
				label: "Consumo em kWh",
				data: [300, 350, 320, 340, 310, 330, 350],
				backgroundColor: "rgba(220, 53, 69, 0.5)",
				borderColor: "rgba(220, 53, 69, 1)",
				borderWidth: 1,
			},
		],
	};

	function createChart(elementId, data) {
		return new Chart(document.getElementById(elementId).getContext("2d"), {
			type: "line",
			data: data,
		});
	}

	function updateUserName(name) {
		document.querySelector(".user-info span").textContent = `Olá, ${name}`;
	}

	function initializeLogoutButton() {
		document.querySelector(".user-info button").addEventListener("click", () => {
			alert("Você fez logout!");
			// Em uma implementação real, você poderia redirecionar o usuário ou limpar tokens de autenticação aqui.
		});
	}

	// Cria gráficos
	createChart("dailyChart", dailyData);
	createChart("monthlyChart", monthlyData);

	// Atualiza nome do usuário (Você pode substituir 'Luis Felipe' pelo nome do usuário autenticado)
	updateUserName("Luis Felipe");

	// Inicializa o botão de logout
	initializeLogoutButton();
});
