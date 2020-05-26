const validateEmail = (e) => {
	const error = document.querySelector(".mail_error");
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
	  error.style.visibility = "hidden";
	  return true;
	} else {
		error.textContent = "Invalid email address format";
		error.style.visibility = "visible";	
	}
	return false;
  };
  