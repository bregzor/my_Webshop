const loginUser = () => {
	const formData = new FormData(document.querySelector("#login-form"));
	fetch("./assets/php/user/login_user.php", {
	  method: "POST",
	  credentials: "same-origin",
	  body: formData,
	})
	  .then((response) => {
		return response.json();
	  })
	  .then((login) => {
		let mod = document.querySelector(".modal");
		let validLogin  = Object.keys(login[0]).toString();
		const wrongPassword = validLogin.includes("error_password");
		if (!wrongPassword) {
		  sessionStorage.setItem("user", JSON.stringify(login));
		  mod.classList.add("modal--inside");
		  mod.innerHTML = "";
		  mod.innerHTML = template("profile");
		  setLoginStatus();
  		  getOrderHistory();	
		} else {
		  	document.querySelector(".modal__response").innerHTML = `wrong password`;
		}
	  });
  };
