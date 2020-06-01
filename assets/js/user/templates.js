

const template = (type) => {

	let returnHTML = ``;	
	
	switch (type) {
	  case "login":

		returnHTML = `<form class='modal__user-form' method='POST' id='login-form'>
		<h3>LOGIN TO MY DREAMSHOP</h3>
		<label for'name'>
		<span>ENTER E-MAIL</span>
		<input type='email' id='name' name='email'></input>
		</label>
		<label id="pass-container" for'password' style='margin-top:10px'>
		<span>ENTER PASSWORD</span>
		<input type='password' id='password' name='password'></input>
		</label>
		<div class='modal__response'></div>
		<button type='button' name='create' onclick='loginUser()' class='user-button user-button--login'>SIGN IN</button>
		<div class='modal__actions'>
		<a href="javascript:void(0)" onclick='resetPassword()'>FORGOTTEN MY PASSWORD</a>
		<a href="javascript:void(0)" onclick='drawCreate()'>CREATE ACCOUNT</a>
		</div>
		</form>`;
		
		break;
	  case "profile":
		const data = getUserFromStorage();
		returnHTML = `<div class="modal__user-profile">
		<div class='modal__user-profile-history'></div> 
		<div class='modal__user-profile-cred'><i class="fas fa-user-circle"></i>
		<div class='modal__user-profile-cred-wrap'>
		<p>E-mail: ${data["email"]}</p>
		<p>Name: ${data["name"]}</p>
		<p>${data["adress"]}</p>
		<p>${data["city"]}</p>
		<p>${data["zip"]}</p>
		<p>${data["phone"]}</p>
		</div>
		</div>
		<button type='button' onclick='logoutUser()' class='user-button user-button--login'>LOGOUT</button>
	  </div>`;
	  break;

	  case "create":

		returnHTML = `<form class='modal__user-form' method="POST" id="user-form">
		<h2>CREATE USER</h2>
		  <label for='name' style='display:none'>
			  <span class='modal__user-form__span'>Username</span>
			  <input type='text' name='username' id='name' required></input>
		  </label>
		  <label for='mail'>
			  <span class='modal__user-form__span' >E-MAIL</span>
			  <input type='email' name='mail' id='mail' required oninput='validateEmail()' ></input>
			  <p class='mail_error'></p>
		  </label>
		  <label for='password'>
		  <span class='modal__user-form__span'>PASSWORD</span>
		  <input type='password' name='password' id='password' required></input>
		  <div class="strength-meter" id="strength-meter"></div>
		  <div id="reasons" class="reasons"></div>	
		  </label>
		  <label for='firstname'>
		  <span class='modal__user-form__span'>FULL NAME</span>
		  <input type='text' name='firstname' id='firstname' required></input>
		  </label>
		  <label for='lastname' style="display:none">
		  <span class='modal__user-form__span'>Lastname</span>
		  <input type='text' name='lastname' id='lastname' required></input>
		  </label>
		  <label for='address'>
		  <span class='modal__user-form__span'>STREET</span>
		  <input type='text' name='street' id='address' required></input>
		  </label>
		  <label for='zip'>
		  <span class='modal__user-form__span'>ZIP</span>
		  <input type='number' name='zip' id='zip' required></input>
		  </label>
		  <label for='cit'>
		  <span class='modal__user-form__span'>CITY</span>
		  <input type='text' name='city' id='cit' required></input>
		  </label>
		  <label for='phone'>
			  <span class='modal__user-form__span' >PHONE</span>
			  <input type='number' name='phone' id='phone' required ></input>
		  </label>
		  <button type='button' name='create' id="create-user-btn" class='user-button user-button--login' onclick="validateUserAndCreate()" >CREATE ACCOUNT</button>
		  <div class='modal__response'></div>
		  <button type='button' id="login" class='user-button user-button--login' onclick="drawUser()" >GO TO LOGIN</button>
		   </form>`;
		  break;

	  default:
		returnHTML = "";
		break;
	}
	const closeBtn = `<button class='closeBtn' onclick='this.parentElement.remove();'>X</button>`
	return returnHTML + closeBtn;
  };