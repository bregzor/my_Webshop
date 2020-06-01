
  

const response = document.querySelector(".modal__response");

const drawModal = (show, type = "") => {

  if(document.querySelector(".modal")) {
    document.querySelector(".modal").remove();
  }

  const el = document.createElement("div");
  el.classList.add("modal");
  if(type === "profile") {
    el.innerHTML = template(type);
    
  } else {
    el.innerHTML = template("login");
  }
  if (show) {
    if (document.body.appendChild(el)) {
      if(sessionStorage.length > 0 && type === "profile") {
        el.classList.add("modal--inside");
        drawOrderHistory(sessionStorage.getItem("user_orders"));
       }
    } else {
      document.querySelector("modal").style.visibility = "hidden";
    }
  }
};

const drawUser = () => {
  document.querySelector(".modal").innerHTML = template("login");;
};

const drawCreate = () => {
  document.querySelector(".modal").innerHTML = template("create");
  document.getElementById("password").addEventListener("input",  (e) => {
    initPasswordCheck();
  })
}

drawModal(false);
