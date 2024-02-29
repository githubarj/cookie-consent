const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const loginForm = document.getElementById("login-form");
const modalText = document.getElementById("modal-text");
const declineButton = document.getElementById("decline-btn");

declineButton.addEventListener("mouseenter", () => {
  document.getElementById("modal-choice-btns").classList.toggle('reverse');
});

loginForm.addEventListener("submit", (e) => {
  const loginFormData = new FormData(loginForm);
  const fullName = loginFormData.get("fullName");

  e.preventDefault();
  modalText.innerHTML = ` <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div> `;

  setTimeout(() => {
    document.getElementById("uploadText").innerText = "Making the sale...";
  }, 1500);

  setTimeout(() => {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
    modalCloseBtn.disabled = false;
  }, 3000);
});

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

setTimeout(() => {
  modal.style.display = "block";
}, 1500);


