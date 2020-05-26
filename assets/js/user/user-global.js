
  

const response = document.querySelector(".modal__response");

const handleUser = () => {};

const drawModal = (show, type = "") => {
  if(document.querySelector(".modal")) {
    document.querySelector(".modal").remove();
  }
  
  const el = document.createElement("div");
  el.classList.add("modal");
  if(type === "profile") {
    el.innerHTML = template("profile")
  } else {
    el.innerHTML = template("login");
    
  }
  if (show) {
    if (document.body.appendChild(el)) {
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
}

drawModal(false);
