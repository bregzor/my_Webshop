

const template = (type) => {

	let returnHTML = ``;	
	
	switch (type) {
	  case "login":

		returnHTML = `<form class='modal__user-form' method='POST' id='login-form'>
		<h3>Login</h3>
		<label for'name'>
		<span>Enter e-mail</span>
		<input type='email' id='name' name='email'></input>
		</label>
		<label id="pass-container" for'password'>
		<span>Enter password</span>
		<input type='password' id='password' name='password'></input>
		</label>
		<div class='modal__response'></div>
		<button type='button' name='create' onclick='loginUser()' class='user-button user-button--login'>SIGN IN</button>
		<div class='modal__actions'>
		<a href="javascript:void(0)" onclick='resetPassword()'>Forgotten my password?</a>
		<a href="javascript:void(0)" onclick='drawCreate()'>CREATE ACCOUNT</a>
		</div>
		</form>`;
		
		break;
	  case "profile":
		const data = getUserFromStorage();
		returnHTML = `<div class="modal__user-profile">
		<div class='modal__user-profile-history'><i class="fas fa-history"></i></div> 
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
		<p onclick='logoutUser()'>Logout</p>
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
			  <span class='modal__user-form__span' >E-mail</span>
			  <input type='email' name='mail' id='mail' required oninput='validateEmail()' ></input>
			  <p class='mail_error'></p>
		  </label>
		  <label for='firstname'>
		  <span class='modal__user-form__span'>Name</span>
		  <input type='text' name='firstname' id='firstname' required></input>
		  </label>
		  <label for='lastname' style="display:none">
		  <span class='modal__user-form__span'>Lastname</span>
		  <input type='text' name='lastname' id='lastname' required></input>
		  </label>
		  <label for='address'>
		  <span class='modal__user-form__span'>Address</span>
		  <input type='text' name='street' id='address' required></input>
		  </label>
		  <label for='zip'>
		  <span class='modal__user-form__span'>Zipcode</span>
		  <input type='number' name='zip' id='zip' required></input>
		  </label>
		  <label for='cit'>
		  <span class='modal__user-form__span'>City</span>
		  <input type='text' name='city' id='cit' required></input>
		  </label>
		  <label for='password'>
			  <span class='modal__user-form__span'>Password</span>
			  <input type='password' name='password' id='password' required></input>
			  <div class="strength-meter" id="strength-meter"></div>
			  <div id="reasons" class="reasons"></div>	
			  </label>
		  <label for='phone'>
			  <span class='modal__user-form__span' >Phone</span>
			  <input type='number' name='phone' id='phone' required ></input>
		  </label>
		  <button type='button' name='create' id="create-user-btn" onclick="createUser()" >Create</button>
		  <div class='modal__response'></div>
		  <a href='javascript:void(0)' id='login' onclick="drawUser()">Go to login</a>
		  </form>`;
		  break;

	  default:
		returnHTML = "";
		break;
	}
	const closeBtn = `<button class='closeBtn' onclick='this.parentElement.remove();'>X</button>`
	return returnHTML + closeBtn;
  };