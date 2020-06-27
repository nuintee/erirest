
function slideup(){
  let bar = document.getElementById('bar');

  if (bar.style.transform == "translateY(80%)") {
    bar.style.transform = "translateY(0)";
  }else if(bar.style.transform != "translateY(0)"){
    bar.style.transform = "translateY(80%)";
  }
}

function tabSelection(x){
  let tab = document.getElementsByClassName(this.className);
  switch (tab) {
    case x==0:
    console.log('0');
      break;
    case x==1:
    console.log(1);
      break;
    default:

  }
}

function atc(button){
  console.log(button.className)

  let item_cloned = button.cloneNode(true);
  item_cloned.removeAttribute("onclick")
  let bar = document.getElementById('bar');
  let sumTxt = document.getElementById('sum');
  let addedItems = document.getElementById('addedItems');
  let newDel = document.createElement("button");
  newDel.className = "deleteFromCartButton";
  //bar.insertBefore(item_cloned,sumTxt);
  item_cloned.appendChild(newDel);
  addedItems.appendChild(item_cloned);

  newDel.addEventListener("click",function(){

    this.closest("div").remove();

  },false);

  //<button class = "addToCartButton"type="button" name="menu-1" onclick="atc(3);"></button>
  if(addedItems.childElementCount >= 1){
    let newIcon = document.getElementById('newIcon');
    newIcon.style.visibility = "visible";
    }

}
