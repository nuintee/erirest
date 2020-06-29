
let foodPrice = document.getElementsByClassName('food-Price');

function slideup(){
  let bar = document.getElementById('bar');

  if (bar.style.transform == "translateY(80%)") {
    bar.style.transform = "translateY(0)";
  }else if(bar.style.transform != "translateY(0)"){
    bar.style.transform = "translateY(80%)";
  }
}

let prices = [];

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

  let itemPrice = Number(item_cloned.getAttribute("value"));
  let itemsInCart = addedItems.childElementCount;

  prices.push(itemPrice);


  console.log(itemPrice);
  console.log(itemsInCart);

  //let sum = 0;

  for (let i = 0; i < prices.length; i++) {
  let sum = itemPrice;
  }

  console.log(sum);

 let priceVal = document.getElementById('priceVal');
 priceVal.innerHTML=sum;

//Deletion
  newDel.addEventListener("click",function(){
    let del = this.getAttribute("value");
    this.closest("div").remove();
    sum -= itemPrice;
    priceVal.innerHTML = sum;
  },false);


}

function onTabClick(event){
  let activeTabs = document.querySelectorAll(".active");

for(let i = 0; i < activeTabs.length; i++){
  activeTabs[i].className =  activeTabs[i].className.replace('active','');
}

//console.log(event.target.parentElement);
event.target.parentElement.className += " active";
//console.log(event.target.href.split('#')[1]);
document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

const element = document.getElementById("nav-tab");

element.addEventListener("click",onTabClick,false);
