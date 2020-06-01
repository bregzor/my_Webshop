const drawOrderHistory = (data) => {
  document.querySelector(
      ".modal__user-profile-history"
    ).innerHTML = `<i class="fas fa-history"></i>${data}`;
};

const getOrderHistory = () => {

  const formData = new FormData();
  formData.append("user_id", parseInt(getUserFromStorage()["id"]));
  fetch("./assets/php/user/get-order-history.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      return response.text();
    })
    .then((orders) => {
      const orderData = JSON.stringify(orders)
      if (!sessionStorage.getItem("user_orders")) {
        sessionStorage.setItem("user_orders", orderData);
      }
      drawOrderHistory(orders);
    });
};
