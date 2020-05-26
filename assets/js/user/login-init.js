const setLoginStatus = () => {

	if(document.querySelector(".profile-toggle")) {
		document.querySelector(".profile-toggle").remove()
	}
	const profileElement = document.createElement("div");
	let userName = ``;
	
	if(getUserFromStorage()["name"] === undefined) {
		userName = `<p class='profile-toggle__user'>LOGIN</p>`;;
	} else {
		userName = `<p class='profile-toggle__user'>${getUserFromStorage()["name"]}</p>`;
	}	
	profileElement.classList.add("profile-toggle");
	profileElement.innerHTML = `${userName} <i class="fas fa-user-circle" style="font-size:30px; color:white;"></i>`;
	document.body.append(profileElement);
	profileElement.addEventListener("click", () => {
		const isOut = getUserFromStorage()["name"] === undefined;
		if(!isOut) {
			drawModal(true, "profile");
		} else {
			drawModal(true, "login");
		}
	});
};

setLoginStatus();