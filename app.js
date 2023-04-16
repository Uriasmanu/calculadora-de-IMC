function calcularIMC() {
	const peso = document.getElementById("peso").value;
	const altura = document.getElementById("altura").value;
	const imc = peso / (altura * altura);
	
	let resultado = "";
	let cor = "";
	
	if (imc < 18.5) {
		resultado = "Baixo peso";
		cor = "baixo";
	} else if (imc < 25) {
		resultado = "Peso normal";
		cor = "normal";
	} else if (imc < 30) {
		resultado = "Sobrepeso";
		cor = "sobre";
	} else {
		resultado = "Obesidade";
		cor = "obeso";
	}
	
	document.getElementById("resultado").innerHTML = `<div class="${cor}">${resultado} (IMC: ${imc.toFixed(2)})</div>`;
}
