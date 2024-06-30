const delivery_charges = 99;
let bagItemObjects;
onLoad();
function onLoad(){
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}
function displayBagSummary(){
    let bagSummaryElement = document.querySelector('.bagSummary');
    let totalItem = bagItemObjects.length;
    let MRP = 0;

    bagItemObjects.forEach(bagItem => {
       MRP = MRP + Number(bagItem.price);

    });
    let totalAmount = MRP + delivery_charges;
    if(totalAmount <= 99){
        totalAmount = 0;
    }
    bagSummaryElement.innerHTML = `<div class="bag-details-container">
    <h2 class="price-header">PRICE DETAILS (${totalItem}Items)</h2>
    <div class="price-container">
        <span class="mrp">MRP :  ₹ ${MRP}</span>
        <p class="delivery_charges">Delivery charge :  ₹ ${delivery_charges} </p>
    </div>
    <div class="price-footer">
        <div class="total_amount">Total Amount :  ₹ ${totalAmount}</div>
    </div>
        <a href="checkout.html"><button class="place_order_btn">Place Order</button></a>
</div>
   `;
    
}
function loadBagItemObjects(){
    console.log('bagItems');
    bagItemObjects = bagItems.map(itemId => {
        for(let i=0;i<items.length;i++){
            if(itemId == items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}




function displayBagItems(){
    let containerElement = document.querySelector('.cart-items-container');
    let innerHTML = '';
    bagItemObjects.forEach(bagItem=> {
        innerHTML += generateItemHTML(bagItem);
    });
    containerElement.innerHTML = innerHTML;
    displayCart_icon();
}

function removeFromCart(itemId){
    bagItems = bagItems.filter(cartItemId=> cartItemId != itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}



function generateItemHTML(item) {
return `<div class="cart-element">
<img class="cart-image" src="${item.image}" alt="item image">
<div class="cart_product_name">${item.item_name}</div>
<h2 class="cart_price">₹ ${item.price}</h2>
<span class = "delivery_date">Delivery Date is :${item.delivery_date}.</span>
<span class = "return_period"><u>Return Period is ${item.return_days}</u></span>
<button class="remove-from-cart" onclick = "removeFromCart(${item.id});">Remove</button>
</div>`
}