
  function validateEmail(e) {
	const mail = document.querySelector("#mail");
	const error = document.querySelector(".mail_error");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
		error.style.visibility = 'hidden';
	}  else {
		error.textContent = 'Invalid email address format';
		error.style.color = 'gray';
		error.style.fontSize = "12px";
		error.style.padding = "5px";
		error.style.visibility = 'visible';
	}
  }