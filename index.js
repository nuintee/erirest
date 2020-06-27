
let foodPrice = document.getElementsByClassName('food-Price');

foodPrice.value + "円";

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

  let sum = 0;

  for (var i = 0; i < prices.length; i++) {
    sum += prices[i];
  }

  console.log(sum);

 let priceVal = document.getElementById('priceVal');
 priceVal.innerHTML=sum;


  newDel.addEventListener("click",function(){

    this.closest("div").remove();
  },false);


}
