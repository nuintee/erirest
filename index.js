
function orderSound(){
  //let orderButton = document.getElementById('orderButton');

  let sound = new Audio('./pinpon.mp3')

    sound.play();

}

function slideup(){
  let bar = document.getElementById('bar');

  if (bar.style.transform == "translateY(-25%)") {
    bar.style.transform = "translateY(25%)";
  }else if(bar.style.transform != "translateY(-25%)"){
    bar.style.transform = "translateY(-25%)";
  }
}
