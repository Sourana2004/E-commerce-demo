let bagItems;

onLoad();




function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayCart_icon();
}
function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayCart_icon();
}
function displayCart_icon(){
    let bagItemCountElement = document.querySelector('.bag_item_count');
    if(bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.shop-section');
    if (!itemsContainerElement) {
      return;
    }
    let innerHtml = '';
    items.forEach(item => {
      innerHtml += `
      <div class="shop-section box">
        <img class="box-image" src="${item.image}" alt="item image">
        <div class="product_name">${item.item_name}</div>
        <div>
            <h2 class="price">₹ ${item.price}</h2>
        </div>
        <button class="addToCart_btn" onclick="addToBag(${item.id})">Add to Bag</button>
      </div>`
    });
    itemsContainerElement.innerHTML = innerHtml;
  }

  