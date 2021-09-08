/*  ==========================================
    Mostrar imagen cargada
* ========================================== */

const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#primary_profile-btn");
const cancelBtn = document.querySelector("#cancel-btn i");
const elementsPreview = document.querySelector("#textPreview");

const img = document.querySelector("#vista");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

function defaultBtnActive() {
    defaultBtn.click();
}

defaultBtn.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            img.src = result;
            wrapper.classList.add("active");
            elementsPreview.style.display = "none";
            img.classList.add("img-thumbnail");
            /**boton de perfil */
            customBtn.classList.add("btn-danger");
            customBtn.classList.remove("btn-primary")
            customBtn.textContent = "Eliminar foto de perfil";

        }
        customBtn.addEventListener("click", function () {
            img.src = "";
            elementsPreview.style.display = "block";
            wrapper.classList.remove("active");
            img.classList.remove("img-thumbnail");
            /**Boton de perfil */
            customBtn.classList.remove("btn-danger");
            customBtn.classList.add("btn-primary")
            customBtn.textContent = "Elegir una imagen";

            
        })
        reader.readAsDataURL(file);
    }
    if (this.value) {
        let valueStore = this.value.match(regExp);
        fileName.textContent = valueStore;
    }
});
