let pannels=document.querySelectorAll(".pannel")
pannels.forEach(pannel=>pannel.addEventListener("click",toggleOpen))
pannels.forEach(pannel=>pannel.addEventListener("transitionend",toggleActive))
function toggleActive(e){
// console.log(e.propertyName)
if(e.propertyName==="flex-grow"){
    this.classList.toggle("active")
}

}
function toggleOpen(){
 this.classList.toggle("open")
}
