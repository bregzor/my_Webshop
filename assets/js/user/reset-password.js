let mail = ``;

const validateToken = () => {
  const form = document.querySelector(".modal__user-form");
    const formData = new FormData(document.querySelector("#login-form"));
    console.log(formData.get("token"));
    fetch("./assets/php/user/check-token.php", {
    	method: "POST",
    	credentials: "same-origin",
    	body: formData,
      })
    	.then((response) => {
    	  return response.text();
    	})
    	.then((reset) => {
			let resetHTML = ``;
			if(reset === "OK") {
        resetHTML = `<label for='password1'><span>Enter new password</span>
        <input id='password1' type='password' name='password1'></label>
        <label for='password2'><span>Enter new password</span>
        <input id='password2' type='password' name='password2' oninput='validateSamePassword()'></label>
        <input type='hidden' name='email' value='${mail}'>
        <p id='response-pass'></p>
				<button type='button' class='user-button user-button--login' onclick='setNewPassword()'>Reset password</button>`;
			} else {
				resetHTML = "<p>Wrong code</p>";
			}
    		form.innerHTML = resetHTML;
      });
};

const validateSamePassword = () => {
  const pass1 = document.querySelector("#password1");
  const pass2 = document.querySelector("#password2");
  const response = document.querySelector("#response-pass");
  if(pass2.value === pass1.value) {
    response.innerText = "Password match OK";
  } else {
    response.innerText = "Password does not match";
  }
}

const setNewPassword = () => {
const form = document.querySelector(".modal__user-form");
const formData = new FormData(document.querySelector("#login-form"));

  fetch("./assets/php/user/set-password.php", {
    method: "POST",
    credentials: "same-origin",
    body: formData,
    })
    .then((response) => {
      return response.text();
    })
    .then((reset) => {
    let resetHTML = ``;
    if(reset === "OK") {
      resetHTML = template("login");
    } else {
      resetHTML = "<p>Wrong code</p>";
    }
      form.innerHTML = resetHTML;
    });
}

const resetPassword = () => {
  const form = document.querySelector(".modal__user-form");
  const button = form.children[4];
  const passwordContainer = document.querySelector("#pass-container");
  const modalActions = document.querySelector(".modal__actions");
  const email = document.querySelector("#name");
  form.firstElementChild.textContent = "Reset password";
  passwordContainer.style.display = "none";
  button.textContent = "SEND RESETCODE";
  modalActions.style.display = "none";
  button.removeAttribute("onclick");
  
  button.addEventListener("click", () => {
    const formData = new FormData(document.querySelector("#login-form"));
    mail = formData.get("email");
    fetch("./assets/php/user/reset-password.php", {
      method: "POST",
      credentials: "same-origin",
      body: formData,
    })
      .then((response) => {
        return response.text();
      })
      .then((reset) => {
        if (reset === "OK") {
          const resetHTML = `
      <label for='token'><span>Enter resetcode</span>
      <input id='token' type='text' name='token'></label>
      <button type='button' class='user-button user-button--login' 
       onclick='validateToken()'>Verify code</button>`;
            form.innerHTML = resetHTML;
        }
      });
  });
};
