var submit_button=  document.getElementById("submit_button");

submit_button.addEventListener("click",function(){
   event.preventDefault()
})

submit_button.addEventListener("click",function(){
    submit_button.textContent= "submitted";
    submit_button.style.background="green";

})