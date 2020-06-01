const populateOrderForm = () => {
  const inputs = document.querySelectorAll(".form-wrapper__form input");
  inputs.forEach((input) => {
    let data = getUserFromStorage()[input.name];
    if (input.type !== "hidden") {
      input.value = data;
    }
  });
};

const initUserOrder = (() => {
  const ID = getUserFromStorage()["id"];
  document.querySelector("#uid").value = parseInt(ID);
  if (sessionStorage.length > 0) {
    populateOrderForm();
  }
})();
