const createUser = () => {
	//d/ocument.querySelector(".modal").innerHTML = template("create");
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