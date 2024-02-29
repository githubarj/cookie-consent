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
});

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

setTimeout(() => {
  modal.style.display = "block";
}, 1500);
