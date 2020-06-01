const validateUserAndCreate = () => {
	const allInput = document.querySelectorAll(".modal__user-form input")
	let count = 0;
	const missingFields = [];
	Array.from(allInput).forEach(input => {		
	if(input.value.length > 0) {
		count++;
	} else {
		missingFields.push(input);
	}
	});
	if(count >= 7) {
		createUser();
	} else {
		missingFields.forEach(field => {
			field.style.border = "1px solid #98250a";
		});
		count = 0;
	}
  }

const createUser = () => {
	const formElement = document.querySelector("#user-form");
	const formData = new FormData(formElement);
	event.preventDefault();
	fetch("./assets/php/user/create_user.php", {
	  method: "POST",
	  body: formData,
	})
	  .then((response) => {
		if (response.ok) {
		  return response.text();
		}
	  })
	  .then((body) => {
		const response = body;
		if (response.includes("already")) {
		  document.querySelector(".modal__response").innerHTML = `${response}`;
		} else {
		  document.querySelector(".modal__response").innerHTML = `${response}`;
		}
	  });
  };

