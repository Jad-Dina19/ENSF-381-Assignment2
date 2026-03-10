const cartContainer = document.getElementById("cart-container");
const emptyMsg = document.getElementById("empty-cart-msg");


let cart = {};

function updateCartUI() {
    
    cartContainer.innerHTML = "";
    
    let itemNames = Object.keys(cart);

    
    if (itemNames.length === 0) {
        cartContainer.appendChild(emptyMsg);
    } else {
        itemNames.forEach(name => {
            let item = cart[name];
            
            let lineTotal = (item.quantity * item.price).toFixed(2);
            
            
            let itemRow = document.createElement("div");

            
            itemRow.style.display = "flex";
            itemRow.style.justifyContent = "space-between";
            itemRow.style.backgroundColor = "#ffffff"; 
            itemRow.style.border = "1px solid #e4b48c"; 
            itemRow.style.borderRadius = "10px";
            itemRow.style.padding = "10px 20px";
            itemRow.style.margin = "10px 0";
            itemRow.style.width = "95%"; 

            
            
            itemRow.innerHTML = `<span><b>${name} (${item.quantity})</b></span> <span>$${lineTotal}</span>`;

            cartContainer.appendChild(itemRow);
        });
    }
}


document.querySelectorAll('button, .button-style').forEach(button => {
    button.addEventListener('click', function(event) {
        
        if (this.tagName === 'A') {
            event.preventDefault();
        }

        let parentTile = this.parentElement;
        let itemName = parentTile.querySelector('h3').textContent;
        
        
        let priceElement = parentTile.innerText;
        let priceMatch = priceElement.match(/\$(\d+\.\d+)/);
        let itemPrice = priceMatch ? parseFloat(priceMatch[1]) : 0;

        
        if (this.classList.contains('add-button') || this.textContent.includes("Customize")) {
            if (cart[itemName]) {
                cart[itemName].quantity++;
            } else {
                cart[itemName] = { quantity: 1, price: itemPrice };
            }
        } 
        
        else if (this.classList.contains('remove-button')) {
            if (cart[itemName]) {
                cart[itemName].quantity--;
               
                if (cart[itemName].quantity <= 0) {
                    delete cart[itemName];
                }
            }
        }
        
        
        updateCartUI();
    });
});