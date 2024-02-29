const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const loginForm = document.getElementById("login-form");
const modalText = document.getElementById("modal-text");

loginForm.addEventListener("submit", (e) => {
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
    ).innerHTML = `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
  }, 3000);
});

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

setTimeout(() => {
  modal.style.display = "block";
}, 1500);
