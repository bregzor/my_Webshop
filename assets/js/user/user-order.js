const initUserOrder = () => {
	const ID = getUserFromStorage()["id"];
	document.querySelector("#uid").value = ID;
}

const populateOrderForm = () => {
	const inputs = document.querySelectorAll("input");
	inputs.forEach(input => {
		console.log(input.name);
		let data = getUserFromStorage()[input.name];
			input.value = data;
	});
}

if(sessionStorage.length > 0) {
	populateOrderForm();
}