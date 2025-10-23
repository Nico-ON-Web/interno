const modal = document.querySelector(".modal")
const mask = document.querySelector(".mask")
const openbtn = document.querySelector("#openbtn")
const closebtn= document.querySelector("#submitbtn")
const croixbtn = document.querySelector(".close-modal")
openbtn.addEventListener("click",(e)=>{
  e.preventDefault()
  modal.classList.remove("display-none")
  mask.classList.remove("display-none")
})

closebtn.addEventListener("click",(e)=>{
  e.preventDefault()
  modal.classList.add("display-none")
  mask.classList.add("display-none")
})

croixbtn.addEventListener("click",(e)=>{
  e.preventDefault()
  modal.classList.add("display-none")
  mask.classList.add("display-none")
})