const getOrderHistory = () => {

	const drawOrderHistory = () => {
		return ``;
	}
	const formData = new FormData();
	formData.append("user_id", "25");
	fetch("./assets/php/user/get-order-history.php", {
	  method: "POST",
	  body: formData,
	})
	  .then((response) => {
		return response.json();
	  })
	  .then((orders) => {
		  sessionStorage.setItem("user_orders", JSON.stringify(orders));
	  });
  };

