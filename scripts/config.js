function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();

  /*FormData() is  a built in function  --> it knows to generate an Object of certain shape 
                                        --> FormData() a function which extract all form value
  */
  const formData = new FormData(event.target);

  /* get function get the name attribute */
  const enteredPlayername = formData.get("playername").trim();

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "please enter a valid name!";
    return;
  }
}
