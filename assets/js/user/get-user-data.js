const getUserFromStorage = () => {
	let deze_user = ``;
	if(sessionStorage.length > 0) {
		deze_user = JSON.parse(sessionStorage.getItem("user"))[0];
	} else {
		deze_user = ``;
	}
	return deze_user;
};