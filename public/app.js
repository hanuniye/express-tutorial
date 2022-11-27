let btn = document.querySelector(".test");
let text = false;

btn.addEventListener("click", () => {
  text = !text;
  console.log(text);

  if(text === false){
    btn.innerHTML = "open"
  }
  else{
    btn.innerHTML = "close"
  }
})