
const logoutUser = () => {
	sessionStorage.removeItem("user");
	sessionStorage.removeItem("user_orders");
	document.querySelector(".modal").remove();
	document.querySelector(".profile-toggle__user").textContent = "LOGIN";
  };