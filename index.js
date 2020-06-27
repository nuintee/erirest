
let foodPrice = document.getElementsByClassName('food-Price');

function slideup(){
  let bar = document.getElementById('bar');

  if (bar.style.transform == "translateY(80%)") {
    bar.style.transform = "translateY(0)";
  }else if(bar.style.transform != "translateY(0)"){
    bar.style.transform = "translateY(80%)";
  }
}

function tabSelection(x){

  let idx1 = document.getElementById('index-1');
  let idx2 = document.getElementById('index-2');
  let idx3 = document.getElementById('index-3');
  let idx4 = document.getElementById('index-4');
  let idx5 = document.getElementById('index-5');
  let idx6 = document.getElementById('index-6');

  let idxs = [idx1,idx2,idx3,idx4,idx5,idx6];



  idx1.style.display = "inline-block";
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
