document.getElementById("open-popup-btn").addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.add("active");
  document.getElementsByClassName("off")[0].classList.add("hide");
});

document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.remove("active");
  document.getElementsByClassName("off")[0].classList.remove("hide");
});