// ========= FOCUS =========
const inputs = document.querySelectorAll(".form__input")

// ======= Add Focus =======
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

// ======= Remov Focus ========
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

// ====== To call function ======
inputs.forEach(input=>{
    input.addEventListener("focus", addfocus)
    input.addEventListener("blur", remfocus)
})